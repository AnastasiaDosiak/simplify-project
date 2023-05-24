import { BrowseItemInterface } from "@/interfaces";
import BrowseItem from "@/components/dashboard/Browse/BrowseItem/BrowseItem";
export default function BrowseList({ data }: { data: BrowseItemInterface[] }) {
    return (
        <div className="bg-white px-10 py-5 rounded shadow-md">
            <div className="flex justify-between items-center font-bold">
                <div className="sm:text-base text-md">
                    <h2 className="mb-1">Browse</h2>
                </div>
            </div>
            <table className="table text-left w-full">
                <thead>
                    <tr className="font-semibold sm:text-base text-sm border-solid border-borderGray border-b border-b-2 py-[1.6rem]">
                        <th className="py-[1rem] sm:w-[40%] w-[40%]">Name</th>
                        <th className="py-[1rem] sm:w-[20%] w-[20%]">Color</th>
                        <th className="py-[1rem] sm:w-[20%] w-[20%]">Seller</th>
                        <th className="py-[1rem] sm:w-[20%] w-[20%]">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((item: BrowseItemInterface) => {
                            return <BrowseItem {...item} key={item.id} />;
                        })}
                </tbody>
            </table>
        </div>
    );
}
