import React from 'react';
import './../../assets/styles/header.css';
import UserActions from '../mui/useractions';
import Nav from '../mui/nav';
import logo from './../../assets/images/logo.png';

const Header = () => {
    return (
        <>
            <div class="header-container">
                <div style={logoStyle}>
                    <img src={logo} width="60%" />
                </div>
                <div class="title-box">
                    <div class="title">東大特化長期インターマッチング KUUT</div>
                </div>
                <UserActions />
            </div>
            <Nav />

        </>

    );
}

const logoStyle = {
    windowHeight: '100%',
    height: '100%',
    objectFit: 'contain',
};

export default Header;