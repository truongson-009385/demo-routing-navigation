'use client';

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function Page() {
  // const router = useRouter();

  // useEffect(() => {
  //   // Kiểm tra localStorage khi component mount
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  //   if (!isLoggedIn) {
  //     // Nếu chưa đăng nhập, redirect về trang login
  //     router.push('/login');
  //   }
  // }, [router]);

  // console.log('Dashboard Page');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-500">Welcome to the dashboard. Here you can manage your products, orders, and customers.</p>
    </div>
  );
}