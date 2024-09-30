import { React,useState } from 'react';
import './../../assets/styles/voiceCard.css';
import Rating from '@mui/material/Rating';
import ',/../assets/styles/test.css';

const VoiceCard = ({company,belong,rank, text}) => {
    // const [value, setValue] = useState();

    //多分ここでカードに入る情報を取得する
    return (
        <>
            <div class="card">
                <div class="voice">Voice</div>
                <div class="border" />
                {/* ここからデータを参照 */}
                <div class="company-info">{company}</div>
                <div class="university-info">{belong}</div>
                <div class="rating">
                    <span>満足度</span>
                    <Rating name="read-only" value={rank} readOnly />
                </div>
                <div class="comment">
                    {text}
                </div>
            </div>
        </>
    );
}

const Voice = () => {
    const data = [
        {
            company:"楽天グループ株式会社に内定",
            belong:"東京大学 経済部3年",
            rank:5,
            text:"検索機能の使いやすさがよかったです。最初は就活に役立つアルバイト代わりになれば、という思いで探し始めたが、本気で成長させたいと思わせてくれるきっかけになりました。"
        },
        {
            company:"楽天グループ株式会社に内定",
            belong:"東京大学 経済部3年",
            rank:5,
            text:"検索機能の使いやすさがよかったです。最初は就活に役立つアルバイト代わりになれば、という思いで探し始めたが、本気で成長させたいと思わせてくれるきっかけになりました。"
        },
        {
            company:"楽天グループ株式会社に内定",
            belong:"東京大学 経済部3年",
            rank:5,
            text:"検索機能の使いやすさがよかったです。最初は就活に役立つアルバイト代わりになれば、という思いで探し始めたが、本気で成長させたいと思わせてくれるきっかけになりました。"
        },
        {
            company:"楽天グループ株式会社に内定",
            belong:"東京大学 経済部3年",
            rank:5,
            text:"検索機能の使いやすさがよかったです。最初は就活に役立つアルバイト代わりになれば、という思いで探し始めたが、本気で成長させたいと思わせてくれるきっかけになりました。"
        },
        {
            company:"楽天グループ株式会社に内定",
            belong:"東京大学 経済部3年",
            rank:5,
            text:"検索機能の使いやすさがよかったです。最初は就活に役立つアルバイト代わりになれば、という思いで探し始めたが、本気で成長させたいと思わせてくれるきっかけになりました。"
        },
    ];
    return (
        <>
            <div class="voice-container">
                
                {data.map((data) =>
                    <VoiceCard  
                        company={data.company} 
                        belong={data.belong} 
                        rank={data.rank}    
                        text={data.text}/>
                    )
                }
                
            </div>
        </>
    )
}

export default Voice;