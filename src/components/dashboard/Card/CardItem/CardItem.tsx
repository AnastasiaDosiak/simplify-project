import Status from "@/components/dashboard/common/Status/Status";
import { DashboardItemInterface } from "@/interfaces";
import Link from "next/link";

export default function CardItem(props: DashboardItemInterface) {
    return (
        <div className="bg-white shadow-md rounded tablet:w-[20%] w-[100%] flex flex-col justify-between">
            <div className="flex flex-col items-center tablet:px-12 px-6 tablet:pt-5 pt-2.5 gap-2">
                <img
                    src={props.image}
                    alt={props.name}
                    className="tablet:w-[5.25rem] w-[2rem] tablet:h-[4.875rem] h-[2rem] rounded-full"
                />
                <span className="tablet:text-base text-sm font-bold text-center">
                    {props.name}
                </span>
                <span className="text-grayText tablet:text-base text-sm">
                    {props.price} $
                </span>
            </div>
            <div className="mt-4 flex flex-col items-center">
                <Status isActive={props.active} />
                <div className="flex tablet:flex-row items-center flex-col border-t border-borderGray w-[100%] mt-4 tablet:text-md text-sm font-bold ">
                    <button className="tablet:px-6 px-3 tablet:py-3 py-1.5 w-[50%] text-red tablet:border-r border-r-none tablet:border-borderGray hover:bg-borderLightGray cursor-pointer transition-colors duration-300">
                        Remove
                    </button>
                    <Link
                        href={`item/${props.id}`}
                        className="tablet:px-6 px-3 tablet:py-3 py-1.5 w-[50%] hover:bg-borderLightGray cursor-pointer transition-colors duration-300"
                    >
                        <button className="w-[100%]">View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
