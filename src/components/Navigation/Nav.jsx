import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-kasa.png';
import './Nav.css';

const Nav = () => {
    return (
        <div className="container__nav">
            <nav className="main-nav">
                <div className="main-nav-img">
                    <Link className="link-img" to="/">
                        <img src={logo} alt="logo-kaza" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/">
                        Accueil
                    </Link>
                    <Link className="link" to="/about">
                        A Propos
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;