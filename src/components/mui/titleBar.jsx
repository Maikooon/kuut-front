import React from "react";
import './../../assets/styles/titleBar.css';

const TitleBar = ({ subindex }) => {
    return (
        <div class="title-bar">
            <p>{subindex}</p>
            <p>もっと見る</p>
            {/* <div class="title-link">
                <a href="localohost:3000">もっと見る </a>
            </div> */}
        </div>
    );
}

export default TitleBar;
