import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
    title: "Login",
    description: "Login page",
};

async function loginAction(formData: FormData) {
    "use server";
    // Lấy dữ liệu từ form
    const username = formData.get("username");
    const password = formData.get("password");

    // Giả lập xác thực, thực tế bạn sẽ gọi API ở đây
    if (username === "admin" && password === "123") {
        // Tạo token giả lập
        const token = "fake-jwt-token";
        // Lưu cookie token
        (await cookies()).set("token", token, { httpOnly: true, path: "/" });
    }
    // Có thể redirect hoặc trả về thông báo ở đây
}

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <form
                action={loginAction}
                className="bg-white p-6 rounded shadow-md w-full max-w-sm"
            >
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                    <input type="username" id="username" name="username" className="border border-gray-300 p-2 w-full rounded" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                    <input type="password" id="password" name="password" className="border border-gray-300 p-2 w-full rounded" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </div>
    );
}