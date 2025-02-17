'use client';

import { joiResolver } from '@hookform/resolvers/joi';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import './page.css';

import { Loader } from '@/components/loader';
import { ICreateCar } from '@/models/create-car';
import { saveCarAction2 } from '@/server-actions/server-actions';
import { CreateCarValidator } from '@/validators/create-car-validator';

const CreateCarPage: React.FC = ({

}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICreateCar>({
        mode: 'all',
        resolver: joiResolver(CreateCarValidator),
    });
    const [isPending, startTransition] = React.useTransition();

    const createHandler = async (arg: ICreateCar) => {
        startTransition(async () => {
            await saveCarAction2(arg);
        })
    };

    return (
        <div className='create-car-page'>
            <form onSubmit={handleSubmit(createHandler)}>
                <div className='create-car-page__input'>
                    <input
                        placeholder='Brand'
                        {...register('brand')}
                    />
                    <span className='error'>
                        {errors.brand?.message}
                    </span>
                </div>
                <div className='create-car-page__input'>
                    <input
                        placeholder='Year'
                        {...register('year')}
                    />
                    <span className='error'>
                        {errors.year?.message}
                    </span>
                </div>
                <div className='create-car-page__input'>
                    <input
                        placeholder='Price'
                        {...register('price')}
                    />
                    <span className='error'>
                        {errors.price?.message}
                    </span>
                </div>
                <button
                    className='create-car-page__button'
                    type='submit'
                >
                    Save Car
                </button>
            </form>
            <Loader isLoading={isPending} title='Saving...' />
        </div>
    );
};

export default CreateCarPage;
