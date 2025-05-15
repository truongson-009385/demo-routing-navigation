export default function Page() {
    return (
        <div className="overflow-x-auto my-5">
            <h2 className="text-lg font-semibold mb-3">Table 2</h2>
            <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Age</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 border-b">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">John Doe</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">30</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">john.doe@example.com</td>
                </tr>
                <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700 border-b">Jane Smith</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">25</td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">jane.smith@example.com</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}