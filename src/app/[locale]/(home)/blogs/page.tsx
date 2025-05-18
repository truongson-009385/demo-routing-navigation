import { Blog } from '@/types';

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    next: { revalidate: 60 },
    // cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  
  const { data } = await response.json();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <ul className="space-y-4">
        {data.map((blog: Blog) => (
          <li key={blog.id} className="p-4 border rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
};