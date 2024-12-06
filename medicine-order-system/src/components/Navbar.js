import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    Medicine Store
                </Link>
                <div className="navbar-links">
                    <Link to="/login" className="navbar-link">Login</Link>
                    <Link to="/register" className="navbar-link">Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
