export async function GET() {
    const data = [
        {
            url: "/dynamic-route/demo1",
            component: "demo1",
        },
        {
            url: "/dynamic-route/demo2",
            component: "demo2",
        }
    ];
    

    return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
    });
}