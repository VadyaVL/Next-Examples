import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import './navigation.css';

import { IUserModel } from '@/models/user';

interface IProps {

}

export const Navigation: FC<IProps> = async ({
    
}) => {
    const pathname = 'todo';

    const cookiesStore = await cookies();

    const userDataJson = cookiesStore.get('userData');
    const userData = userDataJson ? JSON.parse(userDataJson.value) as IUserModel : undefined;
    const isAuthorized = !!userData;

    const userLogo: string = userData?.image || '';

    const result: Array<{ path: string; img?: string; title: string; }> = [{
        path: '/',
        title: 'Домашня',
    }];

    if (isAuthorized) {
        result.push({
            path: '/users',
            title: 'Користувачі'
        });
        result.push({
            path: '/recipes',
            title: 'Рецепти'
        });
        result.push({
            path: '/sign-out',
            img: userLogo,
            title: 'Вийти'
        });
    } else {
        result.push({
            path: '/sign-in',
            title: 'Залогінитися'
        });
    }


    return (
        <nav className='nav-mui'>
            <ul>
                {
                    result.map((item, index) => (
                        <li
                            className={pathname.includes(item.path) && index > 0 ? 'active' : ''}
                            key={`${item.title}-${index}`}
                        >
                            <Link
                                href={item.path}
                            >
                                {
                                    item.img &&
                                    <Image
                                        src={item.img}
                                        alt='Logo'
                                        width={32}
                                        height={32}
                                    />
                                }
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};