import type {FC} from 'react';
import type {IUser} from "@/src/modules/IUser";
import Link from "next/link";

type PropsType = {
    user:IUser;
}
const UserComponent:FC<PropsType> = ({user}) => {
    return (
        <div className='card'>
            <h3 className='card-title'>{user.name}</h3>
            <p className='card-text'>{user.email}</p>
            <Link href={'/users/'+user.id} className='link-btn'>Details</Link>
        </div>
    );
};

export default UserComponent;