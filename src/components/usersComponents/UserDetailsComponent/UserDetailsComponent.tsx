import {FC} from "react";
import {getJSONApi} from "@/src/services/api.services";
import UserDetailsDOM from "@/src/components/usersComponents/UserDetailsDOM/UserDetailsDOM";

type PropsType = {
    id: string;
}
const UserDetailsComponent:FC<PropsType> =async ({id}) => {


        const user = await getJSONApi.getUser(+id)


    return (
        <div>

            {
                <UserDetailsDOM user={user}/>
            }
        </div>
    );
};

export default UserDetailsComponent;