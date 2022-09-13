import Image from 'next/image'
import FacebookLogo from './icons/FacebookLogo';

import { useSession, signOut } from 'next-auth/react'

import { BiSearch } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';
import { RiFlag2Line } from 'react-icons/ri';
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from 'react-icons/md';
import { AiFillBell, AiFillMessage, AiOutlineShop } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CgMenuGridO } from 'react-icons/cg';
import HeaderNavItem from './HeaderNavItem';
import HeaderNavOptions from './HeaderNavOptions';

const Header = () => {

    const { data: sessionFacebook, status } = useSession()
    console.log(sessionFacebook);

    return (
        <header className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
            {/* Left component */}
            <div className="flex min-w-fit">
                <FacebookLogo/>
                <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
                    <BiSearch size={20} className="text-gray-600" />
                    <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder='Buscar en Facebook'/>
                </div>
            </div>

            {/* Center Component */}
            <div className="flex flex-grow justify-center mx-2">
                <div className="flex items-center">
                    <HeaderNavItem>
                        <HiOutlineHome size={25} className="max-auto text-gray-600" />
                    </HeaderNavItem>
                    <HeaderNavItem>
                        <RiFlag2Line size={25} className="max-auto text-gray-600" />
                    </HeaderNavItem>
                    <HeaderNavItem>
                        <MdOutlineOndemandVideo size={25} className="max-auto text-gray-600" />
                    </HeaderNavItem>
                    <HeaderNavItem>
                        <AiOutlineShop size={25} className="max-auto text-gray-600" />
                    </HeaderNavItem>
                    <HeaderNavItem>
                        <IoGameControllerOutline size={25} className="max-auto text-gray-600" />
                    </HeaderNavItem>
                </div>
            </div>
            {/* Right Component */}
            <div className="flex items-center justify-end min-w-fit space-x-2">
                <div className='flex items-center hover:bg-gray-200 rounded-full p-0.5 pl-1'>
                    <Image src={sessionFacebook ? sessionFacebook.user.image : "/images/profile.png"} width={40} height={40} alt={'imagen de perfil'} className="rounded-full" />
                    <p className='hidden lg:inline-flex font-semibold text-sm whitespace-nowrap p-3 pl-1.5 max-w-xs'>{sessionFacebook ? sessionFacebook.user.name.split(" ")[0] : 'Usuario'}</p>
                </div>
                <HeaderNavOptions>
                    <CgMenuGridO size={24} className="text-gray-600" />
                </HeaderNavOptions>
                <HeaderNavOptions>
                    <AiFillMessage size={24} className="text-gray-600" />
                </HeaderNavOptions>
                <HeaderNavOptions>
                    <AiFillBell size={24} className="text-gray-600" />
                </HeaderNavOptions>
                <HeaderNavOptions onClick={signOut}>
                    <MdOutlineExpandMore size={24} className="text-gray-600" />
                </HeaderNavOptions>
            </div>
        </header>
    );
}

export default Header;