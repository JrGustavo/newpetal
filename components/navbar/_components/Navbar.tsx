import {Logo} from "@/components/navbar/_components/Logo";
import {NavigationMenuBar} from "@/components/navbar/_components/Menu";
import ActionButtons from "@/components/navbar/_components/ActionButton";


export const Navbar = () => {
    return (
        <div
        className="
        flex
        items-center
        justify-between
        pr-10
        lg:px-20
        sticky
        top-0
        z-50
        bg-white
        h-24
        "
        >
            <div className="
            px-4
            "
            >
                <div className="w-40">
                    <Logo/>
                </div>
            </div>
            <div className="flex items-center">
                <NavigationMenuBar/>
                <ActionButtons />

            </div>

        </div>
    );
};