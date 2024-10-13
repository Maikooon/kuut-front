import React, { useEffect } from 'react';

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
            <h1 className="font-bold text-4xl">ログイン前のページ</h1>

            {/* Googleログインボタン */}
            <div id="signInDiv"></div>
        </div>
    );
};

export default GoogleLogin;
