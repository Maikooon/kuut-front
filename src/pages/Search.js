import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import SearchEngineDetail from '../components/mui/searchEngineDetail';
import "../assets/styles/search.css";

const Search = () => {
    return (
        <div>
            <Header />
            <h1>Search</h1>
            <SearchEngineDetail />

            ここに検索バーが入る
            <Footer />
        </div>
    );
}

export default Search;