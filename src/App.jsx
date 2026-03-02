// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfolio from './Portfolio';
import './App.css';

// 元のトップページ
function Home() {
  return (
    <main style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#ffff00'}}>
      <h1 style={{ textAlign: 'center', color: 'red' }}>只今改装中</h1>
      <img 
        id="now_status" 
        src="/media/job_kouji_ojigi.png" 
        alt="現在改装中。しばらくお待ちください。"   
        style={{ width: '50%', margin: '0 auto 2rem', animation: 'bounce 2s infinite' , animationTimingFunction: 'ease-in-out' , animationDirection: 'alternate' , animationFillMode: 'both'}} 
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
  );
}

// ルーティング設定
function App() {
  return (
    // GitHub Pagesでのデプロイを安定させるため、BrowserRouterではなくHashRouterを使用します
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;