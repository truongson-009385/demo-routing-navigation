import { Suspense } from "react";

export default async function Page() {
    console.log('Render page!!!');

    return (
        <Suspense fallback={<div>Loading profile...</div>}>
            <div className="">
                <div className="bg-white shadow-md rounded-lg p-8 w-full">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </Suspense>
    );
}