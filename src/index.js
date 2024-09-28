import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// ルートを作成
const root = ReactDOM.createRoot(document.getElementById('root'));

// アプリケーションをレンダリング
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// パフォーマンス測定のための関数を設定
reportWebVitals();
