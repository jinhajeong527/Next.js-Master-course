import React from 'react';

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch(
        // Next.js is gonna run back ground job and get fresh
        // data from the backend every 10 seconds.
        'https://jsonplaceholder.typicode.com/users',
        {next: {revalidate: 10}});
    const users: User[] = await res.json();
    // no state and effect hook here
    // our bundle is going to be smaller because this component will be on the server.
    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    );
};

export default UsersPage;