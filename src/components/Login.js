import { auth } from '../config/firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/core";
import './css/Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const override = css`
        margin-top: 20px;
    `;
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const signIn = (e) => {
        e.preventDefault();
        setLoading(true);
        auth.signInWithEmailAndPassword(
            email, password
        ).then((auth) => {
            if (auth) {
                history.push('/');
            }
        }).catch(error => {
            alert(error.message);
        });
    }
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            email, password
        ).then((auth) => {
            if (auth) {
                history.push('/');
            }
        }).catch(error => {
            alert(error.message);
        });
    }
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
                    <input type="text" value={email} onChange={handleEmail} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={handlePassword} />

                    <button className="login__signInButton" type="submit" onClick={signIn} >Sign in</button>

                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className="login__registerButton" type="submit" onClick={register} >Create your Amazon Account</button>
                </form>
            </div>
            <BarLoader
                css={override}
                size={60}
                color={"#F1C14A"}
                loading={loading}
            />
        </div>
    )
}

export default Login;
