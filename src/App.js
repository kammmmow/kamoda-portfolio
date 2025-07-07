// src/App.js - パフォーマンスモード対応版
import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PerformanceToggle from './components/PerformanceToggle';
import backgroundImage from './assets/Background.jpg';

// パフォーマンス設定用のContext
export const PerformanceContext = createContext({
  reducedMotion: false,
  setReducedMotion: () => {}
});

// パフォーマンス検出関数
const detectLowPerformance = () => {
  // ハードウェア情報による検出
  const hardwareConcurrency = navigator.hardwareConcurrency || 2;
  const deviceMemory = navigator.deviceMemory || 2;
  
  // User Agent による検出（古いブラウザや低スペック端末）
  const userAgent = navigator.userAgent.toLowerCase();
  const isOldBrowser = /chrome\/[1-6][0-9]/.test(userAgent) || 
                     /firefox\/[1-6][0-9]/.test(userAgent) ||
                     /safari\/[1-9][0-9][0-9]/.test(userAgent);
  
  // バッテリー情報（可能な場合）
  const lowBattery = navigator.getBattery ? 
    navigator.getBattery().then(battery => battery.level < 0.2) : 
    Promise.resolve(false);
  
  // パフォーマンス判定
  const isLowPerformance = 
    hardwareConcurrency < 4 || 
    deviceMemory < 4 || 
    isOldBrowser ||
    // prefers-reduced-motionの設定
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return isLowPerformance;
};

function App() {
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  // パフォーマンス設定の初期化
  useEffect(() => {
    // 保存された設定をチェック
    const savedPreference = localStorage.getItem('performance-mode');
    
    if (savedPreference !== null) {
      // ユーザーが明示的に設定した場合
      setReducedMotion(savedPreference === 'reduced');
    } else {
      // 自動検出
      const isLowPerformance = detectLowPerformance();
      setReducedMotion(isLowPerformance);
      
      // 初回検出結果を保存（ユーザーが変更するまで）
      localStorage.setItem('performance-mode', isLowPerformance ? 'reduced' : 'normal');
    }
  }, []);
  
  // パフォーマンスモードが変更されたときの処理
  useEffect(() => {
    const rootElement = document.documentElement;
    
    if (reducedMotion) {
      rootElement.classList.add('reduced-motion');
      rootElement.classList.add('performance-mode');
    } else {
      rootElement.classList.remove('reduced-motion');
      rootElement.classList.remove('performance-mode');
    }
    
    // 設定を保存
    localStorage.setItem('performance-mode', reducedMotion ? 'reduced' : 'normal');
  }, [reducedMotion]);

  // ページロード時の処理
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    document.documentElement.style.setProperty('--background-image', `url(${backgroundImage})`);
    
    // パフォーマンスモードの場合はローディング時間を短縮
    const loadingTime = reducedMotion ? 1000 : 2000;
    const modalDelay = reducedMotion ? 500 : 1000;
    
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIntroModalOpen(true);
        localStorage.setItem('hasVisited', 'true');
      }, modalDelay);
      
      return () => clearTimeout(timer);
    }
    
    setLoading(false);
  }, [reducedMotion]);

  // ローディング完了処理
  useEffect(() => {
    const loadingTime = reducedMotion ? 1000 : 2000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime);
    
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  const handleOpenIntroModal = () => {
    setIntroModalOpen(true);
  };

  const handleCloseIntroModal = () => {
    setIntroModalOpen(false);
  };

  const performanceContextValue = {
    reducedMotion,
    setReducedMotion
  };

  return (
    <PerformanceContext.Provider value={performanceContextValue}>
      <div className={`App ${reducedMotion ? 'performance-mode' : ''}`}>
        {loading ? (
          <div className="loading-screen">
            <div className="loader"></div>
            <p>鴨田のポートフォリオへようこそ！</p>
          </div>
        ) : (
          <>
            <Header openModal={handleOpenIntroModal} />
            
            {/* パフォーマンス切り替えトグル */}
            <PerformanceToggle />
            
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
                  {reducedMotion && (
                    <>
                      <br /><br />
                      <small style={{ color: '#666' }}>
                        💡 パフォーマンス向上のため、アニメーション控えめモードが有効です
                      </small>
                    </>
                  )}
                </p>
              </Modal>
              
              {/* ホームセクション */}
              <section id="home-section">
                <Introduction />
              </section>

              <hr className="section-divider" />
              
              {/* 学歴セクション */}
              <section id="education-section">
                <Education />
              </section>
              
              <hr className="section-divider" />
              
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
    </PerformanceContext.Provider>
  );
}

export default App;