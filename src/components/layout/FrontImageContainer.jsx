
import React from "react";
import FrontImage from './../../assets/images/front-image.png';

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
                    <div class="login-panel">
                        <h3>ログイン</h3>
                    </div>
                </div >
                <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
                    <img src={FrontImage} style={frontImageStyle} alt="Front" />
                </div>
            </div>
        </>

    );
}


const frontImageStyle = {
    width: '100%',          // Make the image fit the width of its container
    height: 'auto',        // Maintain aspect ratio by adjusting height automatically
    maxHeight: '100vh',    // Ensure the image does not exceed the viewport height
    objectFit: 'cover',    // Cover the container, cropping the image if necessary
};


export default FrontImageContainer;