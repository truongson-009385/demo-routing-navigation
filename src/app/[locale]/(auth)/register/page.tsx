import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register",
    description: "Register page",
};

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Register</h1>
            <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" className="border border-gray-300 p-2 w-full rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input type="password" id="password" className="border border-gray-300 p-2 w-full rounded" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
            </form>
        </div>
    );
}