import React, { useState, useEffect } from 'react';
import '../styles/Introduction.css';
import profileImage1 from '../assets/mepic1.jpeg'; 
import profileImage2 from '../assets/mepic2.jpeg';
import profileImage3 from '../assets/mepic3.jpeg';
import profileImage4 from '../assets/mepic4.jpeg';

const Introduction = () => {
  // スライドショーの状態を管理
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // 画像の配列
  const images = [profileImage1, profileImage2, profileImage3, profileImage4];
  
  // タイピングアニメーション用のテキスト
  const typingTexts = [
    "中央大学大学院 修士２年",
    "外資系コンサル内定者",
    "プログラマー",
    "研究者"
  ];

  // コンポーネントマウント時のフェードイン
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // スライドショーの自動切り替え
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, [images.length]);

  // タイピングアニメーション
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, [typingTexts.length]);

  return (
    <div className={`intro ${isVisible ? 'visible' : ''}`}>
      {/* 背景エフェクト */}
      <div className="intro-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="intro-container">
        {/* メインコンテンツ */}
        <div className="intro-content-wrapper">
          {/* 左側：テキストコンテンツ */}
          <div className="intro-text">
            <div className="greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="name-title">
              鴨田遥平
              <span className="name-subtitle">Yohei Kamoda</span>
            </h1>
            
            <div className="typing-container">
              <span className="typing-prefix">I am a </span>
              <span className="typing-text" key={textIndex}>
                {typingTexts[textIndex]}
              </span>
              <span className="cursor">|</span>
            </div>

            <div className="intro-description">
              <p>
                北海道札幌市出身。趣味はバスケ、スキー、野球観戦です！<br />
                <a href="https://glomacjunnakamuralaboratory.on.drv.tw/www.junnlab.com/" target="_blank" rel="noopener noreferrer">中村潤研究室</a>、
                <a href="https://venture-code-chuo.github.io/homepage/" target="_blank" rel="noopener noreferrer">文系のためのプログラミングサークルV.Code</a>で3期代表を務めました。
              </p>
              <p className="highlight-text">
                学部をGPA3.92（239人中2位）で飛び級卒業し、現在は中央大学大学院 経済学研究科に所属しています。
              </p>
            </div>

            <div className="intro-stats">
              <div className="stat-item">
                <div className="stat-number">3.92</div>
                <div className="stat-label">GPA</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2nd</div>
                <div className="stat-label">Class Rank</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1.5</div>
                <div className="stat-label">Years Coding</div>
              </div>
            </div>

            {/* <div className="intro-actions">
              <button className="cta-button primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              <button className="cta-button secondary">
                <span>Download CV</span>
                <i className="fas fa-download"></i>
              </button>
            </div> */}
          </div>

          {/* 右側：画像エリア */}
          <div className="intro-image">
            <div className="image-container">
              <div className="image-frame">
                {images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`Profile ${index + 1}`} 
                    className={`profile-image ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
                
                {/* 画像装飾 */}
                <div className="image-decoration decoration-1"></div>
                <div className="image-decoration decoration-2"></div>
              </div>
              
              {/* ドットインジケーター */}
              <div className="image-dots">
                {images.map((_, index) => (
                  <button 
                    key={index} 
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;