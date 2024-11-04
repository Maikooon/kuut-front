import { React } from 'react';
import './../../assets/styles/voiceCard.css';
import Rating from '@mui/material/Rating';
import './../../assets/styles/test.css';

import { register } from "swiper/element/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CampaignIcon from '@mui/icons-material/Campaign';

// SwiperのWeb Componentsを登録
register();


const VoiceCard = ({company,belong,rank, text}) => {
    // const [value, setValue] = useState();

    //多分ここでカードに入る情報を取得する
    return (
            <div class="voice-card">
                <div class="voice">Voice<CampaignIcon/></div>
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
            <swiper-container
                style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }}
                    pagination="true"
                    navigation="true"
                    slides-per-view="4"
                    class="mySwiper"
            >
            {data.map((item, index) => (
                <swiper-slide key={index}>
                    <div class="test">
                        <VoiceCard
                            company={item.company}
                            belong={item.belong}
                            rank={item.rank}
                            text={item.text}
                        /> 
                    </div>
                </swiper-slide>
            ))}
        </swiper-container>
        </>
    )
}

export default Voice;