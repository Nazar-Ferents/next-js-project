import {getAllUsers} from "@/src/services/apiService";
import Link from "next/link";

const UsersComponent = async () => {

    const users = await getAllUsers()
    return (
        <div>
            {
                users.map((user) => (<div key={user.id}>
                    <Link href={
                        {pathname:'/users/' + user.id.toString(),
                            query:{data:JSON.stringify(user)}
                    }
                    }>{user.name}</Link>
                </div>))
            }
        </div>
    );
};

export default UsersComponent;