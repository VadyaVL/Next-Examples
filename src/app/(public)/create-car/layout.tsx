import * as React from 'react';

export default function CreateCarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='create-car-page-layout'>
            <h1>Create Car Page</h1>
            {children}
        </div>
    );
}
