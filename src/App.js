import './App.css';
import Header from './components/layout/header';
import Voice from './components/layout/voice';
import TitleBar from './components/mui/titleBar';
import Footer from './components/layout/footer';
import './assets/styles/body.css';
import RecommendCard from './components/mui/recommendCard';
import FrontImageContainer from './components/layout/FrontImageContainer';

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
          <h2>検索バー</h2>
          <div class="main-text" >
            <p>インターンは初めてでよくわからない...<br />本当にいい経験になるインターンを知りたい...<br />なら東大生の先輩に</p>
            <h2>直接相談!</h2>
          </div>

          <TitleBar subindex={title1} />
          <div class="recommend">
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            <RecommendCard explain={"wwwwwwwwwwww"} />
            < RecommendCard explain={"wwwwwwwwwwww"} />
            < RecommendCard explain={"wwwwwwwwwwww"} />
          </div>


          <TitleBar subindex={title2} />
          <div class="recommend">
            <RecommendCard explain={"wwwwwwwwwwww"} />
          </div>

          <TitleBar subindex={title3} />
          <div class="recommend">
            <RecommendCard explain={"wwwwwwwwwwww"} />
          </div>
          <h2>FAQ</h2>
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </html >
  );
}

export default App;
