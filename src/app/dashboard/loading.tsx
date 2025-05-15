export default function Loading() {
  return (
    <div className="flex justify-center items-center gap-2 h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <span className="text-1xl font-bold">Loading...</span>
    </div>
  );
}