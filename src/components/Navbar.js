import React from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Navbar() {
    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="header__search">
                <input
                    type="text"
                    className="header__searchInput"
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link className="header__link" to="login">
                    <div className="header__option">
                        <span>Hello</span>
                        <span>Sign In</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
