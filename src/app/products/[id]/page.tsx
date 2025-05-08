import React from 'react';
import Breadcrumb from '../../../components/ui/breadcrumb';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Giải quyết Promise để lấy giá trị id

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: `Product ${id}`, href: `/products/${id}` },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <h1 className="text-4xl font-bold text-center mt-10">
        Product Detail: {id}
      </h1>
    </div>
  );
}