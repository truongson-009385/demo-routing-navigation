'use client';

import { logout } from "@/app/actions";

export default function Page() {
  const handleDelete = async () => {
    await logout();

    console.log("Logout successfully");
    
  };

  return (
    <button onClick={handleDelete}>Logout</button>
  );
}