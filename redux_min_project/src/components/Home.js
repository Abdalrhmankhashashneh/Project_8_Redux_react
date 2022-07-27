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
        <section id="team" className="pb-5">
            <div className="container">
                <h5 className="section-title h1">OUR Post</h5>
                <div className="row">
                    {posts.map((post) => (

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                {/* <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_06.jpg" alt="card image"></p>
                                                <h4 className="card-title">Sunlimetech</h4> */}
                                                <p className="card-text">{post.title}</p>
                                                <a href="https://www.fiverr.com/share/qb8D02" className="btn btn-primary btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">{post.title}</h4>
                                                <p className="card-text">{post.content}</p>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                            <i className="fa fa-facebook"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                            <i className="fa fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                            <i className="fa fa-skype"></i>
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a className="social-icon text-xs-center" target="_blank" href="https://www.fiverr.com/share/qb8D02">
                                                            <i className="fa fa-google"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>

    )
}