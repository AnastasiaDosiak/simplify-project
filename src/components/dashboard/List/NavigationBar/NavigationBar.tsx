"use client";
import Link from "next/link";
import { navItems } from "@/consts";
import Logo from "@/components/dashboard/common/Logo/Logo";
import Image from "next/image";
import { BellIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function NavigationBar({
    isDashboard
}: {
    isDashboard: boolean;
}) {
    const pathName = usePathname();
    return (
        <div className="bg-darkBlueBackground pb-[10rem] px-10 mb-10">
            <div className="flex py-6 items-center border-solid border-navBorder border-b mb-6 flex-wrap justify-between">
                <div className="flex">
                    <Logo />
                    <nav className="flex justify-between">
                        <ul className="flex mt-4 sm:mt-0">
                            {navItems.map((navItem, index) => {
                                return (
                                    <Link
                                        href={navItem.link}
                                        key={index}
                                        className="text-white"
                                    >
                                        <li
                                            key={index}
                                            className={`mr-3 sm:text-base text-md px-4 py-2 rounded hover:bg-darkBlueHover cursor-pointer transition-colors duration-300 ${
                                                pathName === navItem.link
                                                    ? "underline bg-darkBlueHover"
                                                    : ""
                                            }`}
                                        >
                                            {navItem.text}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-x-2">
                    <BellIcon width={25} height={25} color="#9097A4" />
                    <Image
                        src="/profile.png"
                        alt="profile"
                        width={35}
                        height={35}
                        onClick={() => alert("no profile available yet")}
                        className="rounded-full object-cover cursor-pointer"
                    />
                </div>
            </div>
            <h1 className="sm:text-mainHeading text-lg text-white font-bold">
                {isDashboard ? "Dashboard List" : "Browse List"}
            </h1>
        </div>
    );
}
