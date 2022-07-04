import React from 'react';
import logo from '../../images/mobileplanet.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">About Us</Link>
                <button className='bttn' onClick={() => setLoggedInUser({})}>Sign out</button>
            </nav>
        </div>
    );
};

export default Header;