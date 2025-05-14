// app/global-error.tsx
"use client";

interface GlobalErrorProps {
  error: Error & { statusCode?: number };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md text-center">
            <h2 className="mb-4 text-2xl font-bold text-red-600">
              Lỗi hệ thống nghiêm trọng
            </h2>
            <p className="text-gray-600">
              {error.message || "Đã xảy ra lỗi không mong muốn."}
            </p>
            <button
              onClick={reset}
              className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Thử lại
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}