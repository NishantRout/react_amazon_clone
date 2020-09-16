import React from 'react';
import { Link } from 'react-router-dom';
import './css/Login.css';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Email</h5>
                    <input type="password" />

                    <button className="login__signInButton">Sign in</button>

                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className="login__registerButton">Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
