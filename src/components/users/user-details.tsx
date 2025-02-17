import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import './user-details.css';

import { IRecipeModel } from '@/models/recipe';
import { IUserModel } from '@/models/user';
import { RecipeItem } from '../recipes/recipe-item';

interface IProps {
    item: IUserModel;
    recipes: IRecipeModel[];
}

export const UserDetails: FC<IProps> = ({
    item,
    recipes,
}) => {
    return (
        <div
            className={classNames('user-details')}
        >
            <Image
                className='user-details__logo'
                src={item.image}
                alt='Logo'
                width={128}
                height={128}
            />
            <div className='user-details__information'>
                <span>{`${item.firstName} ${item.lastName}`}</span>
                <span><b>Username: </b>{item.username}</span>
                <span><b>Role: </b>{item.role}</span>
                <span><b>Phone: </b>{item.phone}</span>
                <span><b>Email: </b>{item.email}</span>
                <span><b>DOB: </b>{item.birthDate}</span>
                <span><b>Gender: </b>{item.gender}</span>
                <span><b>University: </b>{item.university}</span>
                <section>
                    <h2>Рецепти</h2>
                    {
                        recipes.map((item) => (
                            <RecipeItem
                                key={item.id}
                                item={item}
                                detailsUrl={`/recipes/${item.id}`}
                            />
                        ))
                    }
                </section>
            </div>
        </div>
    );
};
