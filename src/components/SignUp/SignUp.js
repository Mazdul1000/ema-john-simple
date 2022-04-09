import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from "../../images/google.svg";

const SignUp = () => {
    return (
        <div className='login-container'>
            <div className='form-container'>
                <h2>Please Sign Up</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='signup'>Already have an account?<Link className='sign-up' to='/login'>Log In!</Link></p>
                <div className='divider'>
                    <span className='line'></span><span className='or'>Or</span><span className='line'></span>
                </div>
                <button className='google-sign-in-btn'><img src={googleIcon}  alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;