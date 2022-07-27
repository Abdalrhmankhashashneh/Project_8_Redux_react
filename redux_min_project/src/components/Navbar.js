import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function () {
    const isloggin = useSelector((state) => state.isloggin);
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger" >
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to='/' >Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    {isloggin ? <li className="nav-item active">
                        <a className="nav-link" href='/login'>Logout <span className="sr-only">(current)</span></a>
                    </li> : <li className="nav-item active">
                        <NavLink className="nav-link" to='/login'>Login <span className="sr-only">(current)</span></NavLink>
                    </li>}


                </ul>

            </div>
        </nav>
    );
}