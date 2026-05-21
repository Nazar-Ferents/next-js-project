import {IUser} from "@/src/modules/IUser";


export const getAllUsers = async ():Promise<IUser[]> => {

    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
    return users;
}