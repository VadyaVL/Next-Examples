'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import * as React from 'react';

import './list-view.css';

import classNames from "classnames";
import { Loader } from './loader';

interface IProps {
    searchTerm: string;
    currentPage: number;
    limit: number;

    isLoading?: boolean;
    isSearchAvailable?: boolean;
    actualLimit: number;
    total: number;
    error?: string;
}

export const ListView: React.FC<React.PropsWithChildren<IProps>> = ({
    searchTerm,
    currentPage,
    limit,

    isLoading = false,
    isSearchAvailable = true,
    actualLimit,
    total,
    error,
    children,
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const [inputSearchTerm, setInputSearchTerm] = React.useState<string>(searchTerm);

    const navigate = React.useCallback((page: number, limit: number, searchTerm: string, reset: boolean) => {
        const newSearchParams = new URLSearchParams(reset ? undefined : searchParams);

        newSearchParams.set('page', page.toString());
        newSearchParams.set('limit', limit.toString());
        newSearchParams.set('searchTerm', searchTerm);

        const search = newSearchParams.toString();
        const query = search ? `?${search}` : '';

        router.push(`${pathname}${query}`);
    }, [router, searchParams, pathname]);

    const onSearchClick = () => navigate(0, limit, inputSearchTerm, false);
    const onSearchResetClick = () => {
        navigate(0, limit, '', true);
        setInputSearchTerm('');
    };

    return (
        <div className='list-view'>
            {
                isSearchAvailable &&
                <div className='list-view__search'>
                    <input
                        id='searchTerm'
                        className='input-mui'
                        value={inputSearchTerm}
                        onChange={({ target }) => setInputSearchTerm(target.value)}
                    />
                    <button
                        className='btn-mui'
                        onClick={onSearchClick}
                    >
                        Шукати
                    </button>
                    <button
                        className='btn-mui'
                        onClick={onSearchResetClick}
                    >
                        Скинути
                    </button>
                </div>
            }

            <div className='list-view__items'>
                {children}
            </div>

            <div className='list-view__navigation'>
                <button
                    className={classNames('btn-mui')}
                    onClick={() => navigate(currentPage - 1, limit, searchTerm, false)}
                    disabled={currentPage <= 0}
                >
                    Попередня сторінка
                </button>
                <button
                    className={classNames('btn-mui')}
                    onClick={() => navigate(currentPage + 1, limit, searchTerm, false)}
                    disabled={(currentPage * limit + actualLimit) >= total}
                >
                    Наступна сторінка
                </button>
            </div>
            <Loader isLoading={isLoading} />
            {
                typeof error === 'string' &&
                <div className='list-view__error'>
                    <span>{error}</span>
                </div>
            }
        </div>
    );
};
