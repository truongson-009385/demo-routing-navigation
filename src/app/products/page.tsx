'use client';

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { useEffect, useState } from "react"

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4001/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center justify-center">
            <ProductCard id={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl}  />
          </div>
        ))}
      </div>
    </div>
  );
}