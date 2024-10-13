import React, { useState, useEffect } from "react";
import axios from "axios";
import '../assets/styles/App.css';
import Header from '../components/layout/header';
import Voice from "../components/mui/voice";
import TitleBar from '../components/mui/titleBar';
import Footer from '../components/layout/footer';
import '../assets/styles/body.css';
import RecommendCard from '../components/mui/recommendCard';
import FrontImageContainer from '../components/layout/FrontImageContainer';
import EventCard from '../components/mui/eventCard';
import Search from '../components/mui/search';
import FAQ from '../components/mui/faq';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/mui/searchFilter';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/test'); // 遷移先のパスを指定
  };

  const toCompanyPage = () => {
    navigate('/companyDetail'); // 遷移先のパスを指定
  };

  const toGooglePage = () => {
    navigate('/static_pages'); // 遷移先のパスを指定
  };



  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  //実際に検索を行う関数
    const handleSearch = async (searchKeyword) => {
      if (!searchKeyword) {
          console.log("No keyword provided");
          // setFilteredCompanies(companies);  // If no keyword, show all companies
          return;
      }
      try {
          const res = await axios.get(`http://localhost:3010/companies?name=${searchKeyword}`);
          //サーバー側で定義した関数で検索を行い、その結果を取得する
          setFilteredCompanies(res.data);  // Update the filtered companies list
          console.log(res.data);  
      } catch (error) {
          console.error("Error fetching search results:", error);
      }
  };



  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:3010/companies");
      console.log(res.data);
      setCompanies(res.data);    //task と言う変数にデータが格納された  tasks
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetch();
    console.log("useEffect");
  }, []);


  const title1 = "東大生におすすすめの長期インターン求人";
  const title2 = "イベント・セミナー";
  const title3 = "記事・インターン体験談";

  return (
    <html>
      <header>
        <Header />
      </header>
      <body>
        <FrontImageContainer />
        <div class="container">
          <Voice />
          {/* ここが検索欄 */}
          <Search onSearch={handleSearch}/>
          <div class="main-text" >
            <p>インターンは初めてでよくわからない...<br />本当にいい経験になるインターンを知りたい...<br />なら東大生の先輩に</p>
            <h2>直接相談!</h2>
          </div>
          <TitleBar subindex={title1} />
          <div class="recommend">
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
          </div>
          <div class = "search-filter">
            <SearchFilter />
          </div>


          <TitleBar subindex={title2} />
          <div class="recommend">
            <EventCard explain={"wwwwwwwwwwwwwwwwwwwwwwww"} />
            <EventCard explain={"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"} />
            <EventCard explain={"wwwwwwwwwwww"} />
            <EventCard explain={"aaaaaaaaaa"} />
          </div>

          <TitleBar subindex={title3} />
          <div class="recommend">
            <EventCard explain={"wwwwwwwwwwww"} />
            <EventCard explain={"aaaaaaaaaa"} />
          </div>
          {/* ここから条件での絞り込みを開始する */}
          
          <div class = "faq-container"> 
            <h2>FAQ</h2>  
            <FAQ 
              question = "インターンとは？" 
              answer = "インターンシップとは「学生が自己の適正を把握する、あるいは仕事の内容を理解するために、在学中に一定期間に企業内で就業体験を行うこと」を意味します。志望企業の働き方・組織の雰囲気など、入ってみなければわからないことばかりの就職前にインターンシップをすることでより早く自分の適正や、やりたかったこと、実力を把握することができる絶好の機会となります。" 
              link = "https://www.google.com"
              linkText = "インターンの概要について続きを読む"  
              hasBorder={true} />
            <FAQ 
              question = "長期インターンシップとは？" 
              answer = "長期インターンとは1dayインターンやサマーインターンといった短期インターンとは違い、3ヶ月以上の就業体験を行うインターンを指します。ビジネススキルが身につくだけでなく、「やりたいこと」や「向いていること」を知るきっかけになります。" 
              link = "https://www.google.com" 
              linkText = "長期インターンの概要について続きを読む"  
              hasBorder={true} />
            <FAQ 
              question = "インターンシップとアルバイトの違いってなに？" 
              answer = "インターンとアルバイトは、「働いて、対価（お給料）をもらう」という意味では似ていますが、そもそもまったく異なる概念です。アルバイトは本業や学業のかたわら、収入を得るための仕事をすること。一方でインターンは、「学生が自己の適正を把握する、あるいは仕事の内容を理解するために、在学中に一定期間に企業内で就業体験を行うこと」を意味します。また雇う企業側が新卒採用を意識してインターン採用している場合もあります。" 
              link = "https://www.google.com" 
              linkText = "インターンとバイトの違いについて続きを読む"  
              hasBorder={true} />
            <FAQ 
              question = "インターンシップの種類ってどんなものがあるの？" 
              answer = "インターンシップの種類は大きく分けて、1日〜2週間程度で行う「短期」と、3ヶ月〜1年以上行う「長期」があります。短期インターンシップはその中でも、会社説明やグループディスカッション等を行う1〜3日程度のインターンと、グループで1つサービスのデモを作るようなプロジェクト型のインターンに分かれます。長期インターンシップでは実際に就職してからも行うような本当に企業の戦力としての仕事を行うことが多いです。" 
              link = "https://www.google.com" 
              linkText = "インターンシップの種類について続きを読む" />
          
          </div>
          {/* ここから撮ってきたデータを表示する */}
          <button onClick={handleNavigate}>Go to About Page</button>
          <button onClick={toCompanyPage}>Go to Company Page</button>
          <button onClick={toGooglePage}>Go to Google Page</button>
          <div>
            {companies.length > 0 ? (
              <ul>
                {companies.map((company, index) => (
                  <li key={index}>
                    <p>Name: {company.name}</p>
                    <p>Description: {company.created_at}</p>
                    <p>ID: {company.id}</p>
                  </li>  
                ))}
              </ul>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </html >
  );
}

export default Home;
