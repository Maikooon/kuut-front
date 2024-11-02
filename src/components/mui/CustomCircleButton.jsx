// ここでよく使用するボタンを定義する

import React from "react";
import "./../../assets/styles/button/customCircleButton.css";

const CustomCircleButton = ({ text, onClick }) => {
    return (
      <button className="styled-button" onClick={onClick}>
        {text}
      </button>
    );
  };
  

export default CustomCircleButton;