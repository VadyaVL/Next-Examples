import { Page } from '@/components/page';
import * as React from 'react';

const UsersLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <Page
            title='Список користувачів'
        >
            {children}
        </Page>
    );
};

export default UsersLayout;