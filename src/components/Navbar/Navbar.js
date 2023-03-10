import React from 'react'
import './Navbar.css';
import logo from './img/download.png';

const Navbar = () => {
    return (
        <div className='Navbar-container'>
            <div className='logo'>
                <a href="/home">
                    <img src={logo} alt="logo" style={{ width: '7vw', marginLeft:'3vw' }} />
                </a>
            </div>
            <div className='listItems'>
                <ul>
                    <li><a href="/Account">Account</a></li>
                    <li><a href="/Genre">Genre</a></li>
                    <li><a href="/Language">Language</a></li>
                    <li><a href="/Home">Home</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar