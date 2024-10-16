
import React, { useEffect } from 'react';
import "./../../assets/styles/header.css";
import EmailIcon from '@mui/icons-material/Email';
import Google from "./../../assets/images/google.png";
import line from "./../../assets/images/line.png";



const LoginFrom = ({logo, title, backColor,color}) => {
    return (
        <div class = "login-form" style = {{background:backColor}}>
            <img src={logo} alt="google" />
            <p style = {{color:color}}>{title}</p>
        </div>
    );
}

const GoogleLogin = () => {
    useEffect(() => { 
        const signInDiv = document.getElementById('signInDiv');
        console.log("signInDiv element: ", signInDiv);
        // Googleクライアントライブラリのスクリプトを読み込み
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        console.log("読み込み");

        // console.log(script);
        // スクリプトが読み込まれた後に初期化
        script.onload = () => {
            window.google.accounts.id.initialize({
                client_id: '8037899288-n7t6njqchdp9236shbkjkf5njlf7hc2i.apps.googleusercontent.com',
                callback: handleCallbackResponse,
            });

            window.google.accounts.id.renderButton(
                document.getElementById('signInDiv'),
                {
                    theme: 'outline',
                    size: 'large',
                    text: 'sign_in_with',
                    shape: 'rectangular',
                    logo_alignment: 'left',
                }
            );
        };
        console.log("初期化");

        

        // クリーンアップ
        return () => {
            document.head.removeChild(script);
        };
    }, []);


    // Googleログインボタンがクリックされたときの処理
    const handleCallbackResponse = async (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
    
        // バックエンドAPIにトークンを送信する処理
        const apiUrl = 'http://localhost:3010/google_login_api/callback';
    
        console.log(apiUrl);
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ credential: response.credential }),
        });
    
        if (!res.ok) {
            console.error('Error while sending token to backend');
        } else {
            const data = await res.json();
            console.log(data);
        }
    };
    

    return (
        <div>
            <div id="signInDiv"></div>
        </div>
    );
};



const LoginPanel = () => {
    return (
        <div class = "login-panel">  
            <p>無料会員登録</p>
            <LoginFrom logo = {line}  title = "LINEで登録" backColor="#06C755" color = "#ffffff"/>
            <LoginFrom logo = {Google}  title = "Googleで登録" backColor = "#FFFFFF" color = "#333333"/>
            <GoogleLogin/>
            <LoginFrom logo = {<EmailIcon/>}  title = "メールアドレスで登録" backColor = "red" color = "#ffffff"/>
            <h3>登録により、利用規約と個人情報の取り扱いに
            同意したものとみなされます。</h3>

        </div>
    );
}

export default LoginPanel;