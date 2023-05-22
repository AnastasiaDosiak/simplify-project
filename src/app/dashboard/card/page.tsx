"use client";
import useSWR from "swr";
import { fetcher } from "@/utils";
import CardList from "@/components/dashboard/Card/CardList/CardList";
import Loader from "@/components/dashboard/common/Loader/Loader";

export default function DashboardCardPage() {
    const { data, error, isLoading } = useSWR("/api/favorite-items", fetcher);
    if (isLoading) {
        return Loader;
    }

    if (error) {
        return <div>Something went wrong!</div>;
    }

    return <CardList data={data} />;
}
