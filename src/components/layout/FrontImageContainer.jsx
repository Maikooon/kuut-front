
import React from "react";
import FrontImage from './../../assets/images/front-image.png';
import LoginPanel from "../mui/loginPanel";

const FrontImageContainer = () => {
    return (
        <>
            <div class="overall-container">
                <div class="front-panel">
                    <div class="front-image-title">
                        <p>もう、</p>
                        <p>インターン選びで</p>
                        <p>失敗させない　</p>
                    </div>
                    <LoginPanel />
                
                </div >
            </div>
        </>

    );
}

export default FrontImageContainer;