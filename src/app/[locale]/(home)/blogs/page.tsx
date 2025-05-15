'use client';

import { Blog } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogs', {
          next: { revalidate: 10 }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <div className="mb-4 text-center">
        <Link
          href="/blogs/create"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Create New Blog
        </Link>
      </div>
      <ul className="space-y-6">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700">{blog.content}</p>
            <Link
              href={`/blogs/${blog.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};