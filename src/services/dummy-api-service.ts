import { cookies } from "next/headers";

import { isNumeric } from '@/helpers/number-helper';
import { IAccountModel } from '@/models/account';
import { IRecipeModel, IRecipesFeedModel } from '@/models/recipe';
import { IUserModel, IUsersFeedModel } from '@/models/user';

interface ISignInResponse extends IAccountModel {
    accessToken: string;
    refreshToken: string;
};

const baseUrl = 'https://dummyjson.com';

class DummyApiService {
    constructor() {

    }

    public signIn = async (username: string, password: string): Promise<ISignInResponse & Partial<{ message: string; }>> => {
        const response = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 120,
            }),
            credentials: 'include',
        });

        const result: ISignInResponse = await response.json();

        return result;
    };

    public getAccountInformation = async (): Promise<IAccountModel> => {
        const cookiesStore = await cookies();
        const accessToken = cookiesStore.get('accessToken');

        const response = await fetch(`${baseUrl}/auth/me`, {
            method: 'GET',
            headers: accessToken ? {
                Authorization: `Bearer ${accessToken}`,
            } : undefined, 
            credentials: 'include',
        });

        const result: ISignInResponse = await response.json();

        return result;
    };

    public getUserList = async (
        searchTerm: string,
        limit: number,
        skip: number
    ): Promise<IUsersFeedModel & Partial<{ error: { message: string; }; }>> => {
        if (isNumeric(searchTerm)) {
            const userDetail = await this.getUserDetail(+searchTerm);

            return ({
                limit: 1,
                skip: skip,
                total: 1,
                users: [userDetail],
            });
        }

        const response = await fetch(`${baseUrl}/users/search?q=${searchTerm}&limit=${limit}&skip=${skip}`);
        const responseResult: IUsersFeedModel = await response.json();

        return responseResult;
    };

    public getUserDetail = async (
        id: number
    ): Promise<IUserModel> => {
        const response = await fetch(`${baseUrl}/users/${id}`);
        const responseResult: IUserModel = await response.json();

        return responseResult;
    };

    public getRecipeList = async (
        searchTerm: string,
        tag: string,
        limit: number,
        skip: number
    ): Promise<IRecipesFeedModel> => {
        if (isNumeric(searchTerm)) {
            const recipeDetail = await this.getRecipeDetail(+searchTerm);

            return ({
                limit: 1,
                skip: skip,
                total: 1,
                recipes: [recipeDetail],
            });
        } else if (tag) {
            const response = await fetch(`${baseUrl}/recipes/tag/${tag}?limit=${limit}&skip=${skip}`);
            const responseResult: IRecipesFeedModel = await response.json();

            return responseResult;
        }

        const response = await fetch(`${baseUrl}/recipes/search?q=${searchTerm}&limit=${limit}&skip=${skip}`);
        const responseResult: IRecipesFeedModel = await response.json();

        return responseResult;
    };

    public getRecipeDetail = async (
        id: number
    ): Promise<IRecipeModel> => {
        const response = await fetch(`${baseUrl}/recipes/${id}`);
        const responseResult: IRecipeModel = await response.json();

        return responseResult;
    };

    public getAllRecipes = async (): Promise<IRecipeModel[]> => {
        const result = await this.getRecipeList('', '', 1000, 0);

        return result.recipes;
    };
}

export const dummyApiServiceInstance = new DummyApiService();
