import { NextRequest, NextResponse } from "next/server";

// Lưu ý: + Phải có request: NextRequest, nếu ko có sẽ gặp lỗi vì ko lấy được body và params
//        + params phải là một Promise

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const data = await request.json();

    return NextResponse.json({
        message: "Chào bạn, đây là phương thức PUT!",
        data: {
            id,
            ...data,
        },
        timestamp: new Date().toUTCString(),
    })
}

export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return NextResponse.json({
        message: "Chào bạn, đây là phương thức DELETE!",
        data: {
            id,
            name: "Dữ liệu muốn xóa" + id,
            method: "DELETE",
        },
        timestamp: new Date().toUTCString(),
    })
}
