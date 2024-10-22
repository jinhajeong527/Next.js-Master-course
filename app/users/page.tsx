import React from 'react';
import UserTable from "@/app/users/UserTable";

const UsersPage = async () => {

    // no state and effect hook here
    // our bundle is going to be smaller because this component will be on the server.
    return (
        <>
            <h1>Users</h1>
            <UserTable />
        </>
    );
};

export default UsersPage;