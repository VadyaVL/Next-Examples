import { Page } from '@/components/page';
import * as React from 'react';

type PropsType = React.PropsWithChildren<{
    params: Promise<{ id: string; }>;
}>;

const UserLayout: React.FC<PropsType> = async ({
    params,
    children,
}) => {
    const { id } = await params;

    return (
        <Page
            title={`Користувач # ${id}`}
        >
            {children}
        </Page>
    );
};

export default UserLayout;