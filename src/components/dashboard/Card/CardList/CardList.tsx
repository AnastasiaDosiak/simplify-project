import { DashboardItemInterface } from "@/interfaces";
import CardItem from "@/components/dashboard/Card/CardItem/CardItem";

export default function CardList({ data }: { data: DashboardItemInterface[] }) {
    return (
        <div>
            <h1 className="text-mainHeading mt-5 ml-5">Dashboard</h1>
            <div className="p-10 flex flex-wrap gap-10">
                {data.map((item: DashboardItemInterface) => (
                    <CardItem {...item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
