import React, { useState } from 'react';
import './../../assets/styles/search.css';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';



//searchに関する文字たち
const SearchTitle = ({title}) =>{
    return(
        <div className="search-title">
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


function CustomizedInputBase({onSearch}) {
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



//選択ボックスコンポーネント
const  SelectSmall = ({title,selections}) => {
        const [age, setAge] = React.useState('');
    
        const handleChange = (event) => {
        setAge(event.target.value);
        };
        return (
        <div className = "select-set">
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


function Search ({onSearch}) {
    const [searchValue, setSearchValue] = useState("");

    const selections = [
        { value: 10, label: 'エンジニア' },
        { value: 20, label: 'デザイナー' },
        { value: 30, label: 'マネージャー' },
    ];

    return (
        <div className="search-container">
            {/* 上のブロック */}
            <div className="search-input">
                <SearchTitle title= "キーワードで探す" />
                <CustomizedInputBase onSearch={onSearch}/>
            </div>
            {/* 下のブウn */}
            <div className="search-select">
                <SelectSmall title = '業種'  selections = {selections}/>
                <SelectSmall title = '業界'  selections = {selections}/>
                <SelectSmall title = '時給'  selections = {selections}/>
                <SelectSmall title = '場所'  selections = {selections}/>
            </div>
            <BasicButton />
        </div>
    );
}


// export default Search;
export default Search;
