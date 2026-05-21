import {FC} from "react";
import UserDetailsComponent from "@/src/components/usersComponents/UserDetailsComponent/UserDetailsComponent";

type PropsType = {
    params:{id:string}
}
const UserDetailPage:FC<PropsType> = async ({params} ) => {

    const {id} = await params;

    return (
        <div>

            <UserDetailsComponent id={id}/>
        </div>
    );
};

export default UserDetailPage;