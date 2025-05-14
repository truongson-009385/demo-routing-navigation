'use client'

import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const replaceWindow = (url: string) => {
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', url);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <h1 className="text-5xl font-extrabold text-center mt-10 text-blue-800 drop-shadow-lg">
        Contact Us
      </h1>
      <p className="text-lg text-center text-gray-700 mt-4 max-w-2xl">
        If you have any questions or concerns, please feel free to reach out to us.
      </p>
      <button
        onClick={() => router.replace('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-8 shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Go Back to Home (Hook)
      </button>

      <button
        onClick={() => replaceWindow('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-8 shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Go Back to Home (Window)
      </button>
    </div>
  );
}