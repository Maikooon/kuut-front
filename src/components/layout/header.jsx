import React from 'react';
import './../../assets/styles/header.css';
import LogoPanel from '../mui/logoPanel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';



const Nav = () => {
    return (
        <>
            <div class="nav-container">
                <p>長期インターンを検索する</p>
                <p>東大生に相談する</p>
                <p>イベント・セミナーに参加する</p>
                <p>記事と体験談からインターンやキャリアを学ぶ</p>
            </div>
        </>
    );
}

const UserActions = () => {
    return (
        <div class = "user-actions">
            <Stack direction="row" spacing={'1em'} >
                <Button variant="outlined" startIcon={<ArrowForwardIosIcon />} sx={{ color: "#fff", borderColor: '#fff', fontSize:'0.4em'}} >
                    企業様はこちらから
                </Button>
                <Button color="#fff"  startIcon={<PersonIcon />} sx={{ color: "#fff",outlineColor:'#fff',fontSize:'0.4em'}} >新規登録</Button>
                <Button color="secondary"  startIcon={<LoginIcon />} sx={{ color: "#fff",outlineColor:'#fff',fontSize:'0.4em'}} >ログイン</Button>
            </Stack>
        </div>
    );
};


const Header = () => {
    return (
        <>
            <div class = 'header-container'>    
                <div class = 'header-logo'>
                    <LogoPanel />
                </div>
                <div class = 'header-actions'>
                    <UserActions />
                </div>
            </div>
            <Nav />
        </>
    );
}



export default Header;