import React from "react";
import './../../assets/styles/footer.css';

const Footer = () => {
    return (
        <>
            <div class="footer">
                <div class="footer-top">
                    <div class="footer-logo">
                        <p>KUUT</p>
                    </div>

                    <div class="footer-top-left">
                        <div class="footer-top-left-box">
                            <a href="/internship">求人一覧・検索</a>
                            <a href="/internship">キャリア相談</a>
                            <a href="/internship">イベント</a>
                            <a href="/internship">記事・インターン体験談</a>
                        </div>
                        <div class="footer-top-left-box">
                            <a href="/internship">プライバシーポリシー</a>
                            <a href="/internship">会員規約</a>
                            <a href="/internship">会社概要</a>
                        </div>
                        <div class="footer-top-left-box">
                            <a href="/internship">企業様向け:KUUTについて</a>
                            <a href="/internship">求人掲載案内</a>
                            <a href="/internship">法人向け利既約</a>
                            <a href="/internship">表記規定</a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>Copyright © xxxxxx  All rights reserved. </p>
                    <div class="footer-links">
                        {/* ここをリンクにする */}
                        <p>利用規約</p>
                        <p>プライバシーポリシー</p>
                        <p>運営会社</p>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Footer;