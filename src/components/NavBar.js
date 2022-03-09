import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Footer from './Footer';



const NavBar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" style={{
                fontFamily: 'Quicksand, san-serif',
                fontSize: '20px',
                fontWeight: '700'
            }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Joyce's Weekend</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                        <li className="nav-item">
                                <Link to="/Home" className="nav-link" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Saturday" className="nav-link" aria-current="page">
                                    Saturday
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/Sunday" className="nav-link" aria-current="page">
                                    Sunday
                                </Link>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />

        

        </>
    )
}

export default NavBar;