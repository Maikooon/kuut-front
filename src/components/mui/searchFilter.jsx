import React from "react";
import './../../assets/styles/searchFilter.css';

const SearchFilter = () => {
    return(
        <>
            <div class="filter-container">
                <p>エリアから長期インターンシップ募集を探す</p>
            </div>
            <div class="filtering">
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
                <a href="localhost:3000">全て</a>
            </div>
        </>
        
    );
};
const SearchFilters = () => {
    return (
        <>
            <SearchFilter/>
            <SearchFilter/>
            <SearchFilter/>
            <SearchFilter/>
        </>
    );
}

export default SearchFilters;