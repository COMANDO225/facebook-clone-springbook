import { HiOutlineHome } from "react-icons/hi";

const HeaderNavItem = ({children}) => {
    return (
        <div className="flex items-center h-14 px-4 md:px-8 rounded-md md:hover:bg-gray-100 cursor-pointer">
            {children}
        </div>
    );
}

export default HeaderNavItem;