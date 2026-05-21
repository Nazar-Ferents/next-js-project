import {getJSONApi} from "@/src/services/api.services";
import UserComponent from "@/src/components/usersComponents/UserComponent/UserComponent";


const UsersComponent = async () => {

    const users = await getJSONApi.getUsers()

    return (
        <div className='grid'>
            {
                users.map((user) => (<UserComponent key={user.id} user={user} />))
            }
        </div>
    );
};

export default UsersComponent;