'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const isActive = usePathname() === href;

    return (
        <Link
            href={href}
            className={`px-4 py-2 transition-colors duration-200 ${
            isActive ? 'border-b-2 border-white text-white' : 'text-gray-300 hover:text-white'
            }`}
        >
            {children}
        </Link>
    );
};