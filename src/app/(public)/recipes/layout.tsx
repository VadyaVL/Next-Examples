import { Page } from '@/components/page';
import * as React from 'react';

const UsersLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <Page
            title='Рецепти'
        >
            {children}
        </Page>
    );
};

export default UsersLayout;