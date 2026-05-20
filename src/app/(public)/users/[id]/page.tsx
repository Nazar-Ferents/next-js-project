import {FC} from "react";
import {Metadata} from "next";

type PropsType = {
    params:{id:string}
}

export const  generateMetadata = async({params}:PropsType):Promise<Metadata> => {
   const {id} = await params;
return {
    title: `User Page ` +id
}
}

const UserPage:FC<PropsType> =async ({params}) => {
    const result = await params;
    console.log(result)
    return (
        <div>
            {
                `User Page Content ` }
        </div>
    );
};

export default UserPage;