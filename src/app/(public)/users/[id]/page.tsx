import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/src/modules/IUser";

type PropsType = {
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>,
}

export const  generateMetadata = async({params}:PropsType):Promise<Metadata> => {
   const {id} = await params;
return {
    title: `User Page ` +id
}
}

const UserPage:FC<PropsType> =async ({searchParams}) => {


        const {data} = await searchParams
    let obj = null;
    if (typeof data === 'string'){
        obj = JSON.parse(data) as IUser
    }



    return (
        <div>
            {
                obj && <p>{obj.name} {obj.id}</p>
            }
        </div>
    );
};

export default UserPage;