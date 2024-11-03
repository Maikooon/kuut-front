import React from "react";
import './../../assets/styles/searchFilter.css';

/*
下の部分にある、ボタンを押したらそのボタンに対するページに遷移する方法
*/

const SearchFilter = ({title}) => {
    const data = [
        { id: 1, name: '東京都', link: 'localhost:3000/tokyo' },
        { id: 2, name: '渋谷区', link: 'localhost:3000/shibuya' },
        { id: 3, name: '港区', link: 'localhost:3000/minato' },
        { id: 4, name: '新宿区', link: 'localhost:3000/shinjuku' },
        { id: 5, name: '中央区', link: 'localhost:3000/chuo' },
        { id: 6, name: '品川区', link: 'localhost:3000/shinagawa' },
        { id: 7, name: '目黒区', link: 'localhost:3000/meguro' },
        { id: 8, name: '世田谷区', link: 'localhost:3000/setagaya' },
        { id: 9, name: '江東区', link: 'localhost:3000/koto' }
    ];

    return(
        <>
            <div class="filter-container">
                <p>{title}</p>
            </div>
            <div class="filtering">
                {data.map((item)=> (
                    <a key ={item.id} href={item.link}>
                        {item.name}
                    </a>
                ))}
            </div>
        </>
        
    );
};
const SearchFilters = () => {
    return (
        <>
            <SearchFilter title = "エリアから長期インターンシップ募集を探す"/>
            <SearchFilter title ="職種から長期インターンシップ募集を探す"/>
            <SearchFilter title = "業種から長期インターンシップ募集を探す"/>
            <SearchFilter title = "こだわり条件から長期インターンシップ募集を探す"/>
        </>
    );
}

export default SearchFilters;