'use client'

import Link from "next/link";

export default function Header() {

    const handleOpenWindow = () => {
        window.open("/login", "_blank", "width=600,height=400");
    };

    return (
        <header>
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <Link href={"/"} className="text-2xl font-bold">
                    Routing&Navigation
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-gray-400">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/category" className="hover:text-gray-400">
                                Category
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-gray-400">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/feed" className="hover:text-gray-400">
                                Feed
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-400">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => handleOpenWindow()} className="hover:text-gray-400 bg-blue-600 px-2 py-1 rounded">
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}