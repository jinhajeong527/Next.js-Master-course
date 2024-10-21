import React from 'react';

interface User {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users')
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