import React, { useState, useEffect,useRef } from "react";
import Header from "../components/layout/header";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './../assets/styles/article/articleDetail.css';
import Work from '@mui/icons-material/Work';
import CurrencyYen from '@mui/icons-material/CurrencyYen';
import AccessTime from '@mui/icons-material/AccessTime';
import Train from '@mui/icons-material/Train';
import frontImage from './../assets/images/front-image.png';
import logo from './../assets/images/image.png';
import CustomLectangleButton from "../components/mui/CustomLectangleButton";
import WOLF from './../assets/images/wolf.png';



const DetailTitle = () => {
    return (
        <div class="detail-title">
            <h3>株式会社　Wolf Group</h3>
            <h2>月収100万円も目指せる広告代理店インターン</h2>
        </div>
    );
}



const Support = () => {
    return(
        <div class="support">
            <h3>長期インターンを探すなら、KUUT(クート)がおすすめ！</h3>
            <p>長期インターン経験豊富な現役学生アドバイザーが、同じ
            学生目線で企業の探し方や面接対策までサポートします。</p>
        </div>
        
    )
}



// 会社概要///////////////////////////////////////////

const Index = () => {
    return(
        <div class="index">
            <p>目次</p>
            <p>インターン概要</p>
            <p>インターン概要</p>
            <p>インターン概要</p>
            <p>インターン概要</p>
        </div>
    )
}
const Point = () => {
    return(
        <div class="point">
            <p>POINT</p>
            <p>月収100万円も目指せる広告代理店インターン</p>
        </div>
    )
}


const ArticleDetail = () => {
    const [isIntersecting,setIsIntersecting] = useState(false);
    const scrollAreaRef = useRef(null);
    const targetAreaRef = useRef(null);
    useEffect(() => {
        const scrollArea = scrollAreaRef.current;
        const targetArea = targetAreaRef.current;
    
        const options = {
          root: scrollArea,
        };
    
        const callback = (entries) => {
          entries.forEach(entry => {
            setIsIntersecting(entry.isIntersecting);
          });
        };
    
        const observerObject = new IntersectionObserver(callback, options);
        if (targetArea) observerObject.observe(targetArea);
    
        return () => {
          if (targetArea) observerObject.unobserve(targetArea);
        };
      }, []);
    
    
    return (
        <html>
            <header>
                <Header/>
            </header>
            <body>
                <div class="company">
                    <div class = "detail-section">
                        <div class='detail-section-upper'>
                            <DetailTitle/>
                            <div class = "text-box">
                                <div class="image-box">
                                    <img src={WOLF} alt="company-image" />
                                </div>
                                <br/>
                                <Point/>
                                <br/>
                                <Index/>
                                <br/>
                                <Support/>
                                <br/>
                                <CustomLectangleButton text="応募する"/>
                                <br/>
                                
                                <div class="about-company">
                                    キーエンスは何の会社？
                                </div>
                                <div class="image-box">
                                    <img src={WOLF} alt="company-image" />
                                </div>
                                <p>キーエンス株式会社は、大阪に本社を置く
ファクトリー・オートメーション（FA）の総合メーカー
です。自動車や電子
機器に使われる商品の提供をする際に、顧客や社会のニーズに合わせて「世界初」「業界初」の付加価値の高い商品を生
み出すことで世界中のものづくりを支えている点が強みです。</p>
<p>現在では、北米・南米・ヨーロッパ・アジアなど世界各地に拠点があり、グローバルなネットワークを活かして日々新し
い価値を創造し続けています。</p>
                                <div class="image-box">
                                    <img src={WOLF} alt="company-image" />
                                </div>
                                <Support/>
                            </div>
                            
                        </div>
                    </div>
                    <div class="card">
                        <div class="tabs">
                            <div id="checkArea" style={{color: isIntersecting ? "#9C9C9C": '#E84338',borderLeft: isIntersecting ? 'none' : '4px solid #E84338'}}>
                                インターン概要 
                            </div>
                            <div id="checkArea" style={{color: isIntersecting ? "#E84338": '#9C9C9C' ,borderLeft: isIntersecting ? '4px solid #E84338' : 'none'}}>
                                会社情報 
                            </div>
                        </div>
                        <button class="favorite-button">
                            ❤️ お気に入りに追加する
                        </button>
                        <button class="apply-button">
                            応募する
                        </button>
                    </div>
                </div>
            </body>
        </html>
        
    )
}


export default ArticleDetail;