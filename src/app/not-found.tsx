import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center mt-10'>
            <h2 className='text-2xl font-bold'>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='text-blue-500 hover:underline button'>Back Home</Link>
        </div>
    )
}