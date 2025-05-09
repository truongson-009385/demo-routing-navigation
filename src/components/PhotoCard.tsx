'use client'

import { useRouter } from 'next/navigation'

export default function PhotoCard({ id }: { id: string }) {
    const router = useRouter();
    return (
        <div className="bg-white border border-gray-300 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Ảnh {id}</h2>
            <p className="text-gray-600">Đây là component hiển thị ảnh trong feed</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => router.back()}
            >
                Quay lại
            </button>
        </div>
    )
}
