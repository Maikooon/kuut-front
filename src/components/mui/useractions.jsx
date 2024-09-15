import React from "react";

const UserActions = () => {
    return (
        <div style={userActionsStyle}>
            <button style={buttonStyle}>会員登録はこちら</button>
            <button style={buttonStyle}>新規登録</button>
            <button style={buttonStyle}>ログイン</button>
            {/* <a href="#login" style={linkStyle}>ログイン</a> */}
        </div>
    );
};

const userActionsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
};

const buttonStyle = {
    backgroundColor: '#fff',
    color: '#333',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
};

export default UserActions;
