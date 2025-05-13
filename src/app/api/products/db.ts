import { Product } from "@/types";

export const products: Product[] = [
    ...Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        description: `Description for product ${i + 1}.`,
        image: 'https://picsum.photos/400/200',
        price: Math.floor(Math.random() * 1000) + 50,
        inStock: Math.random() > 0.5,
    })),
];