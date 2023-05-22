import { DataItemInterface } from "@/interfaces";
import { productInformationSections } from "@/consts";

export default function ProductInformation({ data }: DataItemInterface) {
    return (
        <div className="w-[60%] bg-white rounded shadow-md">
            <div className="flex flex-col px-8 py-6 border-b border-borderGray gap-y-1">
                <h3 className="font-bold font-lg">Product Information</h3>
                <span className="text-productInformationGrey">
                    Item and seller details
                </span>
            </div>
            <div className="px-8 pt-6 pb-10">
                <ul className="flex flex-wrap">
                    {productInformationSections.map(
                        (category: { name: string; item: string }) => {
                            const itemObject: {
                                [key: string]: string | boolean;
                            } = data;
                            const propertyValue = itemObject[category.item];
                            return (
                                <li
                                    key={category.item}
                                    className="flex flex-col gap-y-2 font-md w-[50%]"
                                >
                                    <span className="text-productInformationGrey">
                                        {category.name}
                                    </span>
                                    <span>{propertyValue}</span>
                                </li>
                            );
                        }
                    )}
                </ul>
                <div className="mt-10">
                    <span className="text-productInformationGrey font-md">
                        About
                    </span>
                    <p className="mt-2">{data.description}</p>
                </div>
            </div>
        </div>
    );
}
