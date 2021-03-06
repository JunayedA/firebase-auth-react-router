import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, signInUsingGithub} = useAuth();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}>Github Sign In</button>
            <br />
            <NavLink to="/register">New User?</NavLink>
        </div>
    );
};

export default Login;