import { FC } from 'react';

import './loader.css';

import classNames from 'classnames';

interface IProps {
    isLoading: boolean;
    title?: string;
}

export const Loader: FC<IProps> = ({
    isLoading,
    title = 'Loading...',
}) => {
    return (
        <div
            className={classNames('loader', {
                visible: isLoading,
            })}
        >
            <span>{title}</span>
        </div>
    );
};
