
import {ICar} from "@/src/app/modules/ICar";
import {baseURL} from "@/src/app/constants/constants";

export const carServiceAPI = {

    getCars: async ():Promise<ICar[]> => {

        const cars = await fetch(`${baseURL}/cars`)
            .then(res => res.json())
        return cars;
    }
}