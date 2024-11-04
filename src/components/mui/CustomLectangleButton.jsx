import React from "react";
import "./../../assets/styles/button/customLectangleButton.css";

const CustomLectangleButton = ({ text, onClick, width}) => {
    return (
      <button class="lectangle-styled-button" onClick={onClick} style={{ width: width }}>
        {text}
      </button>
    );
  };
  

export default CustomLectangleButton;


//TODO'カスタムボタンがうまくいかない