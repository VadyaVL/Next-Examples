import { cookies } from 'next/headers';
import * as React from "react";

const HomePage: React.FC = async () => {
    const cookiesStore = await cookies();

    const userData = cookiesStore.get('userData');
    const isAuthorized = !!userData;

    return (
        <>
            {
                !isAuthorized &&
                <span>Протрібно авторизуватися</span>
            }
        </>
    );
};

export default HomePage;
