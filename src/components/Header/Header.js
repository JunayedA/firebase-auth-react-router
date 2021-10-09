import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button>Log Out</button>
        </div>
    );
};

export default Header;