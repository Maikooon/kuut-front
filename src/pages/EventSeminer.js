import React , { useEffect, useState }from "react";
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
    // ここでAPIを叩いて、イベントのデータを取得する
    // そのデータをEventCardに渡して、表示する
    // まず、状態をセットする、データはeventsに格納される
    const [events, setEvents] = useState([]);
    // 次に、APIを叩く関数を作成する
    useEffect(() => {
        // バックエンドからデータを取得する例（ここではfetchを使用）
        fetch('http://localhost:3010/events')  // APIのエンドポイント
            .then(response => response.json())
            .then(data => {
                // バックエンドから返されたJSONデータを状態にセット
                setEvents(data);
            })
            .catch(error => {
                console.error('データの取得に失敗しました:', error);
            });
    }, []);

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
                        {/* 以下でMap上に表示する */}
                        {events.map(event => (
                            <EventCard
                                name={event.name}
                                sub_name={event.sub_name}
                                place={event.place}
                                data={event.data}
                                target={event.target}
                            />
                        ))}
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