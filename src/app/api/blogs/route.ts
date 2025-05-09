import { Blog } from '@/types';
import { NextResponse } from 'next/server';

const blogs: Blog[] = [
    { id: 1, title: 'First Blog', content: 'This is the first blog.' },
    { id: 2, title: 'Second Blog', content: 'This is the second blog.' },
];

// GET: Lấy ra danh sách các bài viết
export async function GET() {
    return NextResponse.json(blogs);
}

// POST: Tạo mới một bài viết
export async function POST(req: Request) {
    const body = await req.json();
    const newBlog: Blog = {
        id: blogs.length + 1,
        title: body.title,
        content: body.content,
    };
    blogs.push(newBlog);
    return NextResponse.json(newBlog, { status: 201 });
}

// PUT: Cập nhật một bài viết
export async function PUT(req: Request) {
    const body : Blog = await req.json();
    const { id, title, content } = body;

    const blogIndex = blogs.findIndex((blog) => blog.id === id);
    if (blogIndex === -1) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    blogs[blogIndex] = { id, title, content };
    return NextResponse.json(blogs[blogIndex]);
}

// DELETE: Xóa một bài viết
export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get('id') || '', 10);

    const blogIndex = blogs.findIndex((blog) => blog.id === id);
    if (blogIndex === -1) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const deletedBlog = blogs.splice(blogIndex, 1);
    return NextResponse.json(deletedBlog[0]);
}