'use client';
import React from 'react';

interface Props {
    // Next.js will automatically pass Error object here
    error: Error;
    // We can use this when Error is temporary
    // So we want to give users chances to retry
    // Next.js will automatically pass the reset function to our component
    reset: () => void;
}

const Error = ({error, reset}: Props) => {
    // In real world application,
    // We should use logging service here to log somewhere permanent
    // So we can go and identify the issues in our application.
    // Sentry is great
    console.log('Error', error);
    return (
        <>
            <div>
                An error occurred while trying to retrieve it
            </div>
            {/*This is the reason why we had to make this component
            a client component, because in the component we are handling
            the click event of this button.
            */}
            <button className="btn" onClick={() => reset()}>Retry</button>
        </>
    );
};

export default Error;