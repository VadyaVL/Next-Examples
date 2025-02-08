'use server';

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

    await saveCar({
        brand: brand,
        year: +year,
        price: +price, 
    });

    //revalidatePath('/create-car');
    redirect('/cars')
};
