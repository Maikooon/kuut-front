import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import './../assets/styles/test.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from '../components/layout/header';
import "./../assets/styles/form/FormBox.css";
import "./../assets/styles/form/Form.css"
import CustomButton from "../components/mui/CustomButton";


function idBeing() {
  return (
    <div>
      <h1>お問い合わせフォーム</h1>
      <Form />
    </div>
  )
  
}

//formの個別の処理
function FormDetail({label, type, value, onChange, placeholder, required}) {
  return (
    <div class = 'form-detail'>
      <label htmlFor={label}>{label}</label>
      <div class = "mustBox">
        {required && <span class = "must">必須</span>}
      </div>
      <input
        type={type}
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

//確認画面のコンポーネント
function Confirm ({name,email,sex,address,phone,collage,major,submajor,graduation}) {
  const [isConfirmed, setIsConfirmed] = useState(false); // 確認画面表示用の状態
  const [showForm, setShowForm] = useState(true); // フォーム表示用の状態
  // 送信処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // デフォルトのフォーム送信を防ぐ

    const submitParams = new FormData();
    submitParams.append("entry.364926296", name);
    submitParams.append("entry.1330492735", email);
    submitParams.append("entry.1296597994", sex);
    submitParams.append("entry.1902996541", address);
    submitParams.append("entry.1437423053", phone);
    submitParams.append("entry.500636183", collage);
    submitParams.append("entry.1872279197", major);
    submitParams.append("entry.1842775767", submajor);
    submitParams.append("entry.38483767", graduation);

    // CORSエラー対策
    const FORM_URL = "http://localhost:3010/contact";

    try {
        const response = await axios.post(FORM_URL, submitParams);
        console.log("送信成功:", response.data);
        setShowForm(false); // 送信完了画面の表示
    } catch (error) {
        console.error("フォーム送信エラー:", error);
    }
};
  return (
      <div className="confirm">
          <h2>確認画面</h2>
          <p><strong>名前:</strong> {name}</p>
          <p><strong>メール:</strong> {email}</p>
          <p><strong>性別:</strong> {sex}</p>
          <p><strong>住所:</strong> {address}</p>
          <p><strong>電話番号:</strong> {phone}</p>
          <p><strong>大学名:</strong> {collage}</p>
          <p><strong>専攻:</strong> {major}</p>
          <p><strong>副専攻:</strong> {submajor}</p>
          <p><strong>卒業年度:</strong> {graduation}</p>
          {/* ここをSbubmitになるように書き換える */}
          <button onClick={handleSubmit}>送信</button>
          <button onClick={() => setIsConfirmed(false)}>戻る</button>
      </div>
  )
}




// フォームコンポーネント
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [sex, setSex] = useState('');
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [collage, setCollage] = useState("");
    const [major, setMajor] = useState("");
    const [submajor, setSubmajor] = useState("");
    const [graduation, setGraduation] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [isConfirmed, setIsConfirmed] = useState(false); // 確認画面表示用の状態


    // すべてのフィールドが入力されているかをチェック
    const isFormComplete = () => {
      return (
          name.trim() !== "" &&
          email.trim() !== "" &&
          sex.trim() !== "" &&
          address.trim() !== "" &&
          phone.trim() !== "" &&
          collage.trim() !== "" &&
          major.trim() !== "" &&
          submajor.trim() !== "" &&
          graduation.trim() !== ""
      );
  };
    // 確認画面への切り替え関数
    const handleConfirm = () => {
      if (isFormComplete()) {
        setIsConfirmed(true)
      }else {
        alert("全ての項目を入力してください");
      }
    };

    // 送信処理
    const handleSubmit = async (e) => {
        e.preventDefault(); // デフォルトのフォーム送信を防ぐ

        const submitParams = new FormData();
        submitParams.append("entry.364926296", name);
        submitParams.append("entry.1330492735", email);
        submitParams.append("entry.1296597994", sex);
        submitParams.append("entry.1902996541", address);
        submitParams.append("entry.1437423053", phone);
        submitParams.append("entry.500636183", collage);
        submitParams.append("entry.1872279197", major);
        submitParams.append("entry.1842775767", submajor);
        submitParams.append("entry.38483767", graduation);

        // CORSエラー対策
        const FORM_URL = "http://localhost:3010/contact";

        try {
            const response = await axios.post(FORM_URL, submitParams);
            console.log("送信成功:", response.data);
            setShowForm(false); // 送信完了画面の表示
        } catch (error) {
            console.error("フォーム送信エラー:", error);
        }
    };

    return (
        <div className="webForm">
            {showForm ? (
                !isConfirmed ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form">
                            <FormDetail label="name" type="text" value={name} onChange={setName} placeholder="お気軽にお問い合わせください。" required />
                            <FormDetail label="email" type="email" value={email} onChange={setEmail} placeholder="お気軽にお問い合わせください。" required />
                            
                            <label htmlFor="sex">性別</label>
                            <div>
                                <input
                                    type="radio"
                                    id="male"
                                    name="sex"
                                    value="male"
                                    checked={sex === "male"}
                                    onChange={(e) => setSex(e.target.value)}
                                />
                                <label htmlFor="male">男性</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="sex"
                                    value="female"
                                    checked={sex === "female"}
                                    onChange={(e) => setSex(e.target.value)}
                                />
                                <label htmlFor="female">女性</label>
                                <input
                                    type="radio"
                                    id="other"
                                    name="sex"
                                    value="other"
                                    checked={sex === "other"}
                                    onChange={(e) => setSex(e.target.value)}
                                />
                                <label htmlFor="other">その他</label>
                            </div>
                            
                            <FormDetail label="address" type="text" value={address} onChange={setAddress} placeholder="住所を入力してください" required />
                            <FormDetail label="phone" type="text" value={phone} onChange={setPhone} placeholder="090-1234-5678" required />
                            <FormDetail label="collage" type="text" value={collage} onChange={setCollage} placeholder="大学名を入力してください" required />
                            <FormDetail label="major" type="text" value={major} onChange={setMajor} placeholder="専攻を入力してください" required />
                            <FormDetail label="submajor" type="text" value={submajor} onChange={setSubmajor} placeholder="副専攻を入力してください" required />
                            
                            <label htmlFor="graduation">卒業年度</label>
                            <div>
                                <input
                                    type="radio"
                                    id="graduation-2024"
                                    name="graduation"
                                    value="2024"
                                    checked={graduation === "2024"}
                                    onChange={(e) => setGraduation(e.target.value)}
                                />
                                <label htmlFor="graduation-2024">2024</label>
                                <input
                                    type="radio"
                                    id="graduation-2025"
                                    name="graduation"
                                    value="2025"
                                    checked={graduation === "2025"}
                                    onChange={(e) => setGraduation(e.target.value)}
                                />
                                <label htmlFor="graduation-2025">2025</label>
                                <input
                                    type="radio"
                                    id="graduation-2026"
                                    name="graduation"
                                    value="2026"
                                    checked={graduation === "2026"}
                                    onChange={(e) => setGraduation(e.target.value)}
                                />
                                <label htmlFor="graduation-2026">2026</label>
                                <input
                                    type="radio"
                                    id="graduation-2027"
                                    name="graduation"
                                    value="2027"
                                    checked={graduation === "2027"}
                                    onChange={(e) => setGraduation(e.target.value)}
                                />
                                <label htmlFor="graduation-2027">2027</label>
                            </div>
                        </div>

                        <button type="button" onClick={handleConfirm}>確認画面へ</button>
                    </form>
                ) : (
                  <div className="confirm">
                  <h2>確認画面</h2>
                  <p><strong>名前:</strong> {name}</p>
                  <p><strong>メール:</strong> {email}</p>
                  <p><strong>性別:</strong> {sex}</p>
                  <p><strong>住所:</strong> {address}</p>
                  <p><strong>電話番号:</strong> {phone}</p>
                  <p><strong>大学名:</strong> {collage}</p>
                  <p><strong>専攻:</strong> {major}</p>
                  <p><strong>副専攻:</strong> {submajor}</p>
                  <p><strong>卒業年度:</strong> {graduation}</p>
                  {/* ここをSbubmitになるように書き換える */}
                  <button onClick={handleSubmit}>送信</button>
                  <button onClick={() => setIsConfirmed(false)}>戻る</button>
              </div>
                )
            ) : (
                <p>送信が完了しました。ありがとうございます！</p>
            )}
        </div>
    );
};




const ContactForm = () => {
  const confirmForm = () => {
  }
    return (
      <html>
      <header>
        <Header />
      </header>
      <body>
        <div>
        <h1>Fここに遷移の丸をかく</h1>
        <isBeing />
        
        <div class = "FormBox">
          <CustomButton text="会員の方はこちらへ" onClick={confirmForm} />
          <Form />
        </div>
        </div>  
      </body>
    </html>
    );
}

export default ContactForm;