import React from 'react';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Giải quyết Promise để lấy giá trị id

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Product Detail: {id}
      </h1>
    </div>
  );
}