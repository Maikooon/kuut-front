import React from "react";
import Linkify from "linkify-react";
import './../../assets/styles/titleBar.css';

const linkifyOptions = {
    className: "text-blue-400",
};


const TitleBar = ({ subindex }) => {
    return (
        <div class="title-bar">
            <p>{subindex}</p>
            <div class="title-link">
                <a href="localohost:3000">もっと見る </a>
            </div>
        </div>
    );
}



export default TitleBar;
