import React from 'react';

interface Props {
    params: { id: number }

}
/*
({params: {id}}: Props) Using like this only works in page.
This way can not be applied to components used in this page
 */
const UserDetailPage = ({params: {id}}: Props) => {
    return (
        <div>
            {id}
        </div>
    );
};

export default UserDetailPage;