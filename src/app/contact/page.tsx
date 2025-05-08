import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: '...',
}

export default function Contact() {

  setTimeout(() => {
    redirect('/about')
  }, 5000);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">Contact Us</h1>
    </div>
  );
}