"use client";
import useSWR from "swr";
import DashboardList from "@/components/dashboard/List/DashboardList/DashboardList";
import Loader from "@/components/dashboard/common/Loader/Loader";
import { fetcher } from "@/utils";

export default function DashboardListPage() {
    const { data, error, isLoading } = useSWR("/api/favorite-items", fetcher);
    if (isLoading) {
        return Loader;
    }

    if (error) {
        return <div>Something went wrong!</div>;
    }

    return <DashboardList data={data} />;
}
