'use client'
import Link from 'next/link'

export default function FeedPage() {

  console.log('FeedPage')

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Feed</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/photo/1" className="text-blue-500 hover:underline">
            Mở Ảnh 1
          </Link>
        </li>
        <li>
          <Link href="/photo/2" className="text-blue-500 hover:underline">
            Mở Ảnh 2
          </Link>
        </li>
      </ul>
    </div>
  )
}
