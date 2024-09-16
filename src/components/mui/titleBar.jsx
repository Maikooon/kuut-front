import React from "react";
import './../../assets/styles/titleBar.css';

const TitleBar = ({ subindex }) => {
    return (
        <div class="title-bar">
            <p>{subindex}</p>
        </div>
    );
}

export default TitleBar;
