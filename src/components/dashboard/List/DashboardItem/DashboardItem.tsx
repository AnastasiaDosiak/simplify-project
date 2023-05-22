import Status from "@/components/dashboard/common/Status/Status";
import Link from "next/link";
import { DashboardItemInterface } from "@/interfaces";
export default function DashboardItem(item: DashboardItemInterface) {
    return (
        <tr className="border-solid border-borderLightGray border-b sm:text-base text-sm">
            <td className="py-[1.5rem] sm:w-[45%] w-[40%] pr-2.5">
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
            <td className="py-2 sm:w-[25%] w-[20%]">{item.seller}</td>
            <td className="py-2">
                <Status isActive={item.active} />
            </td>
            <td className="py-2 sm:w-[15%] w-[20%] font-semibold">
                {item.price} $
            </td>
            <td className="py-2">
                <button
                    className="text-red font-semibold cursor-not-allowed"
                    disabled
                >
                    Remove
                </button>
            </td>
        </tr>
    );
}
