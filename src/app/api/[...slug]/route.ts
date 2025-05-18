import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, { params }: { params: { slug: string[] } }) {
    // Lấy slug từ params
    const { slug } = params;

    return NextResponse.json({
        message: "Chào bạn, đây là API với Next Server!",
        path: "Đường dẫn file: " + slug.join('/'),
        timestamp: new Date().toUTCString(),
    })
}