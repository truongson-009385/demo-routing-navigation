import Image from "next/image";
import ImageProduct  from "@/assets/img/anh-sp.jpg"
import Link from "next/link";

export default function ProductCard({ name, price, imageUrl, slug } : { name: string, price: number, imageUrl: string | null, slug: string }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <Image src={imageUrl ?? ImageProduct} alt={name} width={200} height={200} className="rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">${price.toFixed(2)}</p>
            <Link target="_blank" href={`/products/${slug}`} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">View Details</Link>
        </div>
    );
}