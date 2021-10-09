import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <input type="submit" value="Submit" />
            </form>
            <NavLink to="/login">Already Registered?</NavLink>
        </div>
    );
};

export default Register;