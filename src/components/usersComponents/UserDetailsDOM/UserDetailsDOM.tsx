import {FC} from "react";
import {IUser} from "@/src/modules/IUser";

type PropsType = {
    user:IUser;
}
const UserDetailsDom:FC<PropsType> = ({user}) => {
    return (
        <div className='details'>
            <h1 className='card-title'>{user.name}</h1>
            <p>{user.username}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserDetailsDom;