import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user} = useFirebase();
    return (
        <div className="header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            {user.email &&<button>Log Out</button>}
        </div>
    );
};

export default Header;