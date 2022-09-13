const HeaderNavOptions = ({children, onClick}) => {
    return (
        <div onClick={onClick} className="hidden lg:inline-flex bg-gray-200 max-auto rounded-full p-2 cursor-pointer hover:bg-gray-300 text-gray-600">
            {children}
        </div>
    );
}

export default HeaderNavOptions;