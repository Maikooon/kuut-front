import React from "react";
import './../../assets/styles/titleBar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TitleBar = ({ subindex }) => {
    return (
        <div class="title-bar">
            <p>{subindex}</p>
            <div class="title-link">
                <a href="localohost:3000">もっと見る<ArrowForwardIosIcon/> </a>
            </div>
        </div>
    );
}

export default TitleBar;
