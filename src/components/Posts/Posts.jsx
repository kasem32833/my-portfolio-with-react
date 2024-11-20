import { useLoaderData } from "react-router-dom";


const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <p>Total Posts:{posts.length}</p>
        </div>
    );
};

export default Posts;