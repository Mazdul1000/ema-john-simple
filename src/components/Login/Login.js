import googleIcon from "../../images/google.svg";
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='form-container'>
                <h2>Please Login</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Log In" />
                </form>
                <p className='signup'>New to Ema-John?<Link className='sign-up' to='/signup'>Create a new Account!</Link></p>
                <div className='divider'>
                    <span className='line'></span><span className='or'>Or</span><span className='line'></span>
                </div>
                <button className='google-sign-in-btn'><img src={googleIcon}  alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;