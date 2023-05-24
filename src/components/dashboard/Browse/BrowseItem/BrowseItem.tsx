import Link from "next/link";
import { BrowseItemInterface } from "@/interfaces";
export default function BrowseItem(item: BrowseItemInterface) {
    return (
        <tr className="border-solid border-borderLightGray border-b sm:text-base text-sm">
            <td className="py-[1.5rem] pr-2.5">
                <Link
                    href={`item/${item.id}`}
                    className="flex items-center underline group text-gray-800 hover:text-buttonBlue transition-colors duration-300 cursor-pointer"
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="sm:w-10 sm:h-10 w-5 h-5 object-contain mr-4"
                    />
                    <span className=" font-semibold">{item.name}</span>
                </Link>
            </td>
            <td className="py-2 font-semibold">{item.color}</td>
            <td className="py-2">{item.seller}</td>
            <td className="py-2 font-semibold">{item.price} $</td>
        </tr>
    );
}
