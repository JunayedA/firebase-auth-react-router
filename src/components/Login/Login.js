import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <div>
            <h2>Please login</h2>
            <button onClick={signInUsingGoogle}>Google sing in</button>
            <br />
            <NavLink to="/register">New User?</NavLink>
        </div>
    );
};

export default Login;