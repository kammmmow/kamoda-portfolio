import React from 'react';
import '../styles/Introduction.css';
import profileImage from '../assets/mepic2.jpeg'; // 画像のパスを調整してください

const Introduction = () => {
  return (
    <div className="intro">
      <div className="intro-title">
        <h2>中央大学大学院 修士２年の鴨田遥平です！</h2>
      </div>
      <div className="intro-image">
        <img src={profileImage} alt="自分の写真" id="mypic" />
      </div>
      <div className="intro-content">
        <p>
          北海道札幌市出身。趣味はバスケ、スキー、野球観戦です！<br />
          <a href="https://glomacjunnakamuralaboratory.on.drv.tw/www.junnlab.com/" target="_blank" rel="noopener noreferrer">中村潤研究室</a>、
          <a href="https://venture-code-chuo.github.io/homepage/" target="_blank" rel="noopener noreferrer">文系のためのプログラミングサークルV.Code</a>で3期代表を務めました。
          学部をGPA3.92（239人中2位）で飛び級卒業し、現在は中央大学大学院 経済学研究科に所属しています。<br />
        </p>
      </div>
    </div>
  );
};

export default Introduction;