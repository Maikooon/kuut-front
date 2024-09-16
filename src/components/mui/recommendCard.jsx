import React from "react";
import './../../assets/styles/recommendCard.css';
import work from './../../assets/images/work.png';
import doller from './../../assets/images/doller.png';
import accesss from './../../assets/images/access.png';
import clock from './../../assets/images/clock.png';
import frontImage from './../../assets/images/front-image.png';

const PictureTitle = ({ icon, title, explain }) => {
    return (
        <>
            <div class="picture-title">
                <div class="icon">
                    <img src={icon} alt="company-image" />
                </div>
                <div class="info">{title}</div>
                <div class="info">{explain}</div>
            </div>
        </>
    );
}

const RecommendCard = ({ explain }) => {
    return (
        <>
            <div class="recommend-card">
                <div class="image">
                    <img src={frontImage} alt="company-image" />
                </div>
                <div class="company">株式会社Wolf Group</div>
                <div class="title">月収100万円も目指せる広告代理店インターン</div>
                <PictureTitle icon={work} title="業種 :" explain={explain} />
                <PictureTitle icon={doller} title="時給 :" explain={explain} />
                <PictureTitle icon={clock} title="勤務可能日 :" explain={explain} />
                <PictureTitle icon={accesss} title="アクセス :" explain={explain} />
            </div>

        </>
    );
}

export default RecommendCard;