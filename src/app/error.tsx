'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Something went wrong!
      </h1>
      <p className="text-center text-red-500 mt-2">{error.message}</p>
      <button onClick={reset} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Try Again</button>
    </div>
  );
}   