import React from 'react';

interface Props {
    params: { slug: string[] }
    searchParams: { sortOrder: string }
}

// We should pass at least one parameter
// To make this slug parameter optional,
// directory should be wrapped with double square bracket
const ProductPage = ({params: {slug}, searchParams: {sortOrder}}: Props) => {
        return (
            <div>
                {slug}
                {sortOrder}
            </div>
        );
    }
;

export default ProductPage;