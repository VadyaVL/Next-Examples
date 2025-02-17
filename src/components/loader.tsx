import { FC } from 'react';

import './loader.css';

import classNames from 'classnames';

interface IProps {
    isLoading: boolean;
}

export const Loader: FC<IProps> = ({
    isLoading,
}) => {
    return (
        <div
            className={classNames('loader', {
                visible: isLoading,
            })}
        >
            <span>Loading...</span>
        </div>
    );
};
