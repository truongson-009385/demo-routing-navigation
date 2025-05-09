export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <main className="p-4">{children}</main>
        </div>
    );
}