import React from 'react';
import logo from './../../assets/images/logo.png';
import './../../assets/styles/logoPanel.css';

const LogoPanel = () => {
    return (
        <div class="logo-container">
            <div class =  "logo-style">
                <img src={logo}  />
            </div>
            <p>東大特化長期インターマッチング KUUT</p>
        </div>
    );
}

export default LogoPanel;