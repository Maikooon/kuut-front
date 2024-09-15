import React from "react";
import './../../assets/styles/titleBar.css';

const TitleBar = ({ title }) => {
    return (
        <div class="title-bar">
            <div class="title">
                {title}
            </div>
        </div>
    );
}


export default TitleBar;