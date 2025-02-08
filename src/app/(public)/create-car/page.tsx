import Form from 'next/form';
import * as React from 'react';

import './page.css';

import { saveCarAction } from '@/server-actions/server-actions';

const CreateCarPage: React.FC = ({

}) => {
    return (
        <div className='create-car-page'>
            <Form action={saveCarAction}>
                <input
                    type='text'
                    name='brand'
                    placeholder='Brand'
                    minLength={1}
                    maxLength={20}
                    pattern='^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'
                />
                <input
                    type='number'
                    name='year'
                    placeholder='Year'
                    min={1990}
                    max={2024}
                />
                <input
                    type='number'
                    name='price'
                    placeholder='Price'
                    min={0}
                    max={1000000}
                />

                <button type='submit'>Save Car</button>
            </Form>
        </div>
    );
};

export default CreateCarPage;
