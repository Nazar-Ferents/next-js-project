import {FC} from "react";

type PropsType = {
    params: Promise<{[key:string]:string | string[] | undefined}>
}

const UserPage:FC<PropsType> = async ({params}) => {
 const id = (await params).id
    console.log((await params).id);

     const user = await fetch('https://jsonplaceholder.typicode.com/users/'+id)
                              .then(value => value.json())
    return (
        <div>
           <h1>{user.name}</h1>
            <p>{user.id}</p>
        </div>
    );
};

export default UserPage;