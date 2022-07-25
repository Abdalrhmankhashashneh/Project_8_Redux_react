import { getPosts } from "../store/PostsSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import("./home.css");

export default function Home() {
    const { posts, post } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        console.log(post);
    }, [dispatch]);
    return (
        <div className="container mt-5 mb-3" >
            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-4 " key={post.id}>
                        <div className="card p-3 mb-4 bg-danger">
                            <div className="d-flex justify-content-between">


                            </div>
                            <div className="mt-5 ">
                                <h3 className="heading text-light">{post.title}</h3>
                                <h5 className="heading text-light">{post.content}</h5>
                                <div className="mt-5">

                                    <div className="mt-3"> <span className="text1 text-light">{post.updated_at} </span> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



            </div>
        </div>
    )
}