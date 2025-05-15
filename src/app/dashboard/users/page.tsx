'use client'

import { useEffect, useState } from 'react';

export default function Page() {
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const data: string[] = await response.json();
            
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>List users</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}
