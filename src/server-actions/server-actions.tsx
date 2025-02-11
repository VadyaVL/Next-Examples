'use server';

import { ICreateCar } from "@/models/create-car";
import { saveCar } from "@/services/api-service";
//import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const saveCarAction = async (formData: FormData) => {
    const brand = formData.get('brand') as string;
    const year = formData.get('year') as string;
    const price = formData.get('price') as string;

    /* console.warn({
        brand,
        year,
        price, 
    }); */

    await saveCarAction2({
        brand: brand,
        year: +year,
        price: +price, 
    });
};

export const saveCarAction2 = async (item: ICreateCar) => {
    await saveCar(item);

    //revalidatePath('/create-car');
    redirect('/cars')
};
