'use client';

import { Product } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [inStockFilter, setInStockFilter] = useState<null | boolean>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${window.location.origin}/api/products?page=${currentPage}&limit=${itemsPerPage}`, {
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    let filtered = products;

    // Lọc theo từ khóa tìm kiếm
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Lọc theo trạng thái còn hàng
    if (inStockFilter !== null) {
      filtered = filtered.filter((product) => product.inStock === inStockFilter);
    }

    setFilteredProducts(filtered);
  }, [products, searchQuery, inStockFilter]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-1/3"
        />
        <select
          value={inStockFilter === null ? "" : inStockFilter ? "true" : "false"}
          onChange={(e) =>
            setInStockFilter(
              e.target.value === ""
                ? null
                : e.target.value === "true"
                ? true
                : false
            )
          }
          className="px-4 py-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
        <Link
          href="/products/create"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add New Product
        </Link>
      </div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">In Stock</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{product.id}</td>
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.description}</td>
              <td className="border border-gray-300 px-4 py-2">${product.price.toFixed(2)}</td>
              <td
                className={`border border-gray-300 px-4 py-2 ${
                  product.inStock ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.inStock ? "Yes" : "No"}
              </td>
              <td className="border border-gray-300 px-4 py-2 space-x-2">
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-500 hover:underline"
                >
                  View
                </Link>
                <Link
                  href={`/products/edit/${product.id}`}
                  className="text-yellow-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}