import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch(
        // Next.js is gonna run back ground job and get fresh
        // data from the backend every 10 seconds.
        'https://jsonplaceholder.typicode.com/users',
        {cache: 'no-store'});
    // {next: {revalidate: 10}});
    const users: User[] = await res.json();
    // no state and effect hook here
    // our bundle is going to be smaller because this component will be on the server.
    return (
        <>
            <h1>Users</h1>
            {/*To see when this page is rendered*/}
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>

                </thead>
                <tbody>
                {users.map(user =>
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    );
};

export default UsersPage;