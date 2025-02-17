'use client';

import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import './page.css';

import { Loader } from '@/components/loader';
import { ISignInArgs } from '@/models/sign-in-request';
import { signIn } from '@/server-actions/server-actions';
import { SignInValidator } from '@/validators/sign-in-validator';

interface IProps {

}

const SignInPage: React.FC<IProps> = ({
    
}) => {
    const [commonError, setCommonError] = React.useState<string | undefined>();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignInArgs>({
        mode: 'all',
        resolver: joiResolver(SignInValidator),
    });

    const [isPending, startTransition] = React.useTransition();

    const createHandler = async (arg: ISignInArgs) => {
        startTransition(async () => {
            try {
                await signIn(arg);
            } catch (error) {
                if (error instanceof Error) {
                    setCommonError(error.message);
                }
            }
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div className='sign-in-page__input'>
                    <input
                        className='input-mui'
                        placeholder='Логін'
                        type='text' {...register('username')}
                    />
                    <span className='sign-in-page__input-error'>{errors.username?.message}</span>
                </div>
                <div className='sign-in-page__input'>
                    <input
                        className='input-mui'
                        placeholder='Пароль'
                        type='password'
                        {...register('password')}
                    />
                    <span className='sign-in-page__input-error'>{errors.password?.message ?? commonError}</span>
                </div>
                <button className='btn-mui'>Sign In</button>
            </form>
            <Loader isLoading={isPending} />
        </>
    );
};

export default SignInPage;
