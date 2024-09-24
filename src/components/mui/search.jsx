import React, { useState } from 'react';
import './../../assets/styles/search.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


//searchに関する文字たち
const SearchTitle = ({title}) =>{
    return(
        <div class="search-title">
            <p>{title}</p>
        </div>
    );
}

function BasicButton() {
    return (
        <Button 
            variant="contained" 
            sx={{ 
                width : "90%",
                backgroundColor: '#283A70',  // 背景色
                fontSize: '18px',            // 文字の大きさ
                fontFamily: 'Yumincho',  // フォント    
                color: '#ffffff',              // 文字色
                '&:hover': {
                    backgroundColor: '#283A70',  // ホバー時の色
                },
            }}
        >
            検索する
        </Button>
    );
}

//選択ボックスコンポーネント
const  SelectSmall = ({title,selections}) => {
        const [age, setAge] = React.useState('');
    
        const handleChange = (event) => {
        setAge(event.target.value);
        };
        return (
        <div class = "select-set">
            <p>{title}</p>
            <FormControl sx={{ min: 1, minWidth: '80%' }} size="small">
                <InputLabel id="demo-select-small-label">-</InputLabel>
                <Select
                // labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {selections.map((selection, index) => (
                    <MenuItem key={index} value={selection.value}>
                        {selection.label}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
        
    );
}




const Search = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        console.log("検索クエリ:", searchValue);
        // 検索クエリを使って何かをする処理を追加
    };
    const selections = [
        { value: 10, label: 'エンジニア' },
        { value: 20, label: 'デザイナー' },
        { value: 30, label: 'マネージャー' },
    ];

    return (
        <div class="search-container">
            {/* 上のブロック */}
            <div class="search-input">
                <SearchTitle title= "キーワードで探す" />
                <div class =  "input-container">
                    <TextField
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        // ここのフォントも変えたい
                        placeholder="キーワードで検索"   
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
                                </InputAdornment>
                            ),
                        }}
                        margin="none"
                        fullWidth 
                        sx={{ height: '100%' }}  // 高さをパーセンテージで指定
                    />
                </div>
            </div>
            {/* 下のブウn */}
            <div class="search-select">
                <SelectSmall title = '業種'  selections = {selections}/>
                <SelectSmall title = '業界'  selections = {selections}/>
                <SelectSmall title = '時給'  selections = {selections}/>
                <SelectSmall title = '場所'  selections = {selections}/>
            </div>
            <BasicButton />
        </div>
    );
}

export default Search;
