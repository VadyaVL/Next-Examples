import * as React from 'react';

import { Page } from '@/components/page';

const SignOutLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <Page title='Ви бажаєте вийти з системи?'>
            {children}
        </Page>
    );
};

export default SignOutLayout;