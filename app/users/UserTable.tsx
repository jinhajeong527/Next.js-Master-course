import React from 'react';
import Link from "next/link";
import {sort} from "fast-sort";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();
    const sortedUsers = sort(users).asc(sortOrder == 'email'
        ? user => user.email
        : user => user.name);

    return (
        <table className='table table-bordered'>
            <thead>
            <tr>
                <th>
                    {/*With this approach we can do everything on the server*/}
                    {/*In typical React application, this would be handled by onClick event and state variable*/}
                    {/*Instead, We use query parameter to keep codes in server side*/}
                    {/*Query parameter is a way to pass state on the server*/}
                    <Link href="/users?sortOrder=name">Name</Link>
                </th>
                <th>
                    <Link href="/users?sortOrder=email">Email</Link>
                </th>
            </tr>
            </thead>
            <tbody>
            {sortedUsers.map(user =>
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>)
            }
            </tbody>
        </table>
    );
};

export default UserTable;