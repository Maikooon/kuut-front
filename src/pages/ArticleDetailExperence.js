import React from 'react';
import Headers from '../components/layout/header';
import Footer from '../components/layout/footer';
import ArticleImage from './..//assets/images/article/image.png';
import './../assets/styles/article/articleDetailExperience.css';
import Experience from './../assets/images/article/experience.png';
import CustomLectangleButton from '../components/mui/CustomLectangleButton';


const DetailText = () => {
    return (
        <div class = "article-detail-detail-text">
            {/* 企業のイメージを格納 */}
            <div class = "article-detail-detail-image">
                <img src={Experience} alt="article-image"  />
            </div>
            {/* 参加企業に関して 左揃え*/} 
            <div class = "article-detail-detail-join-company">
                <p>大学生の間で注目されている長期インターンですが、「アルバイトと比べて責任が重そう…」「もし合わなかったら辞めて
                も大丈夫かな…」といった不安から、まだ参加を躊躇している人も多いでしょう。</p>
                <br/>
                <p>そこで、実際に長期インターンを経験した学生へインタビューを行い、「企業の選び方」や「インターン先の環境」についてリアルな意見を集めてみました！</p>
                <br/>
                <p>今回は、株式会社Oh my teethでインフルエンサーマーケティングの長期インターンをしている古市 菜緒さんへのインタ
                ビューです！</p>     
            </div>     
            <p>ここにインターン募集カードが入る</p>  
            <div class = "article-detail-detail-join-company">
                <div class='title'>インターンへの入社を決めた理由</div>  
                <h3>ーーOh my teethへはどんなきっかけで入社されたんですか？</h3>
                    <p>古市さん：
M&Aのテレアポインターンを経験する中で、チームリーダになったり、マネジメントをしたりと様々なことに挑戦してき
ましたが、1年経った頃に成長の鈍化を感じて新たな環境へ移りたいと考え、マーケティングを学ぶことができるOh my
teethへ入社を決めました。</p>
                <h3>ーーどうやってOh my teethを探しましたか？</h3>
                    <p>qjjjjjjjjjj</p>
            </div>
            <div class = "article-detail-detail-join-company">
                この記事を書いた人
                <div class='speaker'>ここに書いた人のパネルが入るこれ本当にいるのか？</div>
            </div>

            <CustomLectangleButton text="記事一覧へ戻る" />
        </div>
    );
}

const ArticleDetailExperience = () => {
    return (
        <html>
            <header>
                <Headers />
            </header>
            <body>
                <div class="article-detail-detail">
                    <div class="article-detail-detail-card">
                        <div class="detail-title">
                            <h2>「長期インターンは失敗しても大丈夫」
                            1年生からインターンを始めた大学生の体験談【株式会社Oh my teeth】</h2>
                        </div>
                        <div class= "article-detail-detail-box">
                            <DetailText/>
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


export default ArticleDetailExperience;