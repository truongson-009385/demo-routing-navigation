import { products } from '@/app/api/products/db';
import { Product } from '@/types';
import { NextResponse } from 'next/server';

// GET: Lấy danh sách sản phẩm có phân trang
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Lấy tham số từ query string
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  // Tính toán vị trí bắt đầu và kết thúc
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Lấy dữ liệu theo trang
  const paginatedProducts = products.slice(startIndex, endIndex);
  
  // Tạo response object
  const response = {
    total: products.length,
    totalPages: Math.ceil(products.length / limit),
    currentPage: page,
    itemsPerPage: limit,
    data: paginatedProducts
  };

  return NextResponse.json(response);
}

// POST: Thêm sản phẩm mới
export async function POST(req: Request) {
    const body: Product = await req.json();
    products.push(body);
    return NextResponse.json({ message: 'Product added successfully', product: body });
}