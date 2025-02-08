import Link from 'next/link';
import * as React from 'react';

import './car-item-component.css';

import { ICar } from '@/models/car';

interface IProps {
    item: ICar;
}

export const CarItemComponent: React.FC<IProps> = ({
    item,
}) => {
    

    return (
        <div className='car-item-component'>
            <div className='car-item-component__details'>
                <div>Name: {item.brand}</div>
                <div>Year: {item.year}</div>
                <div>Price: {item.price}</div>
            </div>
            <Link
                className='car-item-component__link'
                href={{
                    pathname: `/cars/${item.id}`,
                    query: {
                        ...item,
                    },
                }}
            >
                Details
            </Link>
        </div>
    );
};
