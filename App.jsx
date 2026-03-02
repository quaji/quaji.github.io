// App.jsx
import React from 'react';
import './style.css'; // 元の全称セレクタ(* { background-color: #ffff00; })をそのまま適用する

function App() {
  return (
    <main style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '20svh' }}>
      <h1 style={{ textAlign: 'center', color: 'red' }}>只今改装中</h1>
      <img 
        id="now_status" 
        src="/media/job_kouji_ojigi.png" 
        alt="現在改装中。しばらくお待ちください。"   
        style={{ width: '60vw', marginLeft: 'auto', marginRight: 'auto' }} 
      />
      <p style={{ textAlign: 'center' }}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSety6tacmGNk_qCOJ4qnDdkoa3TkB0rKTD-xWXGcKBfWYHIGA/viewform?usp=dialog">
          連絡はこちらまで。
        </a>
      </p>
    </main>
  );
}

export default App;