'use server';

import Breadcrumb from '@/components/ui/breadcrumb';
import { Product } from '@/types';
import Image from 'next/image';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Fetch product data from API
  const response = await fetch(`${window.location.origin}/api/products/${id}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }

  const product: Product = await response.json();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.name, href: `/products/${product.id}` },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 h-96 overflow-x-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={200}
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p
            className={`text-lg font-medium ${
              product.inStock ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          <button
            className={`mt-6 px-6 py-3 rounded-lg text-white font-semibold ${
              product.inStock
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
}