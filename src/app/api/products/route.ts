import { products } from '@/app/api/products/db';
import { Product } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  // Tính toán vị trí bắt đầu và kết thúc
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Lấy dữ liệu theo trang
  const paginatedProducts = products.slice(startIndex, endIndex);
  
  const response = {
    total: products.length,
    totalPages: Math.ceil(products.length / limit),
    currentPage: page,
    itemsPerPage: limit,
    data: paginatedProducts
  };

  return NextResponse.json(response);
}

export async function POST(req: Request) {
    const body: Product = await req.json();
    products.push(body);
    return NextResponse.json({ message: 'Product added successfully', product: body });
}