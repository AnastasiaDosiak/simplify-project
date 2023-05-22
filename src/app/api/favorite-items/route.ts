import data from "@root/data.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json(data);
}
