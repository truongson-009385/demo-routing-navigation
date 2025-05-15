'use client'

import Link from "next/link";
import NavLink from "../ui/navlink";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();

    const changeLanguage = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale;
        router.push(segments.join('/'));
    };

    return (
        <header>
            <div className="flex items-center justify-between p-4 shadow-md bg-slate-800">
                <span className="text-2xl font-bold text-white">
                    Routing&Navigation
                </span>
                <nav>
                    <ul className="flex items-center space-x-4">
                        <li>
                            <NavLink href="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/category">
                                Category
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/products">
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/blogs">
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/feed">
                                Feed
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <Link className="btn-primary" href="/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center space-x-2">
                                <button
                                    className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                                    onClick={() => changeLanguage('en')}
                                >
                                    EN
                                </button>
                                <button
                                    className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
                                    onClick={() => changeLanguage('vi')}
                                >
                                    VI
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}