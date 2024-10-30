import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Company from './pages/Company';
import ContactForm from './pages/ContactForm';
import EventSeminer from './pages/EventSeminer';
import Article from './pages/Article';

//画面遷移をしたいときようにここにルーティングを定義する
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/companyDetail" element={<Company />} />
            <Route path ="/contact" element={<ContactForm />} />
            <Route path="/eventSeminer" element={<EventSeminer />} />
            <Route path="/article" element={<Article />} />
        </Routes>
    );
}

export default App;
