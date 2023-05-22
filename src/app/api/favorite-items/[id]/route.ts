import data from "@root/data.json";
import { NextResponse } from "next/server";
import { ItemParamsInterface } from "@/interfaces";

export async function GET(request: Request, { params }: ItemParamsInterface) {
    const item = data.find((e) => e.id === params.id);
    if (!item) {
        throw new Error(
            `Something went wrong. Item with id ${params.id} wasn't found.`
        );
    }
    return NextResponse.json(item);
}
