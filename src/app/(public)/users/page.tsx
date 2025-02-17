import { FC } from 'react';

import { ListView } from '@/components/list-view';
import { UserItem } from "@/components/users/user-item";
import { dummyApiServiceInstance } from '@/services/dummy-api-service';

type PagePropsType = {
    searchParams: Promise<{
        [key: string]: string | /* string[] | */ undefined;
    }>;
};

const UsersPage: FC<PagePropsType> = async ({
    searchParams,
}) => {
    const {
        searchTerm = '',
        limit: limitSP = '5',
        page: pageSP = '0',
    } = await searchParams;

    const limit = Number(limitSP);
    const currentPage = Number(pageSP);

    const {
        users,
        limit: actualLimit,
        total,
    } = await dummyApiServiceInstance.getUserList(
        searchTerm,
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
                users.map(item => (
                    <UserItem
                        key={item.id}
                        item={item}
                        detailsUrl={`/users/${item.id}`}
                    />
                ))
            }
        </ListView>
    );
};

export default UsersPage;
