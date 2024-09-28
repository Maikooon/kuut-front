import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

/*
検索キーワードの状態
検索キーワードを更新する関数を持つ関数
*/

function CustomizedInputBase({ onSearch}) {
    const [searchValue, setSearchValue] = useState(''); // 検索キーワードの状態
    const handleSearch = async (e) => {
        e.preventDefault(); // フォームのデフォルトの挙動を防ぐ
        onSearch(searchValue); // 親コンポーネントに検索キーワードを渡す
    };
    return (
        <div className="input-container">
            <Paper
                component="form"
                sx={{ 
                    p: 0, 
                    display: 'flex', 
                    alignItems: 'center', 
                    minWidth: '90%', 
                    backgroundColor: '#ffffff', 
                    borderRadius: '4px'  
                }}
                size="small"
                onSubmit={handleSearch}
            >
                <InputBase
                    sx={{ 
                        ml: 1, 
                        flex: 1, 
                        padding: '0px', 
                        paddingLeft: '10px', 
                        paddingTop: '5px', 
                        paddingBottom: '2px', 
                    }}
                    placeholder="キーワードで検索"
                    inputProps={{ 'aria-label': 'キーワードで検索' }}
                    value={searchValue} // 検索キーワードの状態を反映
                    onChange={(e) => setSearchValue(e.target.value)} // 入力を更新
                />
                <IconButton 
                    type="submit" 
                    sx={{ 
                        p: 0, 
                        backgroundColor: '#283A70', 
                        color: 'white', 
                        width: '40px', 
                        height: '40px', 
                        borderTopRightRadius: '4px', 
                        borderBottomRightRadius: '4px', 
                        borderTopLeftRadius: '0.1px', 
                        borderBottomLeftRadius: '0.1px', 
                        '&:hover': {
                            backgroundColor: '#303f9f', 
                        },
                    }} 
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    );
}



const Test = () => {
    const [companies, setCompanies] = useState([]); //撮ってきた情報の格納先
    const [filteredCompanies, setFilteredCompanies] = useState([]); // 検索結果の状態

    // 会社情報を取得する関数
    const fetchCompanies = async () => {
        try {
            const res = await axios.get("http://localhost:3010/companies");
            setCompanies(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCompanies(); // コンポーネントがマウントされたときにデータを取得
    }, []);

    //実際に検索を行う関数
    const handleSearch = async (searchKeyword) => {
        if (!searchKeyword) {
            console.log("No keyword provided");
            // setFilteredCompanies(companies);  // If no keyword, show all companies
            return;
        }
        try {
            const res = await axios.get(`http://localhost:3010/companies?name=${searchKeyword}`);
            //サーバー側で定義した関数で検索を行い、その結果を取得する
            setFilteredCompanies(res.data);  // Update the filtered companies list
            console.log(res.data);  
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div>
            <h1>Test</h1>
            {/* 検索コンポーネントにより、検索する関数のみ異なる */}
            <CustomizedInputBase onSearch={handleSearch} />
            {/* 関数が実行されてAPIサーバが撮ってきたデータを表示 */}
            <ul>
                {filteredCompanies.length > 0 ? (
                    filteredCompanies.map((company) => (
                        <li key={company.id}>{company.name}</li> // IDを使ってリストを生成
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </ul>
        </div>
    );
}

export default Test;
