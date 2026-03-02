// src/Portfolio.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const worksData = {
  programming: [
    { title: '成績照会ページ解析サイト', url: 'https://quaji.github.io/ForTCUCampusmates/', description: 'Webアプリケーション' },
    { title: 'impression,Raison', url: 'https://lemon-water-022469c10.6.azurestaticapps.net/', description: 'Webアプリケーション' },
    { title: '魚の遊泳の3Dシミュレーション', url: '#', description: 'Interactive Media課題・OpenGLを用いた3Dレンダリング' },
    { title: 'pygameによる2D物理シミュレーション', url: '#', description: 'Pythonを用いた円の衝突判定と物理演算' }
  ],
  photography: [
    { title: 'Film & Digital Photography', url: '#', description: '写真作品群' }
  ],
  music: [
    { title: 'Acoustic Guitar Covers', url: '#', description: 'Jazz / Celtic音楽のアコースティックギター演奏' }
  ],
  illustration: []
};

function Portfolio() {
  const renderSection = (title, items) => (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ borderBottom: '1px solid gray', paddingBottom: '0.5rem' }}>{title}</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '1rem' }}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue', fontSize: '1.2rem' }}>
                {item.title}
              </a>
              <p style={{ margin: '0.2rem 0', color: '#ccc' }}>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: 'gray' }}>NONE YET.</p>
      )}
    </div>
  );

  return (
    <div style={{ width: '80%', maxWidth: '800px', margin: '0 auto', paddingTop: '5svh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>WORKS</h1>
      
      {renderSection('PROGRAMMING', worksData.programming)}
      {renderSection('PHOTOGRAPHY', worksData.photography)}
      {renderSection('MUSIC', worksData.music)}
      {renderSection('ILLUSTRATION', worksData.illustration)}

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>ホームに戻る</Link>
      </div>
    </div>
  );
}

export default Portfolio;