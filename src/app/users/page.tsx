
const UsersPage = async () => {

    const users = await fetch('http://localhost:3000/users/api')
    .then(res => res.json());
    return (
        <div>
            {users.map((user:any) => (<div key={user.id}>
                {user.name} - {user.email}
            </div>))}
        </div>
    );
};

export default UsersPage;