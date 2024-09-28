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

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';



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


function CustomizedInputBase() {
    return (
        <div className="input-container">
            <Paper
                component="form"
                sx={{ 
                    p: 0, // Paper自体のpaddingをゼロに
                    display: 'flex', 
                    alignItems: 'center', 
                    minWidth: '90%', 
                    backgroundColor: '#ffffff', // 必要に応じて背景色を調整
                    borderRadius: '4px'  // 角を少し丸める
                }}
                size="small"
            >
                <InputBase
                    sx={{ 
                        ml: 1, 
                        flex: 1, 
                        padding: '0px',  // 必要に応じてpaddingを調整
                        paddingLeft: '10px', // 左側のpaddingを調整
                        paddingTop: '5px', // 上側のpaddingを調整
                        paddingBottom: '2px', // 下側のpaddingを調整
                    }}
                    placeholder="キーワードで検索"
                    inputProps={{ 'aria-label': 'キーワードで検索' }}
                />
                <IconButton 
                    type="submit" 
                    sx={{ 
                        p: 0, // アイコンボタンのpaddingをゼロに
                        backgroundColor: '#283A70', 
                        color: 'white', 
                        width: '40px', // ボタンの幅を固定
                        height: '40px', // ボタンの高さを固定
                        borderTopRightRadius: '4px', // 右上の角を丸める
                        borderBottomRightRadius: '4px', // 右下の角を丸める
                        borderTopLeftRadius: '0.1px', // 右上の角を丸める
                        borderBottomLeftRadius: '0.1px', // 右下の角を丸める
                        // borderRadius: '4px',
                        '&:hover': {
                            backgroundColor: '#303f9f', // ホバー時の色
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



//選択ボックスコンポーネント
const  SelectSmall = ({title,selections}) => {
        const [age, setAge] = React.useState('');
    
        const handleChange = (event) => {
        setAge(event.target.value);
        };
        return (
        <div class = "select-set">
            <p>{title}</p>
            <FormControl sx={{ min: 1, minWidth: '80%' ,background:"#ffffff"}} size="small">
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
                <CustomizedInputBase/>
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
