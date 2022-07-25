import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPosts } from "../../store/PostsSlice";
import { useNavigate } from "react-router-dom";
export default function () {
    const [post, setPosts] = useState({ title: "", content: "" });
    const dispatch = useDispatch();
    const GtO = useNavigate();
    const handelChange = (e) => {
        setPosts({ ...post, [e.target.name]: e.target.value });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addPosts(post));
        console.log(post);
        GtO('/admin')
    }
    return (
        <div className="container mt-5 mb-3" >
            <form className="form-group" onSubmit={handelSubmit}>
                <label >PostTitle</label>
                <input type="text" className="form-control" placeholder="Enter PostTitle" value={post.title} onChange={handelChange} name="title" />
                <label >PostContent</label>
                <input type="text" className="form-control" placeholder="Enter PostContent" value={post.content} onChange={handelChange} name="content" />
                <button type="submit" className="btn btn-primary" >Edit Post</button>
            </form>
        </div>);
}