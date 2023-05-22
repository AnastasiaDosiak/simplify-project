import {
    MapPinIcon,
    CheckIcon,
    InformationCircleIcon
} from "@heroicons/react/24/outline";
export default function AddToCard({
    price,
    active
}: {
    price: string;
    active: boolean;
}) {
    return (
        <div className="w-[40%] bg-white rounded shadow-md gap-y-2 flex flex-col py-2 px-5text-lg py-3 px-10">
            <div className="flex items-center">
                <InformationCircleIcon height={25} width={25} color="#306F82" />
                <span className="font-bold">Buy new:</span>
            </div>
            <div className="font-bold flex align-top">
                <span className="text-md leading-[2.5rem]">$</span>
                <span className="text-mainHeading">{price}</span>
                <span className="text-md leading-[2.5rem]">00</span>
            </div>
            <div className="flex gap-x-1 items-center">
                <CheckIcon color="#E7A563" width={20} height={20} />
                <span className="font-bold text-textLightBlue">prime</span>
                <span className="text-darkGreyText">Same-Day</span>
            </div>
            <select
                className="bg-none border-none w-[40%] text-freeReturnsBlue"
                defaultValue="free"
            >
                <option value="free">FREE returns</option>
            </select>
            <span className="text-freeReturnsBlue"></span>
            <div>
                <span>
                    FREE delivery <b>Today 2 PM - 6PM</b>.
                    <br /> Order within&nbsp;
                </span>
                <span className="text-addToCardGreen font-bold">
                    1 hr 15 mins
                </span>
            </div>
            <div className="flex gap-x-2">
                <MapPinIcon width={20} height={20} />
                <span className="text-deliverToText">
                    Deliver to Anastasiia Dosiak
                </span>
            </div>
            <span
                className={
                    active
                        ? "text-inStockGreenText font-bold"
                        : "text-red font-bold"
                }
            >
                {active ? "In stock" : "Out of stock"}
            </span>
            <select
                className="bg-selectBackgroundGrey border-darkGreySelectBorder border border-solid w-[30%] rounded-lg shadow-md"
                defaultValue="1"
            >
                <option value="1">Qty: 1</option>
            </select>
            <button
                className="bg-addToCardGrey py-2 rounded text-white font-semibold tablet:text-base text-sm"
                disabled={!active}
            >
                Add to Cart
            </button>
            <button
                className="bg-buyNowBlue py-2 rounded text-white font-semibold tablet:text-base text-sm"
                disabled={!active}
            >
                Buy now
            </button>
        </div>
    );
}
