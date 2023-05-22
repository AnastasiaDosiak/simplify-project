import Logo from "@/components/dashboard/common/Logo/Logo";
import { navItems } from "@/consts";
import Link from "next/link";
import Image from "next/image";

export default function NavigationBar() {
    return (
        <div className="flex flex-col justify-between bg-darkBlueBackground w-[20%] h-screen">
            <div>
                <Logo isCardLogo={true} />
                <nav className="mt-5">
                    <ul className="px-1">
                        {navItems.map((navItem, index) => {
                            return (
                                <li
                                    key={index}
                                    className="mr-3 mb-2 text-cardNavItemColor text-md px-4 py-2 rounded hover:text-white hover:bg-darkBlueHover cursor-pointer transition-colors duration-300"
                                >
                                    <Link
                                        href={navItem.link}
                                        className="flex items-center flex-col tablet:flex-row"
                                    >
                                        {navItem.icon}
                                        <span className="ml-0 tablet:ml-3.5 leading-4 text-sm tablet:text-base">
                                            {navItem.text}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div className="bg-profileBgColor flex py-4 px-3 tablet:space-x-4 space-x-0 tablet:flex-row flex-col">
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
