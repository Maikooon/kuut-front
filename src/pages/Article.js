import React from "react";
import Headers from "../components/layout/header";
import './../assets/styles/article/article.css';
import Footer from '../components/layout/footer';
import './../assets/styles/article/articleCard.css';   
import WOLF from './../assets/images/wolf.png';

const Tag = ({ explain }) => {
    return (
        <>
            <div class="tag">
                <p>
                    {explain}
                </p>
            </div>
        </>
    );
}

const ArticleCard = ({ explain }) => {
    return (
        <>
            <div class="article-card">
                <div class="image">
                    <img src={WOLF} alt="company-image" />
                </div>
                <div class="text-box">
                    <div class="tag-row">
                        <Tag explain="株式会社Wolf Group"/>
                        <Tag explain="株式会社Wolf Group"/>
                        <Tag explain="株式会社Wolf Group"/>
                    </div>
                    
                    <div class="title">月収100万円も目指せる広告代理店インターン</div>
                    <div class="explain"> 三菱商事＋三井物産＋外資戦コンという就活トップレベルの企業から内定を
                    貰った東京大学修士2年生に、総合商社の就活対策を徹底インタビュー。商…
                    三菱商事＋三井物産＋外資戦コンという就活トップレベルの企業から内定</div>
                    <div class="date">2021年10月10日</div>
                </div>
            </div>
        </>
    );
}

const Article = () => {
    return (
        <html>
            <header>
                <Headers/>
            </header>
            <body>
                <div class = "article">
                        <h1>長期インターンに関する記事一覧</h1>
                        {/* ここから一列にカードを並べる */}
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                </div>
            
            </body>
            <footer>
                <Footer/>
            </footer>
        </html>
    );
}

export default Article;

