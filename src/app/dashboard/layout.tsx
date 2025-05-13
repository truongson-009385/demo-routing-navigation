import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Dashboard pages",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased">
                <div className="container mx-auto px-4 py-8">
                    {children}
                </div>
            </body>
        </html>
    );
}