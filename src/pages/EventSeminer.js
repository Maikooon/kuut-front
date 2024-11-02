import React from "react";
import Headers from "../components/layout/header";
import EventCard from "../components/mui/eventCard";
import './../assets/styles/eventseminer/eventSeminer.css';
import Footer from '../components/layout/footer';


const EventSeminerTitle = ({text}) => {
    return (
        <div class="event-seminer-title">
            <p>{text}</p>
        </div>
    );
}

const EventSeminerTitlePast = ({text}) => {
    return (
        <div class="event-seminer-title-past">
            <p>{text}</p>
        </div>
    );
}

const EventSeminer = () => {
    return (
        <html>
            <header>
                <Headers/>
            </header>
            <body>
                <div class = "event-seminer">
                    <h1>現在募集中のイベント</h1>
                    <EventSeminerTitle text="10月開催"/>
                    <div class="event-seminer-card-list">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                    <EventSeminerTitle text="12月開催" />
                    <div class="event-seminer-card-list">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                    <EventSeminerTitlePast text="過去開催のイベント"/>
                </div>
            </body>
            <footer>
                <Footer/>
            </footer>
        </html>
    );
}

export default EventSeminer;