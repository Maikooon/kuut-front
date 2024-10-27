// ここでよく使用するボタンを定義する

import React from "react";
import './../../assets/styles/eventCard.css';
import frontImage from './../../assets/images/front-image.png';
import FlagIcon from '@mui/icons-material/Flag';

const CustomButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
}

export default CustomButton;
