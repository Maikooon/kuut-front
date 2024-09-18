import React from "react";
import './../../assets/styles/eventCard.css';
import frontImage from './../../assets/images/front-image.png';
import flag from './../../assets/images/flag.png';

const EventBar = () => {
    return (
        <>
            <div class="event-bar">
                <div class="event">EVENT</div>
                <div class="image-box">
                    <img src={flag} alt="flag" />
                </div>
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
                    <div class="title">月収100万円llllーン</div>
                    <div class="info">{explain}</div>
                </div>

            </div>

        </>
    );
}

export default EventCard;