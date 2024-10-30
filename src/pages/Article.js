import React from "react";
import Headers from "../components/layout/header";
import './../assets/styles/article/article.css';
import Footer from '../components/layout/footer';
import './../assets/styles/article/articleCard.css';   
import ArticleImage from './..//assets/images/article/image.png';

const ArticleCard = () => {
    return (
        <div class="article-card">
            <div class="article-card-img">
                {/* <img src={ArticleImage} alt="article-image"  /> */}
            </div>
            <div class="article-card-text">
                <div class="article-card-text-title">
                    <h3>長期インターンのメリット</h3>
                    <p>三菱商事＋三井物産＋外資戦コンという就活トップレベルの企業から内定を
                    貰った東京大学修士2年生に、総合商社の就活対策を徹底インタビュー。商…</p>
                    <p>2021年10月10日</p>
                </div>
            </div>
        </div>
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
                </div>
            </body>
            <footer>
                <Footer/>
            </footer>
        </html>
    );
}

export default Article;