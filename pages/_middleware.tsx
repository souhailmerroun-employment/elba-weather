import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { city } = req.geo || {};

    const url = req.nextUrl.clone()
    url.pathname = `/${city}`;

    console.log(url);

    return NextResponse.rewrite(url)
}