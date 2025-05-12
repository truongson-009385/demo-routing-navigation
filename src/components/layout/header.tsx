'use client'

import NavLink from "../ui/navlink";

export default function Header() {

    const handleOpenWindow = () => {
        window.open("/login", "_blank", "width=600,height=400");
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
                            <button onClick={() => handleOpenWindow()} className="btn-primary">
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}