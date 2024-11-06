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

const EventCard = ({name,sub_name, place }) => {
    return (
        <>
            <div class="event-card">
                <img src={frontImage} alt="company-image" />
                <div class="event-title">
                    <EventBar />
                    <p>【{name}】</p>
                    <p>{name}</p>
                    {/* <div class="info">{explain}</div> */}
                    <div class="info">{sub_name}</div>
                    <div class="info">{place}</div>     
                </div>
            </div>
        </>
    );
}

export default EventCard;