import { Metadata } from 'next';
import { SearchParams } from 'next/dist/server/request/search-params';
import { FC } from 'react';

import { RecipeDetails } from '@/components/recipes/recipe-details';
import { dummyApiServiceInstance } from '@/services/dummy-api-service';


type PropsType = {
    params: Promise<{ id: string; }>;
    searchParams: Promise<SearchParams>;
};

export const generateMetadata = async ({ params }: PropsType): Promise<Metadata> => {
    const { id } = await params;

    return ({
        title: `Recipe page ${id}`,
    });
};

const RecipeDetailsPage: FC<PropsType> = async ({
    params,
}) => {
    const { id } = await params;
    const recipeId = +id;

    const data = await dummyApiServiceInstance.getRecipeDetail(recipeId);

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
                <RecipeDetails
                    item={data}
                />
            }
        </>
    );
};

export default RecipeDetailsPage;
