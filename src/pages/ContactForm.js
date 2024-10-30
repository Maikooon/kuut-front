import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import './../assets/styles/test.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from '../components/layout/header';
import "./../assets/styles/form/FormBox.css";
import "./../assets/styles/form/Form.css"
import CustomCircleButton from "../components/mui/CustomCircleButton";
import CustomLectangleButton from "../components/mui/CustomLectangleButton";
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ArrowBox = () => {
  return (
    <div class = "arrow-box">
      <KeyboardDoubleArrowRightIcon sx={{ fontSize: 30, margin:0, padding:0}} />
    </div>
  )
}

const ProgressBar = ({currentStatus}) => {
  return (
    <div class = "progress-bar">
      <div class ="progress-box">
        <CircleIcon
          sx={{
            fontSize: 50,
            color: currentStatus >= 1 ? '#2C5DB7' : '#D3D3D3', // 色を動的に設定
          }}
        />
        <p>応募情報入力</p>
      </div>
      <ArrowBox/>
      <div class ="progress-box">
        <CircleIcon
          sx={{
            fontSize: 50,
            color: currentStatus >= 2 ? '#2C5DB7' : '#D3D3D3', // 色を動的に設定
          }}
        />
        <p>応募内容確認</p>
      </div>
      <ArrowBox/>
      <div class ="progress-box">
        <CircleIcon
          sx={{
            fontSize: 50,
            color: currentStatus >= 3 ? '#2C5DB7' : '#D3D3D3', // 色を動的に設定
          }}
        />
        <p>応募完了</p>
      </div>
    </div>
  );
};

//formの個別の処理
function FormDetail({label, type, value, onChange, placeholder, required}) {
  return (
    <div class = 'form-detail'>
      <label htmlFor={label}>{label}</label>
      <div class = "mustBox-form">
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
    </div>
  )
}

const CompleteStep = ({step,title,text}) => {
  return (
    <div class = "complete-form-step">
      <h3>{step}</h3>
      <div class = "complete-form-explain">
        <p>{title}</p>
        <div class = "complete-form-explain-text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

const Complete=()=>{
  return (
    <div class = "complete-blank">
      　応募から採用までの流れ
      <div class  = "complete-form">
        <CompleteStep step= "step1" title="面接日調節" 
        text= "企業から連絡があります。
          メッセージボックスをこまめにチェックしましょう。
          企業から連絡が来た場合は、早めに返信しましょう。
          1週間経っても企業から連絡がない場合は、こちらまでご連絡ください。  
          
          Mail：
          TEL：03-4572-0605
          (ゼロワンインターン担当まで)"/>
        <CompleteStep step ="step2" title="面接" text= "面接日時の変更、キャンセル、遅刻の場合は企業に必ず事前に連絡しましょう。"/>
        <CompleteStep step="step3" title ="インターンシップ開始！" text = "初勤務日が決まったら、マイページより採用されたボタンと初勤務予定日を入力してください。"/>
      </div>
    </div>
  )
}

const ConfirmDetail= ({text,value}) => {
  return (
  <div class = "confirm-form-detail">
    <div class = "text-box" >
      <p>{text}</p>
    </div>
    <p>{value}</p>
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

    const currentStatus = showForm ? (!isConfirmed ? 1 : 2) : 3;

    return (
      <div class= 'all'>
        <ProgressBar currentStatus={currentStatus} />


        <div className="webForm">
            {showForm ? (
                !isConfirmed ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div class = "first">
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
                                    onChange={(e) => setGraduation(e.target.value) }
                                />
                                <label htmlFor="graduation-2027">2027</label>
                            </div>
                        </div>
                        <p>利用規約とプライバシーポリシーに同意の上ご応募ください</p>
                        <CustomCircleButton text="同意して確認画面へ" onClick={handleConfirm} style={{ width: '300px', height: '200px' }}/>
                        {/* <Complete/> */}
                        </div>
                    </form>
                ) : (
                <div className="confirm"> 
                  <h2>確認画面</h2>
                  <ConfirmDetail text = "名前" value={name}/>
                  <ConfirmDetail text = "メール" value={email}/>
                  <ConfirmDetail text="性別" value={sex}/>
                  <ConfirmDetail text="住所" value={address}/>
                  <ConfirmDetail text="電話番号" value={phone}/>
                  <ConfirmDetail text="大学名" value={collage}/>
                  <ConfirmDetail text="専攻" value={major}/>
                  <ConfirmDetail text="副専攻" value={submajor}/>
                  <ConfirmDetail text="卒業年度" value={graduation}/>

                  <CustomCircleButton text="戻る" onClick={() => setIsConfirmed(false)} />
                  <CustomCircleButton text="応募する" onClick={handleSubmit} />
              </div>
                )
            ) : (
              <div class="complete-message">
                <h2> <span style={{ color: "#FF5850" }}>ご応募ありがとうございました</span></h2>
                <h2>決まりやすい人は <span style={{ color: "#FF5850" }}>5件以上</span>応募しています</h2>
                <p>企業からのメッセージをお待ちください</p>
                <CustomLectangleButton text="会員の方はこちらへ" onClick={() => {}} />
                <Complete/>
              </div>
            )}
        </div>
      </div>
    );
};

const ContactForm = () => {
    return (
      <html>
      <header>
        <Header />
      </header>
      <body>
        <div class = "formBox">
          {/* <CustomCircleButton text="会員の方はこちらへ" onClick={confirmForm} /> */}
          <Form />
        </div>
      </body>
    </html>
    );
}

export default ContactForm;