import { Blog } from '@/types';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog');
    }
    const blog: Blog = await response.json();
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h1>
            <p className="text-base leading-relaxed text-gray-600">{blog.content}</p>
            <Link href="/blogs" className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow">
                Back
            </Link>
        </div>  
    );
}