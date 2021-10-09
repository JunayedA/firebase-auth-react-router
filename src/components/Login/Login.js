import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Please login</h2>
            <button>Google sing in</button>
            <br />
            <NavLink to="/register">New User?</NavLink>
        </div>
    );
};

export default Login;