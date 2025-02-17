'use server';

import { ISignInArgs } from "@/models/sign-in-request";
import { dummyApiServiceInstance } from "@/services/dummy-api-service";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export const signIn = async (args: ISignInArgs) => {
    const response = await dummyApiServiceInstance.signIn(args.username, args.password);

    if (typeof response.message === 'string') {
        throw new Error(response.message);
    }

    const cookiesStore = await cookies();

    cookiesStore.set({
        name: 'accessToken',
        value: response.accessToken,
        httpOnly: true,
        path: '/',
    });
    cookiesStore.set({
        name: 'refreshToken',
        value: response.refreshToken,
        httpOnly: true,
        path: '/',
    });
    cookiesStore.set('userData', JSON.stringify(response));

    redirect('/', RedirectType.replace);
};

export const signOut = async () => {
    const cookiesStore = await cookies();

    cookiesStore.delete('accessToken');
    cookiesStore.delete('refreshToken');
    cookiesStore.delete('userData');

    redirect('/', RedirectType.replace);
};
