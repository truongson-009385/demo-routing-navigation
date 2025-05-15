export default async function Page() {
    await new Promise(() => {
        setTimeout(() => {
        }, 200)
    })

    return (
        <div>
            Test loading
        </div>
    )
}