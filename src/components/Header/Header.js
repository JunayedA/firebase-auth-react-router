import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/shipping">Shipping</NavLink>
            <NavLink to="/placeorder">Place Order</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <span>{user.displayName} </span>
            {user.email &&<button onClick={logout}>Log Out</button>}
        </div>
    );
};

export default Header;