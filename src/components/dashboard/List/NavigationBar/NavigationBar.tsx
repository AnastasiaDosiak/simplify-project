import Link from "next/link";
import { navItems } from "@/consts";
import Logo from "@/components/dashboard/common/Logo/Logo";

export default function NavigationBar() {
    return (
        <div className="bg-darkBlueBackground pb-[10rem] px-10 mb-10">
            <div className="flex py-6 items-center border-solid border-navBorder border-b mb-6 flex-wrap">
                <Logo />
                <nav>
                    <ul className="flex mt-4 sm:mt-0">
                        {navItems.map((navItem, index) => {
                            return (
                                <li
                                    key={index}
                                    className="mr-3 sm:text-base text-md px-4 py-2 rounded hover:bg-darkBlueHover cursor-pointer transition-colors duration-300"
                                >
                                    <Link
                                        href={navItem.link}
                                        className="text-white"
                                    >
                                        {navItem.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <h1 className="sm:text-mainHeading text-lg text-white font-bold">
                Dashboard
            </h1>
        </div>
    );
}
