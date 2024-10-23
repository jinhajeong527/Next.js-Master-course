import React from 'react';
import {notFound} from "next/navigation";

interface Props {
    params: { id: number }

}
/*
({params: {id}}: Props) Using like this only works in page.
This way can not be applied to components used in this page
 */
const UserDetailPage = ({params: {id}}: Props) => {
    if (id > 10) notFound();
    return (
        <div>
            {id}
        </div>
    );
};

export default UserDetailPage;