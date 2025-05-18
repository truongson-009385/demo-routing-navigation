export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 3000));

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-8">Fake Loading</h1>
        </div>
    )
}