'use server'

import {CarFormData} from "@/lib/schema/shema";
import {baseURL} from "@/src/app/constants/constants";
export const sendCar = async (data: CarFormData) => {

    const res = await fetch(`${baseURL}/cars`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}

    })


    const json:CarFormData = await res.json();
    return json;

}