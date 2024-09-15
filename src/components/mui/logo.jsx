import React from 'react';
import logo from './../../assets/images/logo.png';

const logoStyle = {
    windowHeight: '20vw',
    height: '5vw',
};

const Logo = () => {
    return (
        <div style={logoStyle}>
            <img src={logo} />
        </div>
    );
}

export default Logo;