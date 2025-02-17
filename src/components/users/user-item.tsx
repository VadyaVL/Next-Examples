import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import './user-item.css';

import { IUserModel } from '@/models/user';

interface IProps {
    item: IUserModel;
    withBorder?: boolean;
    detailsUrl: string;
}

export const UserItem: React.FC<IProps> = ({
    item,
    withBorder = true,
    detailsUrl,
}) => {
    return (
        <div
            className={classNames('user-item', {
                'with-border': withBorder,
            })}
        >
            <Image
                className='user-item__logo'
                src={item.image}
                alt='Logo'
                width={64}
                height={64}
            />
            <div className='user-item__details'>
                <span>{`${item.firstName} ${item.lastName}`}</span>
                <span><b>Username: </b>{item.username}</span>
                <span><b>Role: </b>{item.role}</span>
                <span><b>Email: </b>{item.email}</span>
                <Link href={detailsUrl}>Details</Link>
            </div>
        </div>
    );
};