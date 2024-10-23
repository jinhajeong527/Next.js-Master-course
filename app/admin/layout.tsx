import React from 'react';

interface Props {
    children: React.ReactNode;
}
// We can implement common UI for all our admin pages
const AdminLayout = ({children}: Props) => {
    return (
        // By default, the direction of flex is row
        <div className='flex'>
            <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
            {/*This can be any of the admin pages*/}
            <div>{children}</div>
        </div>
    );
};

export default AdminLayout;