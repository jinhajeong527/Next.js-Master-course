'use client';

import React from 'react';
import Link from "next/link";
import {useSession} from "next-auth/react";

const NavBar = () => {
    // By using this hook, we have make this client component
    // Because with this hook, we access the context object that is passed
    // using the session Provider
    const {status, data: session} = useSession();



    return (
        <div className='flex bg-slate-200 p-5 space-x-3'>
            <Link href="/" className='mr-5'>Next.js</Link>
            <Link href="users">Users</Link>
            {status == 'loading' && <div>Loading...</div>}
            {/*At this point we definitely have user So we can use '!' */}
            {status == 'authenticated' && <div>{session.user!.name}</div>}
            {status == 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
        </div>
    );
};

export default NavBar;