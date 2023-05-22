import DashboardItem from "@/components/dashboard/List/DashboardItem/DashboardItem";
import { DashboardItemInterface } from "@/interfaces";
export default function DashboardList({
    data
}: {
    data: DashboardItemInterface[];
}) {
    return (
        <div className="bg-white px-10 py-5 rounded shadow-md">
            <div className="flex justify-between items-center font-bold">
                <div className="sm:text-base text-md">
                    <h2 className="mb-1">Favourites</h2>
                    <span className="text-grayText">
                        A list of your favorites items to keep track of.
                    </span>
                </div>
                <button
                    className="sm:text-md text-sm text-white rounded-[0.5rem] bg-buttonBlue py-[0.5rem] sm:px-[1rem] px-[0.3rem] cursor-not-allowed"
                    disabled
                >
                    + Add
                </button>
            </div>
            <table className="table text-left w-full">
                <thead>
                    <tr className="font-semibold sm:text-base text-sm border-solid border-borderGray border-b border-b-2 py-[1.6rem]">
                        <th className="py-[1rem] sm:w-[45%] w-[40%]">Name</th>
                        <th className="py-[1rem] sm:w-[25%] w-[20%]">Seller</th>
                        <th className="py-[1rem] sm:w-[15%] w-[20%]">Status</th>
                        <th className="py-[1rem] sm:w-[15%] w-[20%]">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((item: DashboardItemInterface) => {
                            return <DashboardItem {...item} key={item.id} />;
                        })}
                </tbody>
            </table>
        </div>
    );
}
