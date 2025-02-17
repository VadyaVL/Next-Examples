import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import './recipe-item.css';

import { IRecipeModel } from '@/models/recipe';

interface IProps {
    item: IRecipeModel;
    withBorder?: boolean;
    detailsUrl: string;
}

export const RecipeItem: FC<IProps> = ({
    item,
    withBorder = true,
    detailsUrl,
}) => {
    return (
        <div
            className={classNames('recipe-item', {
                'with-border': withBorder,
            })}
        >
            <Image
                className='recipe-item__logo'
                src={item.image}
                alt='Logo'
                width={64}
                height={64}
            />
            <div className='recipe-item__details'>
                <span>{item.name}</span>
                <span><b>Tags: </b>{item.tags.join(', ')}</span>
                <Link href={detailsUrl}>Details</Link>
            </div>
        </div>
    );
};