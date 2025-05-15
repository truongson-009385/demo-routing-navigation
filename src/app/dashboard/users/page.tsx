export default async function Page() {
    try {
        const response = await fetch(`http://...`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
    } catch {
        throw new Error('An error occurred while fetching the data');
    }

    return (
        <div>
            <h1>List users</h1>
        </div>
    );
}
