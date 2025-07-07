import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo2.png'; // ロゴ画像のパスを調整してください

const Header = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // スムーズスクロール関数
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // ヘッダーの高さを考慮してオフセットを設定
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // メニューを閉じる
    setMenuOpen(false);
  };

  // ホームセクションへのスクロール（または最上部）
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header-box"></div>
      <header>
        <div className="logo">
          <a href="#" onClick={(e) => { e.preventDefault(); openModal(); }}>
            <img src={logo} alt="ロゴの画像" id="logopic" />
          </a>
        </div>
        {/* ハンバーガーメニューボタン */}
        <div className="menu_container" onClick={toggleMenu}>
          <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}></span>
        </div>
      </header>
      {/* ハンバーガーメニュー */}
      <nav className={`hamburger_menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={scrollToTop}>
            <i className="fas fa-home"></i>
            ホーム
          </li>
          <li onClick={() => scrollToSection('education-section')}>
            <i className="fas fa-graduation-cap"></i>
            学歴
          </li>
          <li onClick={() => scrollToSection('research-section')}>
            <i className="fas fa-microscope"></i>
            研究内容
          </li>
          <li onClick={() => scrollToSection('achievements-section')}>
            <i className="fas fa-trophy"></i>
            実績・活動
          </li>
          <li onClick={() => scrollToSection('certifications-section')}>
            <i className="fas fa-certificate"></i>
            資格
          </li>
          <li onClick={() => scrollToSection('contact-section')}>
            <i className="fas fa-envelope"></i>
            お問い合わせ
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;