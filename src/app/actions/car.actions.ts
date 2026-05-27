'use server'

import {CarFormData} from "@/lib/schema/shema";
import {carServiceAPI} from "@/src/app/services/car.service";
export const sendCar = async (data: CarFormData) => {

    const carsData = await carServiceAPI.postCar(data)

    console.log(carsData);

}