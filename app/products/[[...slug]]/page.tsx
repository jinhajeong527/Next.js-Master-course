import React from 'react';

interface Props {
    params: { slug: string[] }
}
// We should pass at least one parameter
// To make this slug parameter optional,
// directory should be wrapped with double square bracket
const ProductPage = ({params: {slug}}: Props) =>
{
    return (
        <div>
            {slug}
        </div>
    );
}
;

export default ProductPage;