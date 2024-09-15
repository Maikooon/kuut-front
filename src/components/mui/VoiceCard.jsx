import React from "react";
import './../../assets/styles/voiceCard.css';

const VoiceCard = () => {
    //多分ここでカードに入る情報を取得する
    return (
        <>
            <div class="card">
                <div class="voice">VOICE</div>
                <div class="border" />
                {/* ここからデータを参照 */}
                <div class="company-info">楽天グループ株式会社に内定</div>
                <div class="university-info">東京大学 経済部3年</div>
                <div class="rating">
                    <span>満足度</span>
                    <div class="stars">
                        ★★★★★
                    </div>
                </div>
                <div class="comment">
                    検索機能の使いやすさがよかったです。最初は就活に役立つアルバイト代わりになれば、という思いで探し始めたが、本気で成長させたいと思わせてくれるきっかけになりました。
                </div>
            </div>
        </>
    );
}

export default VoiceCard;