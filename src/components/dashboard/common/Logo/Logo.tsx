import Link from "next/link";
import Image from "next/image";

export default function Logo({ isCardLogo }: { isCardLogo?: boolean }) {
    return (
        <Link href="/dashboard/list">
            <Image
                src="/logo.svg"
                width={146}
                height={32}
                alt="logo"
                priority
                className={isCardLogo ? "ml-6 mt-6" : ""}
            />
        </Link>
    );
}
