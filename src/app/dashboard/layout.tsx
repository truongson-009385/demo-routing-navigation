import type { Metadata } from "next";
import "@/app/globals.css";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard pages",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    console.log("Render Layout!!!");
    
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="flex min-h-screen">
                    <aside className="w-64 bg-gray-800 text-white">
                        <div className="p-4 text-lg font-bold">
                            <Link href="/dashboard" className="text-white hover:text-gray-300">
                                Dashboard
                            </Link>
                        </div>
                        <nav className="mt-4">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/overview">Overview</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/settings">Settings</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/profile">Profile</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/users">Users</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/fake-loading">Fake loading</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/fake-notfound">Fake not found</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-700">
                                    <Link href="/dashboard/logout">Logout</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}