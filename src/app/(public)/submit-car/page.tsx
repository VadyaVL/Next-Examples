import * as React from 'react';

type PropsType = {
    searchParams: Promise<{
        [key: string] : string | string[] | undefined;
    }>;
};

const SubmitCarPage: React.FC<PropsType> = async ({
    searchParams,
}) => {
    const sp = await searchParams;

    return (
        <div className='submit-car-page'>
            Car was submitted.

            {sp.name}
        </div>
    );
};

export default SubmitCarPage;
