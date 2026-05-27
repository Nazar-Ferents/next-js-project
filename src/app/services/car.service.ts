
import {ICar} from "@/src/app/modules/ICar";
import {baseURL} from "@/src/app/constants/constants";
import {CarFormData} from "@/lib/schema/shema";

export const carServiceAPI = {

    getCars: async ():Promise<ICar[]> => {

        return await fetch(`${baseURL}/cars`)
            .then(res => res.json())

    },
    postCar:async (data: CarFormData) => {

        const res = await fetch(`${baseURL}/cars`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        })

        const json:CarFormData = await res.json();
        return json;
    }
}