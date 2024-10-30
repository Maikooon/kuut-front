// ここでよく使用するボタンを定義する

import React from "react";
import "./../../assets/styles/button/customLectangleButton.css";

const CustomLectangleButton = ({ text, onClick }) => {
    return (
      <button className="styled-button" onClick={onClick}>
        {text}
      </button>
    );
  };
  

export default CustomLectangleButton;