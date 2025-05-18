export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;

    console.log(slug);
    
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-8">Slug Segments</h1>
            <div className="space-y-4 w-full max-w-md">
                {slug.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow p-4 text-xl font-semibold text-gray-800 text-center border border-blue-200 hover:bg-blue-50 transition"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}