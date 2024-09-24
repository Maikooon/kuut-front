import '../assets/styles/App.css';
import Header from '../components/layout/header';
import Voice from '../components/layout/voice';
import TitleBar from '../components/mui/titleBar';
import Footer from '../components/layout/footer';
import '../assets/styles/body.css';
import RecommendCard from '../components/mui/recommendCard';
import FrontImageContainer from '../components/layout/FrontImageContainer';
import EventCard from '../components/mui/eventCard';
import Search from '../components/mui/search';
import FAQ from '../components/mui/faq';

function App() {
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
          <Search />
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


          <TitleBar subindex={title2} />
          <div class="recommend">
            {/* <EventCard explain={"wwwwwwwwwwwwwwwwwwwwwwww"} />
            <EventCard explain={"wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"} /> */}
            <EventCard explain={"wwwwwwwwwwww"} />
            <EventCard explain={"aaaaaaaaaa"} />
          </div>

          <TitleBar subindex={title3} />
          <div class="recommend">
            <EventCard explain={"wwwwwwwwwwww"} />
            <EventCard explain={"aaaaaaaaaa"} />
          </div>
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
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </html >
  );
}

export default App;
