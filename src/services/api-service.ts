import { ICar } from "@/models/car";
import { ICreateCar } from "@/models/create-car";

const API_URL = 'http://owu.linkpc.net/carsAPI/v1';
//const API_URL_2 = 'http://185.69.152.209/carsAPI/v1';

export const getAllCars = async (sort: boolean): Promise<ICar[]> => {
    const response = await fetch(`${API_URL}/cars`);

    const cars: ICar[] = await response.json();

    return sort ? cars.reverse() : cars;
};

export const saveCar = async (newCar: ICreateCar): Promise<ICar> => {
    const response = await fetch(`${API_URL}/cars`, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCar),
    });

    return await response.json();
};
