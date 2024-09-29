import React from "react";
import './../../assets/styles/eventCard.css';
import frontImage from './../../assets/images/front-image.png';
import FlagIcon from '@mui/icons-material/Flag';

const EventBar = () => {
    return (
        <>
            <div class="event-bar">
                <p>EVENT</p>
                <FlagIcon sx={{color:"#ffffff", maskSize:"5%"}} />
            </div>
        </>
    );
}

const EventCard = ({ explain }) => {
    return (
        <>
            <div class="event-card">
                <img src={frontImage} alt="company-image" />
                <div class="event-title">
                    <EventBar />
                    <p>【初コラボ！！】</p>
                    <p>東大メシ×慶應メシ</p>
                    {/* <div class="info">{explain}</div> */}
                    <div class="info">連続起業家の真田 哲弥さんを東大生・慶應生でお迎えしました！</div>
                </div>
            </div>
        </>
    );
}

export default EventCard;