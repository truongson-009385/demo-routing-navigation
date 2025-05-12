'use client'

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-10">About Us</h1>
      <button onClick={() => router.push('/')} className="bg-blue-500 text-white px-4 py-2 rounded mt-5">
        Click Me
      </button>
    </div>
  );
}