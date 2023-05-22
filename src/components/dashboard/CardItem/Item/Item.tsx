import { DataItemInterface } from "@/interfaces";
import ProductInformation from "@/components/dashboard/CardItem/ProductInformation/ProductInformation";
import AddToCard from "@/components/dashboard/CardItem/AddToCard/AddToCard";

export default function Item({ data }: DataItemInterface) {
    return (
        <div className="py-6 px-8">
            <div className="flex gap-4 mb-6">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-[3rem] h-[3rem] rounded-full"
                />
                <div className="flex flex-col justify-center">
                    <h2 className="font-lg font-bold">{data.name}</h2>
                    <span className="text-productGrey font-sm">
                        {data.seller}
                    </span>
                </div>
            </div>
            <div className="flex tablet:flex-nowrap flex-wrap gap-5 items-start">
                <ProductInformation data={data} />
                <AddToCard price={data.price} active={data.active} />
            </div>
        </div>
    );
}
