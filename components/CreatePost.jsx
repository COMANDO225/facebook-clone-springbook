import axios from 'axios';
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { addPost } from '../public/src/features/postSlice';

const CreatePost = () => {

    const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

    const { data: sessionFacebook } = useSession()
    const inputRef = useRef(null)
    const hiddenFileInput = useRef(null)

    const [imageToPost, setImageToPost] = useState(null)
    const [nameImageToPost, setNameImageToPost] = useState(null)

    const dispatch = useDispatch()

    const handleClick = () => {
        hiddenFileInput.current.click()
    }

    const addImageToPost = (event) => {
        const reader = new FileReader()
        if(event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (e) => {
                setImageToPost(e.target.result)
                setNameImageToPost(event.target.files[0].name)
            }
        }
    }
    
    const removeImage = () => {
        setImageToPost(null)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!inputRef.current.value) return;
        const formData = new FormData()

        formData.append('file', imageToPost)
        formData.append('post', inputRef.current.value)
        formData.append('name', sessionFacebook?.user.name)
        formData.append('email', sessionFacebook?.user.email)
        formData.append('avatar', sessionFacebook?.user.image)
        
        axios.post(FACEBOOK_CLONE_ENDPOINT, formData,{
            headers: { Accept: 'application/json' }
        })
        .then(res => {
            inputRef.current.value = ''
            dispatch(addPost(res.data))
            setImageToPost(null)
            setNameImageToPost(null)
        })
        .catch(err => {
            console.log(err)
        })
    }


    const CreatePostItem = ({ Icon, value, color, onClick }) => {
        return (
            <div onClick={onClick} className="flex items-center p-2.5 cursor-pointer space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md">
                <Icon size={24} className={color} />
                <p className='text-sm font-semibold text-gray-500'>{value}</p>
                {onClick && 
                    <input onChange={addImageToPost} ref={hiddenFileInput} type='file' hidden accept='image/*'/>
                }
            </div>
        );
    }

    return (
        <div className="bg-white rounded-md shadow text-gray-500 p-3">
            <div className="flex space-x-2 items-center">
                <Image
                    src={sessionFacebook ? sessionFacebook.user.image : "/images/profile.png"}
                    height={40}
                    width={40}
                    alt={'imagen de perfil'}
                    className="rounded-full cursor-pointer"
                />
                <form className="flex flex-1">
                    <input ref={inputRef} className='rounded-full text-sm flex-grow h-10 focus:outline-none bg-gray-100 px-4' type="text" placeholder={`¿Que estás pensando, ${sessionFacebook ? sessionFacebook.user.name.split(" ")[0] : 'usuario'}?`}/>
                    <button type='submit' onClick={handleSubmit} hidden></button>
                </form>
            </div>
            {
                imageToPost &&
                <div onClick={removeImage} className="flex items-center hover:bg-gray-100 transition duration-75 mt-3 rounded-lg px-4 py-2 space-x-4 cursor-pointer justify-between">
                    <div className='flex items-center gap-2'>
                        <img src={imageToPost} alt="imagen a publicar" className="h-10 object-cover"/>
                        <p className='text-xs font-medium'>{nameImageToPost}</p>
                    </div>
                    <RiDeleteBin6Line size={20} className='hover:text-red-500' />
                </div>
            }
            <div className='flex justify-evenly py-2 pb-0'>
                <CreatePostItem color={'text-red-500'} Icon={HiOutlineVideoCamera} value={'Vídeo en directo'}/>
                <CreatePostItem onClick={handleClick} color={'text-green-500'} Icon={IoMdPhotos} value={'Foto/vídeo'}/>
                <CreatePostItem color={'text-yellow-500'} Icon={BsEmojiSmile} value={'Sentimiento'}/>
            </div>
            
        </div>
    );
}

export default CreatePost;