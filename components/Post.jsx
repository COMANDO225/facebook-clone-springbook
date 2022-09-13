import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = ({post}) => {

    const PostOption = ({value, Icon}) => {
        return (
            <div className="flex rounded-md items-center cursor-pointer p-2 font-medium text-gray-500 space-x-1 hover:bg-gray-100 flex-grow justify-center">
                <Icon className="h-5 w-5"/>
                <p className="">{value}</p>
            </div>
        );
    }

    console.log(post);

    return (
        <div className="flex flex-col" key={post.id}>
            <div className="bg-white shadow mt-6 rounded-t-md p-3">
                <div className="flex items-center space-x-2">
                    <Image
                        width={40}
                        height={40}
                        src={post.avatar}
                        alt={'imagen de perfil'}
                        className="rounded-full cursor-pointer"
                    />
                    <div className="">
                        <p className="font-medium">{post.name}</p>
                        <p className="text-xs text-gray-500">{post.timeStamp}</p>
                    </div>
                </div>
                <div className="py-4 pb-0">{post.post}</div>
            </div>
            {post.image != null &&
                <div className="relative w-full h-60 md:h-96 bg-white">
                    <Image src={post.image} layout={"fill"} objectFit={"cover"} alt={'imagen de post'} />
                </div>
            }
            <div className="flex items-center justify-center bg-white p-3 rounded-b-md shadow">
                <PostOption Icon={FiThumbsUp} value={'Me gusta'}/>
                <PostOption Icon={FaRegCommentAlt} value={'Comentar'}/>
                <PostOption Icon={RiShareForwardLine} value={'Compartir'}/>
            </div>
        </div>
    );
}

export default Post;