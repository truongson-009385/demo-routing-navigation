import { products } from '@/app/api/products/db';
import { Product } from '@/types';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Validate id
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  let product: Product | undefined;
  try {
    product = products.find((p) => p.id === Number(id));
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Validate id
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const productIndex = products.findIndex((p) => p.id === Number(id));

  if (productIndex === -1) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }

  try {
    products.splice(productIndex, 1);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Product deleted successfully' });
}