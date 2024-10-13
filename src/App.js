import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import Company from './pages/Company';
import GoogleLogin from './pages/GoogleLogin';


//画面遷移をしたいときようにここにルーティングを定義する
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/companyDetail" element={<Company />} />
            <Route path="/static_pages" element={<GoogleLogin />} />
            <Route path="/after_login" element={<Test />} />
        </Routes>
    );
}

export default App;
