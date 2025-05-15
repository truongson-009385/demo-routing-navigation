'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
        Oops! Something went wrong
      </h1>
      <p className="text-center text-red-600 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
      >
        Try Again
      </button>
      </div>
    </div>
  );
}   