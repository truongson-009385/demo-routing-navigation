import { permanentRedirect } from "next/navigation";

export default function Page() {
    permanentRedirect("/dashboard/new");

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Old Page</h1>
        </>
    );
}