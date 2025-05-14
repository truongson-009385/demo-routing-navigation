export default function OverviewPage() {
    return (
        <div className="">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Overview</h1>
            <p className="text-gray-600 mb-6">
                Welcome to the overview page. Here you can find a summary of your data and activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Card 1</h2>
                    <p className="text-gray-500">This is a description for card 1.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Card 2</h2>
                    <p className="text-gray-500">This is a description for card 2.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Card 3</h2>
                    <p className="text-gray-500">This is a description for card 3.</p>
                </div>
            </div>
        </div>
    );
}