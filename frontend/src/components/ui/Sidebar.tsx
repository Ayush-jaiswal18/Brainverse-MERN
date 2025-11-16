import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/Twitter";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white border-r-brandGray-100 w-72 fixed left-0 top-0  pl-6">

        <div className="flex text-2xl pt-8 items-center font-semibold">
            <div className="pr-2 text-purple-700">
                <Logo />
            </div>
            Brainverse
        </div>

        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
} 