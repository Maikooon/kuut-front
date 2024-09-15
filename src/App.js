import './App.css';
import Header from './components/layout/header';
import Voice from './components/layout/voice';
import TitleBar from './components/mui/titleBar';
import './assets/styles/body.css';

function App() {
  const title1 = "東大生におすすすめの長期インターン求人";
  const title2 = "イベント・セミナー";
  const title3 = "記事・インターン体験談";

  return (
    <html>
      <Header />
      <body>
        <Voice />
        <h2>検索バー</h2>
        <div class="main-text" >
          <p>インターンは初めてでよくわからない...<br />本当にいい経験になるインターンを知りたい...<br />なら東大生の先輩に</p>
          <h2>直接相談!</h2>
        </div>
        <TitleBar title={title1} />
        <TitleBar title={title2} />
        <TitleBar title={title3} />
        <h2>インターン求人</h2>
        <h2>イベントセミナー</h2>
        <h2>体験談</h2>
        <h2>FAQ</h2>
        <h2>footer</h2>


      </body>
    </html>
  );
}

export default App;
