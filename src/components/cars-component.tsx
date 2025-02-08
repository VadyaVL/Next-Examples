import * as React from 'react';

import './cars-component.css';

import { getAllCars } from '@/services/api-service';
import { CarItemComponent } from './car-item-component';

export const CarsComponent: React.FC = async () => {
    const cars = await getAllCars(true);

    //console.log(cars);

    return (
        <div className='cars-component'>
            {
                cars.map(item => (
                    <CarItemComponent key={item.id} item={item} />
                ))
            }
        </div>
    );
};
