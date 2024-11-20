import { useEffect, useState } from "react";
import User from "../User/User";


const Users = () => {

     const [users, setUsers] = useState([])

     useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    console.log(users);
    

    

    return (
        <div>
            <p>Total Users: </p>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;