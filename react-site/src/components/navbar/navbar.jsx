import '../../index.css';
import { Outlet, Link } from "react-router-dom";
import { Children } from 'react';

function Navbar({children}) {

    return (
        <>
            <div
                className="bg-neutral-700 w-full text-gray-100 h-11 absolute shadow-md border-b border-black bg-opacity-95">
                <div className="navbar-header">
                    <a className="navbar-brand absolute left-14 top-1 text-3xl text-blue-500" href="#a-home">João P.
                        Santos</a>
                </div>
                I'm a navbar, eeer kinda i mean
                <ul className="absolute right-0 w-fit">
                    <li>
                        <Link to={`Project/1`}>Projects</Link>
                    </li>
                    <li>
                        <Link to={`Project/2`}>Projects</Link>
                    </li>
                </ul>
            </div>
            <div className="m-11"></div>
            {children ?? <Outlet />}
        </>
    )
}

export default Navbar