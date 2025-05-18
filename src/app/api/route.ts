import { NextRequest, NextResponse } from "next/server";

export function GET() {

    return NextResponse.json({
        message: "Chào bạn, đây là phương thức GET!",
        timestamp: new Date().toUTCString(),
    })
}

export async function POST(request: NextRequest) {
    const data = await request.json();

    return NextResponse.json(
        {
            message: "Chào bạn, đây là phương thức POST!",
            data
        },
    );
}
