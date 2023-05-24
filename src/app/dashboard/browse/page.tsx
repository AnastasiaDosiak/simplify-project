"use client";
import useSWR from "swr";
import Loader from "@/components/dashboard/common/Loader/Loader";
import { fetcher } from "@/utils";
import BrowseList from "@/components/dashboard/Browse/BrowseList/BrowseList";

export default function DashboardListPage() {
    const { data, error, isLoading } = useSWR("/api/favorite-items", fetcher);
    if (isLoading) {
        return Loader;
    }

    if (error) {
        return <div>Something went wrong!</div>;
    }

    return <BrowseList data={data} />;
}
