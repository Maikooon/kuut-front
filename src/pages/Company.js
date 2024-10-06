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



const DetailTitle = () => {
    return (
        <div class="detail-title">
            <h3>株式会社　Wolf Group</h3>
            <h2>月収100万円も目指せる広告代理店インターン</h2>
        </div>
    );
}


const ImageBox = () => {
    return (
        <div class="image-box">
            <img src={frontImage} alt="company-image" />
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

const CompanyInfo = () => {
    return (
        <div class="company-information">
            <p>会社概要</p>
            <div class="company-information-title-bar">
                <div class= "company-info-detail">
                    <h3>設立</h3>
                    <p>2010年</p>
                </div>
                <div class= "company-info-detail">
                    <h3>設立</h3>
                    <p>2010年</p>
                </div>
                <div class= "company-info-detail">
                    <h3>設立</h3>
                    <p>2010年</p>
                </div>
                <div class= "company-info-detail">
                    <h3>設立</h3>
                    <p>2010年</p>
                </div>
            </div>
        </div>
    );
}

const IndexCard = ({ explain }) => {
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

    return  (
        <div class="card">
                        <div class="tabs">
                            <div class="tab" id="tab1">インターン概要</div>
                            <div class="tab" id="tab2">会社情報</div>
                        </div>
                        <button class="favorite-button">
                            ❤️ お気に入りに追加する
                        </button>
                        <button class="apply-button">
                            応募する
                        </button>
                    </div>
    )

}


const Company = () => {
    
    
    
    return (
        <html>
            <header>
                <Header/>
            </header>
            <body>
                <div class="company">
                    <div class = "detail-section">
                        {/* <section
                            id="detail-section"
                            className={activeSection === 'detail-section' ? 'active-section' : ''} // Apply dynamic class based on active section
                        > */}
                            <DetailTitle/>
                            <ImageBox/>
                            <div class = "intern">
                                <img src= {logo} alt="company-image" />
                                <p>インターン概要</p>
                            </div>
                            <SubTitle title="　事業内容"/>
                            <SubTitle title="　仕事内容"/>
                            <SubTitle title="　仕事内容"/>
                            <Requirements/>
                            <CompanyInfo/>
                        {/* </section> */}
                        {/* <section
                            id="company-section"
                            className={activeSection === 'company-section' ? 'active-section' : ''} // Apply dynamic class based on active section
                        > */}
                            <CompanyInfo/>
                        {/* </section> */}
                    </div>
                    <IndexCard/>
                </div>
            </body>
        </html>
        
    )
}


export default Company;