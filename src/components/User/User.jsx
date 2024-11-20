import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, } = user;
    return (
        <div className="border-2 border-orange-500 mb-6 p-4 rounded-lg">
            <p>{id}</p>
            <p>{name}</p>
            <Link to= {`/users/${id}`}><button className="btn btn-secondary">Show Details</button></Link>
        </div>
    );
};


export default User;