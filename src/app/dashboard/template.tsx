'use client'

export default function DashboardTemplate({ children }: { children: React.ReactNode }) {

  console.log('Render template!!!');
  console.log('children', children);

  return (
    <div>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Profile</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='px-4 py-8'>{children}</main>
    </div>
  );
}