"use client";
import Logo from "@/components/dashboard/common/Logo/Logo";
import { navItems } from "@/consts";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function NavigationBar() {
    const pathName = usePathname();
    return (
        <div className="flex flex-col justify-between bg-darkBlueBackground w-[20%] h-screen">
            <div>
                <Logo isCardLogo={true} />
                <nav className="mt-5">
                    <ul className="px-1 flex flex-col">
                        {navItems.map((navItem, index) => {
                            const isActiveLink =
                                pathName === navItem.link ||
                                (pathName.includes("item") &&
                                    navItem.link === navItems[0].link);
                            return (
                                <Link
                                    href={navItem.link}
                                    key={index}
                                    className={`mr-3 mb-2 text-cardNavItemColor text-md px-4 py-2 rounded hover:text-white hover:bg-darkBlueHover cursor-pointer transition-colors duration-300 ${
                                        isActiveLink
                                            ? "underline bg-darkBlueHover text-white"
                                            : ""
                                    }`}
                                >
                                    <li className="flex items-center flex-col tablet:flex-row">
                                        {navItem.icon}
                                        <span className="ml-0 tablet:ml-3.5 leading-4 text-sm tablet:text-base">
                                            {navItem.text}
                                        </span>
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div
                className="bg-profileBgColor flex py-4 px-3 tablet:space-x-4 space-x-0 tablet:flex-row flex-col hover:cursor-pointer hover:bg-darkBlueHover transition-colors duration-300"
                onClick={() => alert("no profile available yet")}
            >
                <Image
                    src="/profile.png"
                    alt="profile"
                    width={42}
                    height={42}
                    className="rounded-full object-cover"
                />
                <div className="flex flex-col tablet:mt-0 mt-2 text-sm tablet:text-base">
                    <span className="text-white font-semibold">
                        Anastasiia Dosiak
                    </span>
                    <span className="text-profileTextDescription">
                        View profile
                    </span>
                </div>
            </div>
        </div>
    );
}
