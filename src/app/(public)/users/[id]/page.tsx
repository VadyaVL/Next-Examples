import { Metadata } from 'next';
import { SearchParams } from 'next/dist/server/request/search-params';
import { FC } from 'react';

import { UserDetails } from '@/components/users/user-details';
import { dummyApiServiceInstance } from '@/services/dummy-api-service';


type PropsType = {
    params: Promise<{ id: string; }>;
    searchParams: Promise<SearchParams>;
};

export const generateMetadata = async ({ params }: PropsType): Promise<Metadata> => {
    const { id } = await params;

    return ({
        title: `User page ${id}`,
    });
};

const UserDetailsPage: FC<PropsType> = async ({
    params,
}) => {
    const { id } = await params;
    const userId = +id;

    const data = await dummyApiServiceInstance.getUserDetail(userId);
    const recipes = await dummyApiServiceInstance.getAllRecipes();
    const recepiesOfUser = recipes.filter(x => x.userId === userId);

    /* const {
        data,
        //error,
        loading,
        allRecipes,
    } = useAppSelector((state) => state.userDetails); */

    return (
        <>
            {
                data &&
                <UserDetails
                    item={data}
                    recipes={recepiesOfUser}
                />
            }
        </>
    );
};

export default UserDetailsPage;
