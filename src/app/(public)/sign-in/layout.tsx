import { Page } from '@/components/page';
import * as React from 'react';

const SignInLayout: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <Page
            title='Авторизація'
            className='sign-in-page'
        >
            {children}
        </Page>
    );
};

export default SignInLayout;