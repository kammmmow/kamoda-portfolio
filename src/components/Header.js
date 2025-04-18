import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logo2.png'; // ロゴ画像のパスを調整してください

const Header = ({ openModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header-box"></div>
      <header>
        <div className="logo">
          <a href="#info" onClick={openModal}>
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
          <li onClick={toggleMenu}>ホーム</li>
          <li onClick={toggleMenu}>活動報告</li>
          <li onClick={toggleMenu}>ポートフォリオ</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;