import React, { useState, useEffect,useRef } from "react";
import Header from "../components/layout/header";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './../assets/styles/company/companyDetail.css';
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


// はじめの部分の詳細

const ImageBox = () => {
    return (
        <div class="image-box">
            <img src={WOLF} alt="company-image" />
            <div class="image-info">
                <div class = "info-detail">
                    <Work/>
                    <p> 株式会社Wolf Group</p>
                </div>
                <div class = "info-detail">
                    <CurrencyYen/>
                    <p> 株式会社Wolf Group</p>
                </div>
                <div class = "info-detail">
                    <AccessTime/>
                    <p> 株式会社Wolf Group</p>
                </div>
                <div class = "info-detail">
                    <Train/>
                    <p> 株式会社Wolf Group</p>
                </div>
                <p>USP</p>
            </div>
        </div>
    );
}

const SubTitle = ({ title }) => {
    return (
        <div class="sub-title">
            <h3>{title}</h3>
            <p>　　株式会社Wolf Groupは、広告代理店業務を行っている企業です。インターン生には、月収100万円も目指せる環境が整っています。</p>
        </div>
    );
}


// 募集要項///////////////////////////////////////////
const Requirements = () => {
    return (
        <div class="requirement">
            <div class="requirement-title-bar">
                <p>募集要項</p>
            </div>
            <div class="requirements-info">
                <RequireInfo title="勤務地" explain="東京都渋谷区"/>
                <RequireInfo title="勤務時間" explain="10:00~19:00"/>
                <RequireInfo title="給与" explain="月収100万円"/>
                <RequireInfo title="交通費" explain="支給"/>
            </div>
        </div>
    );
}

const RequireInfo = ({ title, explain }) => {
    return (
        <>
            <div class="requirement-detail">
                    <div class="requirement-title">
                        <p>{title}</p>
                    </div>
                    <p>{explain}</p>
            </div>
        </>
    );
}
// ここまで

// 会社概要///////////////////////////////////////////
const CompanyInfo = () => {
    return (
        <div class="company-information">
            <p>会社概要</p>
            <div class = "matrix">
                <CompanyInfoDetail title="設立" explain="2010年"/>
                <CompanyInfoDetail title="設立" explain="2010年"/>
                <CompanyInfoDetail title="設立" explain="2010年"/>
                <CompanyInfoDetail title="設立" explain="2010年"/>
            </div>
        </div>
    );
}
const CompanyInfoDetail = ({title, explain}) => {
    return(
        <div class= "company-info-detail">
            <div class='title' >
                {title}
            </div>
            <div class='explain' >
                {explain}
            </div>
        </div>
    )
}
// ここまで


const Company = () => {
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
                            <ImageBox/>
                            <div class = "intern">
                                {/* <p>イメージを入れる</p> */}
                                <img src= {logo} alt="company-image" />
                                <p>インターン概要</p>
                            </div>
                            <SubTitle title="　事業内容"/>
                            <SubTitle title="　仕事内容"/>
                            <SubTitle title="　仕事内容"/>
                            <Requirements/>
                            <div class="buttons">
                                <button class="favorite-button">
                                ❤️ お気に入りに追加する
                                </button>
                                <CustomLectangleButton text="応募する"/>
                            </div>
                        </div>
                        <div id = "targetArea" ref={targetAreaRef}>
                            <CompanyInfo/>
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


export default Company;