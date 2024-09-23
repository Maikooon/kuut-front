import React from "react";
import "./../../assets/styles/faq.css";

const FaqLOGO = ({text,color}) => {
    return (
        <div style={{ backgroundColor:color }} className = "FAQ-logo">
            <p>{text}</p>
        </div>
    );
} 

const FAQ = ({question, answer,link,linkText, hasBorder}) => {
    return (
        <div 
            class = "faq-block"
            style={{ borderBottom: hasBorder ? "1.2px solid #ffffff" : "none",
        }}>
            <div class = "question">
                <FaqLOGO text = "Q" color = "#333333"/>
                <p>{question}</p>
            </div>
            <div class = "answer">
                <FaqLOGO text = "A" color = "#283A70"/> 
                <p>{answer}</p>
            </div>
            <a href = {link}>{linkText}</a>
        </div>
    )
}

export default FAQ;
//A;なんで個パイロットが動かない音です
//B;個パイロットが動かない音です
