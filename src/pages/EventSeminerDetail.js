import React from 'react';
import Headers from '../components/layout/header';
import Footer from '../components/layout/footer';
import './../assets/styles/eventseminer/detail.css';
import CustomLectangleButton from '../components/mui/CustomLectangleButton';
import ArticleImage from './..//assets/images/article/image.png';




const DetailText = () => {
    return (
        <div class = "event-seminer-detail-text">
            {/* 企業のイメージを格納 */}
            <div class = "event-seminer-detail-image">
                <img src={ArticleImage} alt="article-image"  />
            </div>
            {/* 参加企業に関して */}
            <div class = "event-seminer-detail-join-company">
                <h3>参加企業の一覧l</h3>
                <p>ここはどうしよって感じ。インターン生には、月収100万円も目指せる環境が整っています。</p>
            </div>
            {/* このイベントについて */}
            <div class = "event-seminer-detail-text-title">
                <h3>概要</h3>
            </div>
            <div class = "event-seminer-detail-text-content">
                <p>株式会社Wolf Groupは、広告代理店業務を行っている企業です。インターン生には、月収100万円も目指せる環境が整っています。</p>
            </div>
            {/* 交通費のご案内 */}
            <div class = "event-seminer-detail-text-title">
                <h3>交通費のご案内</h3>
            </div>
            <div class = "event-seminer-detail-text-content">
                <p>交通費は全額支給いたします。</p>
            </div>
            {/* 開催日時開催場所 */}
            <div class = "event-seminer-detail-text-title">
                <h3>開催日時・開催場所</h3>
            </div>
            <div class = "event-seminer-detail-text-content">
                <p>2021年10月10日 10:00~12:00</p>
                <p>東京都渋谷区渋谷1-1-1</p>
            </div>
            {/* タイムテーブル */}
            <div class = "event-seminer-detail-text-title">
                <h3>タイムテーブル</h3>
            </div>
            <div class = "event-seminer-detail-text-content">
                <p>10:00~10:30　受付</p>
                <p>10:30~11:30　説明会</p>
                <p>11:30~12:00　質問タイム</p>
            </div>
            {/* 参加人数 */}
            <div class = "event-seminer-detail-text-title">
                <h3>参加人数</h3>
            </div>
            <div class = "event-seminer-detail-text-content">
                <p>10人</p>
            </div>
            {/* 服装 */}
        </div>
    );
}

const Navi = () => {
    return (
        <div class= "event-nav">
            <p>日時</p>
            <p>場所</p>
            <p>参加空き</p>

            <CustomLectangleButton text="参加する" width="100%"/>
            <p>締切</p>
        </div>
    );
}


const EventSeminerDetail = () => {
    return (
        <html>
            <header>
                <Headers />
            </header>
            <body>
                <div class="event-seminer-detail">
                    <div class="event-seminer-detail-card">
                        <div class="detail-title">
                            <h3>株式会社　Wolf Group</h3>
                            <h2>月収100万円も目指せる広告代理店インターン</h2>
                        </div>
                        <div class= "event-seminer-detail-box">
                            <DetailText/>
                            <Navi/>
                            
                        </div>
                    </div>
                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </html>
    );
}


export default EventSeminerDetail;