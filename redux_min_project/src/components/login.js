import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/PostsSlice';
import { useNavigate } from 'react-router-dom';

import('./login.css');

export default function () {
    const GoTo = useNavigate();
    const [user, setUser] = useState({ email: '', password: '' });
    const [erorr, setErorr] = useState('');
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user);
    const isloggin = useSelector((state) => state.isloggin);

    useEffect(() => {


        if (User.error) {
            setErorr(User.error);
        }
        if (isloggin) {
            GoTo('/admin');
        }
        console.log(User);

    }, [isloggin]);



    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginUser(user));


    }



    return (

        <div className="text-center">
            <div className="form-signin bg-light">
                <form onSubmit={handleSubmit} >
                    {User.error ?
                        <div className="alert alert-danger" role="alert">
                            <strong>{User.error}</strong>
                        </div>
                        : null}
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <label htmlFor='floatingInput'>Email address</label>
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={handleChange} value={user.name} name="email" />
                    </div>
                    <div className="form-floating">
                        <label htmlFor='floatingPassword'>Password</label>
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={handleChange} value={user.password} name="password" />
                    </div>

                    <button className="w-100 btn btn-lg btn-dark" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </div>


        </div >

    );
}