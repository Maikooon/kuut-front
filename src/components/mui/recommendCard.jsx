import React from "react";
import './../../assets/styles/recommendCard.css';
import frontImage from './../../assets/images/front-image.png';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TrainIcon from '@mui/icons-material/Train';

const PictureTitle = ({ icon, title, explain }) => {
    return (
        <>
            <div class="picture-title">
                {icon}
                <p>{explain}</p>
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
                <PictureTitle icon={<WorkIcon sx={{ width: '8%', height: '8%' }}/>}  explain={explain} />
                <PictureTitle icon={<CurrencyYenIcon sx={{ width: '8%', height: '8%' }}/>} explain={explain} />
                <PictureTitle icon={<AccessTimeIcon sx={{ width: '8%', height: '8%' }}/>}  explain={explain} />
                <PictureTitle icon={<TrainIcon sx={{ width: '8%', height: '8%' }}/>} explain={explain} />
            </div>
        </>
    );
}

export default RecommendCard;