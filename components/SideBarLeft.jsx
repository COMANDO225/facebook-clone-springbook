import SideBarLeftItem from "./SideBarLeftItem";
import { MdGroups, MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

const SideBarLeft = () => {
    return (
        <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
            <SideBarLeftItem Icon={MdGroups} value="Inicio" />
            <SideBarLeftItem Icon={AiOutlineShop} value="MarketPlace" />
            <SideBarLeftItem Icon={MdOutlineOndemandVideo} value="Videos" />
            <SideBarLeftItem Icon={BsStopwatch} value="Memories" />
            <SideBarLeftItem Icon={MdOutlineExpandMore} value="Pages" />
            <div>

            </div>
        </div>
    );
}

export default SideBarLeft;