    export default async function PhotoPage({ params }: { params: Promise<{ id: string }> }) {
        const { id } = await params;
        return (
            <div>
                <h1>Photo {id}</h1>
                <p>This is the full photo page.</p>
            </div>
        );
    }
