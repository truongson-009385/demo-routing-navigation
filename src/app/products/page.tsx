import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Product 1", price: 19.99, imageUrl: null, slug: "product-1" },
  { id: 2, name: "Product 2", price: 29.99, imageUrl: null, slug: "product-2" },
  { id: 3, name: "Product 3", price: 39.99, imageUrl: null, slug: "product-3" },
  { id: 4, name: "Product 4", price: 49.99, imageUrl: null, slug: "product-4" },
  { id: 5, name: "Product 5", price: 59.99, imageUrl: null, slug: "product-5" },
  { id: 6, name: "Product 6", price: 69.99, imageUrl: null, slug: "product-6" },
  { id: 7, name: "Product 7", price: 79.99, imageUrl: null, slug: "product-7" },
  { id: 8, name: "Product 8", price: 89.99, imageUrl: null, slug: "product-8" },
];

export default function Products() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center justify-center">
            <ProductCard name={product.name} price={product.price} imageUrl={product.imageUrl} slug={product.slug}  />
          </div>
        ))}
      </div>
    </div>
  );
}