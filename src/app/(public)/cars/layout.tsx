import * as React from 'react';

export default function CarsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='cars-page-layout'>
            <h1>Cars Page</h1>
            {children}
        </div>
    );
}
