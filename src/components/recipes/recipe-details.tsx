import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import './recipe-details.css';

import { IRecipeModel } from '@/models/recipe';


interface IProps {
    item: IRecipeModel;
}

export const RecipeDetails: FC<IProps> = ({
    item,
}) => {
    return (
        <div
            className={classNames('recipe-details')}
        >
            <Image
                className='recipe-details__logo'
                src={item.image}
                alt='Logo'
                width={128}
                height={128}
            />
            <div className='recipe-details__information'>
                <span>{item.name}</span>
                <span><b>Складність: </b>{item.difficulty}</span>
                <span><b>Час приготування, хв: </b>{item.prepTimeMinutes}</span>
                <Link href={`/users/${item.userId}`}>Автор</Link>

                <section>
                    <h2>Інгрідієнти</h2>
                    <p>{item.ingredients.join(', ')}</p>
                </section>
                <section>
                    <h2>Приготування</h2>
                    {
                        item.instructions.map((instruction, index) => (
                            <p key={`instruction-${index}`}>
                                {instruction}
                            </p>
                        ))
                    }
                </section>
                <section>
                    <h2>Теги</h2>
                    {
                        item.tags.map((tag, index) => (
                            <Link className='recipe-details__tag' href={`/recipes?tag=${tag}`} key={`tag-${index}`}>
                                {tag}
                            </Link>
                        ))
                    }
                </section>
            </div>
        </div>
    );
};
