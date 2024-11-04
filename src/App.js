import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Company from './pages/Company';
import GoogleLogin from './pages/GoogleLogin';
import ContactForm from './pages/ContactForm';
import EventSeminer from './pages/EventSeminer';
import Article from './pages/Article';
import EventSeminerDetail from './pages/EventSeminerDetail';    
import ArticleDetail from './pages/ArticleDetail';
import ArticleDetailExperience from './pages/ArticleDetailExperence';
import Search from './pages/Search';

//画面遷移をしたいときようにここにルーティングを定義する ,ここと遷移もとのPageだけでおk
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/companyDetail" element={<Company />} />
            <Route path="/static_pages" element={<GoogleLogin />} />
            <Route path="/after_login" element={<Test />} />
            <Route path ="/contact" element={<ContactForm />} />
            <Route path="/eventSeminer" element={<EventSeminer />} />
            <Route path="/article" element={<Article />} />
            <Route path="/article/experience" element={<ArticleDetailExperience />} />
            <Route path="/article/detail" element={<ArticleDetail />} />
            <Route path="/eventSeminerDetail" element={<EventSeminerDetail />} />
            <Route path="/search" element={<Search />} />
        </Routes>

    );
}

export default App;
