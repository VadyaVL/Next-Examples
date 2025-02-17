import * as React from 'react';

import { ListView } from '@/components/list-view';
import { RecipeItem } from '@/components/recipes/recipe-item';
import { dummyApiServiceInstance } from '@/services/dummy-api-service';

type PagePropsType = {
    searchParams: Promise<{
        [key: string]: string | /* string[] | */ undefined;
    }>;
};

const RecipesPage: React.FC<PagePropsType> = async ({
    searchParams,
}) => {
        const {
            searchTerm = '',
            limit: limitSP = '5',
            page: pageSP = '0',
            tag = '',
        } = await searchParams;
    
        const limit = Number(limitSP);
        const currentPage = Number(pageSP);
    
        const {
            recipes,
            limit: actualLimit,
            total,
        } = await dummyApiServiceInstance.getRecipeList(
            searchTerm,
            tag,
            limit,
            currentPage * currentPage,
        );

    return (
        <ListView
            searchTerm={searchTerm}
            currentPage={currentPage}
            limit={limit}
            //isLoading={loading}
            //error={error}
            actualLimit={actualLimit}
            total={total}
        >
            {
                recipes.map(item => (
                    <RecipeItem
                        key={item.id}
                        item={item}
                        detailsUrl={`/recipes/${item.id}`}
                    />
                ))
            }
        </ListView>
    );
};

export default RecipesPage;
