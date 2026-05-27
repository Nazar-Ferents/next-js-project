
const UsersPage = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users',{cache: 'no-cache'})
    .then(res => res.json())
    return (
        <div>
            <h2>{Date.now()}</h2>
            {

                users.map((user:any) => (<div key={user.id}>

                    <h2>{user.name}</h2>
                    <p>{user.email}</p>

                </div>))
            }
        </div>
    );
};

export default UsersPage;