import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <Link href={"/"} className="text-2xl font-bold">
                    Routing&Navigation
                </Link>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-gray-400">
                        About
                    </Link>
                    <Link href="/category" className="hover:text-gray-400">
                        Category
                    </Link>
                    <Link href="/products" className="hover:text-gray-400">
                        Products
                    </Link>
                    <Link href="/contact" className="hover:text-gray-400">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}