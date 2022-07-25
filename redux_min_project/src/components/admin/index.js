import { deletePosts, getPosts, setPost } from "../../store/PostsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


export default function () {
    const { posts } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }
        , [dispatch]);

    return (
        <div className="admin_home">
            <div className="container ">
                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">LastUpdate</th>
                            <th scope="col">Action Edit</th>
                            <th scope="col">Action Delete</th>
                        </tr>
                    </thead>
                    <tbody>


                        {posts.map((post, index) => (
                            <tr key={post.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td>{post.created_at}</td>
                                <td><NavLink className="btn btn-warning text-light" to='edit' onClick={(e) => {
                                    dispatch(setPost(post));
                                    alert("Edit");
                                }}>Edit</NavLink></td>
                                <td><NavLink className="btn btn-danger text-light" to='/admin' onClick={(e) => {
                                    dispatch(deletePosts(post));
                                    alert("delete");
                                }}>Delete</NavLink></td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}