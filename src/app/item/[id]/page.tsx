"use client";
import useSWR from "swr";
import { fetcher } from "@/utils";
import { ItemParamsInterface } from "@/interfaces";
import Item from "@/components/dashboard/CardItem/Item/Item";
import Loader from "@/components/dashboard/common/Loader/Loader";

export default function ItemPage({ params }: ItemParamsInterface) {
    const { data, error, isLoading } = useSWR(
        `/api/favorite-items/${params.id}`,
        fetcher
    );

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Something went wrong!</div>;
    }

    return <Item data={data} />;
}
