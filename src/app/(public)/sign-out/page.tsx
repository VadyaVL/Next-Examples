'use client';

import * as React from 'react';

import { Loader } from '@/components/loader';
import { signOut } from '@/server-actions/server-actions';

export const SignOutPage: React.FC = ({
    
}) => {
    const [isPending, startTransition] = React.useTransition();

    return (
        <>
            <button className='btn-mui' onClick={() => startTransition(signOut)}>
                Так, вийти!
            </button>
            <Loader isLoading={isPending} />
        </>
    );
};

export default SignOutPage;
