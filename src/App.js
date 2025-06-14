// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Strengths from './components/Strengths';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Modal from './components/Modal';
import backgroundImage from './assets/Background.jpg';

function App() {
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ページロード時に自己紹介モーダルを表示
  useEffect(() => {
    // Cookieチェックの代わりにローカルストレージを使用
    const hasVisited = localStorage.getItem('hasVisited');
    document.documentElement.style.setProperty('--background-image', `url(${backgroundImage})`);
    
    if (!hasVisited) {
      // 初回訪問の場合は少し遅延させてモーダルを表示
      const timer = setTimeout(() => {
        setIntroModalOpen(true);
        localStorage.setItem('hasVisited', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    setLoading(false);
  }, []);

  // ローディングアニメーションが完了したらローディング状態を解除
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleOpenIntroModal = () => {
    setIntroModalOpen(true);
  };

  const handleCloseIntroModal = () => {
    setIntroModalOpen(false);
  };

  return (
    <div className="App">
      {loading ? (
        <div className="loading-screen">
          <div className="loader"></div>
          <p>鴨田のポートフォリオへようこそ！</p>
        </div>
      ) : (
        <>
          <Header openModal={handleOpenIntroModal} />
          
          <div className="content-body">
            <Modal 
              isOpen={introModalOpen} 
              onClose={handleCloseIntroModal}
              title="鴨田遥平の自己紹介ホームページです！"
            >
              <p>
                学業と両立しながらプログラミング歴約1年半！<br />
                技術は乏しいながらもアピールページを作成したのでぜひご覧ください！<br />
                <strong>※PCとスマートフォンどちらからでもご覧いただけます。</strong>
              </p>
            </Modal>
            
            {/* ホームセクション */}
            <section id="home-section">
              <Introduction />
            </section>
            
            <hr className="section-divider" />
            
            {/* <section id="strengths-section">
              <Strengths />
            </section>
            
            <hr className="section-divider" /> */}
            
            {/* 研究内容セクション */}
            <section id="research-section">
              <Research />
            </section>
            
            <hr className="section-divider" />
            
            {/* 実績・活動セクション */}
            <section id="achievements-section">
              <Achievements />
            </section>
            
            <hr className="section-divider" />
            
            {/* 学歴セクション */}
            <section id="education-section">
              <Education />
            </section>
            
            <hr className="section-divider" />
            
            {/* 資格セクション */}
            <section id="certifications-section">
              <Certifications />
            </section>
          </div>
          
          {/* お問い合わせセクション */}
          <section id="contact-section">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
}

export default App;