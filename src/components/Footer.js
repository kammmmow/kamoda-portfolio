// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-section">
          <h3>お問い合わせ</h3>
          <p>
            大学メール：<a href="mailto:a21.chgr@g.chuo-u.ac.jp">a21.chgr@g.chuo-u.ac.jp</a>（2026/3/31まで）<br />
            個人メール：<a href="mailto:kamoda.yohei@gmail.com">kamoda.yohei@gmail.com</a>
          </p>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/kammmmow" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/KamodaYohei" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        
        <div className="footer-bottom">
          <p className="update-info">更新：2025年4月</p>
          <p className="copyright">© {currentYear} 鴨田遥平 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;