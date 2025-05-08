import React, { useState, useEffect } from 'react';
import '../styles/Introduction.css';
import profileImage1 from '../assets/mepic1.jpeg'; 
import profileImage2 from '../assets/mepic2.jpeg';
import profileImage3 from '../assets/mepic3.jpeg';
import profileImage4 from '../assets/mepic4.jpeg';

const Introduction = () => {
  // スライドショーの状態を管理
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 画像の配列
  const images = [profileImage1, profileImage2, profileImage3, profileImage4];
  
  // スライドショーの自動切り替え
  useEffect(() => {
    // 4秒ごとに次の画像に切り替える
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    // コンポーネントがアンマウントされたときにインターバルをクリア
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="intro">
      <div className="intro-title">
        <h2>中央大学大学院 修士２年の鴨田遥平です！</h2>
      </div>
      <div className="intro-image">
        <div className="slideshow-container">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`自分の写真 ${index + 1}`} 
              className={`slideshow-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
          {/* ドットインジケーター */}
          <div className="slideshow-dots">
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="intro-content">
        <p>
          北海道札幌市出身。趣味はバスケ、スキー、野球観戦です！<br />
          <a href="https://glomacjunnakamuralaboratory.on.drv.tw/www.junnlab.com/" target="_blank" rel="noopener noreferrer">中村潤研究室</a>、
          <a href="https://venture-code-chuo.github.io/homepage/" target="_blank" rel="noopener noreferrer">文系のためのプログラミングサークルV.Code</a>で3期代表を務めました。
          学部をGPA3.92（239人中2位）で飛び級卒業し、現在は中央大学大学院 経済学研究科に所属しています。<br />
          外資系コンサル会社に就職予定です。
        </p>
      </div>
    </div>
  );
};

export default Introduction;