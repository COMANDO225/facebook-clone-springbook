import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { addAllPosts, selectPost } from "../public/src/features/postSlice";
import { useEffect } from "react";
import axios from "axios";

const Posts = () => {

    const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

    const dispatch = useDispatch();
    const posts = useSelector(selectPost);

    useEffect(() => {
        const fetchData = () => {
            const response = axios.get(FACEBOOK_CLONE_ENDPOINT).then(
                (response) => {
                    dispatch(addAllPosts(response.data));
            })
        }
        fetchData();
    }, [dispatch]);

    return (
        <div>
            {
                posts.map(post => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Posts;