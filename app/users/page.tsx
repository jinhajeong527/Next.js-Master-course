import React from 'react';
import UserTable from "@/app/users/UserTable";

interface Props {
    searchParams: { sortOrder: string }

}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
    // no state and effect hook here
    // our bundle is going to be smaller because this component will be on the server.
    // Whenever we need to access to the query string parameters or URL
    // We have to do that in our pages
    return (
        <>
            <h1>Users</h1>
            <UserTable sortOrder={sortOrder} />
        </>
    );
};

export default UsersPage;