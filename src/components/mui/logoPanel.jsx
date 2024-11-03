import React from 'react';
import logo2 from './../../assets/images/logo2.png';
import './../../assets/styles/logoPanel.css';

const LogoPanel = () => {
    return (
        <div class="logo-container">
            <div class =  "logo-style">
                <img src={logo2}  />
            </div>
            <p>KUUT</p>
            <p>東大生だけのハイクラスインターン</p>
        </div>
    );
}

export default LogoPanel;