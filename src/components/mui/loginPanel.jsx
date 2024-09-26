import React from "react";
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

const LoginPanel = () => {
    return (
        <div class = "login-panel">  
            <p>無料会員登録</p>
            <LoginFrom logo = {line}  title = "LINEで登録" backColor="#06C755" color = "#ffffff"/>
            <LoginFrom logo = {Google}  title = "Googleで登録" backColor = "#FFFFFF" color = "#333333"/>
            <LoginFrom logo = {<EmailIcon/>}  title = "メールアドレスで登録" backColor = "red" color = "#ffffff"/>
            <h3>登録により、利用規約と個人情報の取り扱いに
            同意したものとみなされます。</h3>

        </div>
    );
}

export default LoginPanel;