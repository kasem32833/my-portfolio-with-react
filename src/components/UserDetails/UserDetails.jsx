import {useLoaderData, useNavigate  } from "react-router-dom";

const UserDetails = () => {
    const userDetails = useLoaderData();
    const {id, name, address, email, username} =  userDetails;
    console.log(userDetails);
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1)
    }

    return (
        <div>
            <p>User Id:{id}</p>
            <h2 className="text-xl">{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <button onClick={handleGoBack} className="btn btn-secondary">Go Back</button>
        </div>
    );
};

export default UserDetails;