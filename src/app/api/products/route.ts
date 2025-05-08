import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/products
export async function GET() {
  try {
    const users = await prisma.products.findMany()
    return NextResponse.json(users)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

// POST /api/products
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const newProduct = await prisma.products.create({
      data: body
    })
    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json(
      { error: 'Failed to create `product' },
      { status: 500 }
    )
  }
}