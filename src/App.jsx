// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import './style.css'; 
import './App.css';

// 元のトップページ
function Home() {
  return (
    /* Home用の背景を設定するラッパーdiv */
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#ffffff' }}>
      <main style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{ textAlign: 'center', color: 'red' }}>只今改装中</h1>
        <img 
          id="now_status" 
          src="/media/job_kouji_ojigi.png" 
          alt="現在改装中。しばらくお待ちください。"   
          style={{ width: '50%', maxWidth: '400px', margin: '0 auto 2rem', animation: 'bounce 2s infinite' , animationTimingFunction: 'ease-in-out' , animationDirection: 'alternate' , animationFillMode: 'both'}} 
        />
        <div style={{ display: 'flex', gap: '2rem' }} >
          <Link to="/portfolio" className="links" style={{ color: 'black', fontSize: '1.2rem' }}>
            ポートフォリオを見る
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSety6tacmGNk_qCOJ4qnDdkoa3TkB0rKTD-xWXGcKBfWYHIGA/viewform?usp=dialog" className="links" style={{ color: 'black', fontSize: '1.2rem' }}>
            連絡はこちらまで。
          </a>
        </div>
      </main>
    </div>
  );
}

// ルーティング設定
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;