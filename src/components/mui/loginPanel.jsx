import React from "react";
import "./../../assets/styles/header.css";



const LoginFrom = () => {
    return (
        <div class = "login-form">
            <p>メールアドレス</p>
        </div>
    );
}

const LoginPanel = () => {
    return (
        <div class = "login-panel">  
            <p>無料会員登録</p>
            <LoginFrom />
            <LoginFrom />
            <LoginFrom />
            <h3>登録により、利用規約と個人情報の取り扱いに
            同意したものとみなされます。</h3>

        </div>
    );
}

export default LoginPanel;