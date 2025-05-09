'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    const router = useRouter();

    return (
        <nav aria-label="breadcrumb" className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <ol className="flex space-x-3 text-sm text-gray-600">
            {items.map((item, index) => (
                <li
                key={index}
                className={`breadcrumb-item flex items-center ${
                    index === items.length - 1 ? 'font-semibold text-gray-800' : ''
                }`}
                aria-current={index === items.length - 1 ? 'page' : undefined}
                >
                {index !== 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === items.length - 1 ? (
                    item.label
                ) : (
                    <Link href={item.href} className="hover:text-blue-500 transition">
                    {item.label}
                    </Link>
                )}
                </li>
            ))}
            </ol>
            <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition shadow-sm"
            >
            Quay lại
            </button>
        </nav>
    );
};

export default Breadcrumb;