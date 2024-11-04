import React from "react";
import './../../assets/styles/home/titleBar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';

const TitleBar = ({ subindex,nextPage}) => {
    return (
        <div class="title-bar">
            <p>{subindex}</p>
            <div class="title-link">
                <Button endIcon={<ArrowForwardIosIcon/>} onClick={nextPage}>
                    もっとみる
                </Button>
            </div>
        </div>
    );
}

export default TitleBar;