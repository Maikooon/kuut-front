import React from "react";
import Headers from "../components/layout/header";
import Footer from "../components/layout/footer";
import SearchEngineDetail from '../components/mui/searchEngineDetail';
import "../assets/styles/search/searchPage.css";



const Search = () => {
    return (
        <html>
            <header>
                <Headers />
            </header>
            <body>
                <div class="search-page-container">
                    <SearchEngineDetail />
                    <div class="search-page-result-content">
                        検索結果
                        でできた結果をカードに入れて表示す流ことを行う
                    </div>
                </div>
            </body>
            <footer>
                <Footer />
            </footer>
        </html>
    );
}

export default Search;