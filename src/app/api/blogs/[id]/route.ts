import { NextResponse } from 'next/server';
import { blogs } from '@/app/api/blogs/db';
import { Blog } from '@/types';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Validate id
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  let blog: Blog | undefined;
  try {
    blog = blogs.find((b) => b.id === Number(id));
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }

  if (!blog) {
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(blog);
}