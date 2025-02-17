import { Page } from '@/components/page';
import * as React from 'react';

type PropsType = React.PropsWithChildren<{
    params: Promise<{ id: string; }>;
}>;

const RecipeLayout: React.FC<PropsType> = async ({
    params,
    children,
}) => {
    const { id } = await params;

    return (
        <Page
            title={`Рецепт # ${id}`}
        >
            {children}
        </Page>
    );
};

export default RecipeLayout;
