
'use server';

import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";

const db = sql('meals.db');

export const saveMeal = async (formData:FormData) => {
    // console.log('kavabaga');
    // console.log(formData);

    const titleValue = formData.get('title');
    db.prepare(`insert into meals(title) values(?)`)
        .run(titleValue);
    revalidatePath('/')

}

type MealType = {
    id: number;
    title: string;
}
export const getMeals = async ():Promise<MealType[]> => {

    return db.prepare<MealType[]>('select * from meals').all() as MealType[];
}