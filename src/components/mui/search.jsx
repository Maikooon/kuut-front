import React, { useState } from 'react';
import './../../assets/styles/search.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        console.log("検索クエリ:", searchValue);
        // 検索クエリを使って何かをする処理を追加
    };

    return (
        <div class="search-container">
            <p>キーワードで探す</p>
            <TextField
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                placeholder="Search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
            <p>キーワードで探す</p>
            <p>選択ボックス</p>
            <p>検索するボタン</p>
        </div>
    );
}

export default Search;
