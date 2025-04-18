// src/components/Certifications.js
import React, { useState } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const certificationsData = {
    highschool: [
      '全商 情報処理検定ビジネス情報部門１級',
      '全商 商業経済検定試験１級',
      '全商 英語検定試験１級',
      '全経 簿記能力検定試験３級',
      '文章読解・作成能力検定 準二級',
      'IPA主催 ITパスポート試験'
    ],
    university: [
      '個人情報管理士（特定）',
      'IPA主催 基本情報技術者試験',
      'IPA主催 情報セキュリティマネジメント試験',
      '３級ファイナンシャル・プランニング技能士',
      '２級ファイナンシャル・プランニング技能士（一部合格）',
      '文部科学省後援 ビジネス実務マナー検定２級'
    ]
  };

  // すべての資格を格納
  const allCertifications = [
    ...certificationsData.highschool.map(cert => ({ text: cert, category: 'highschool' })),
    ...certificationsData.university.map(cert => ({ text: cert, category: 'university' }))
  ];

  // 表示する資格をフィルタリング
  const filteredCertifications = 
    activeCategory === 'all' 
      ? allCertifications
      : allCertifications.filter(cert => cert.category === activeCategory);

  // カテゴリーボタンのデータ
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'highschool', name: '高校' },
    { id: 'university', name: '大学' }
  ];

  return (
    <div className="certifications">
      <h2 className="certifications-title">資格</h2>
      <div className="certifications-card">
        {/* カテゴリフィルター */}
        <div className="certifications-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 資格リスト */}
        <div className="certifications-list">
          {filteredCertifications.map((cert, index) => (
            <div key={index} className={`certification-item ${cert.category}`}>
              <div className="certification-badge">
                {cert.category === 'highschool' ? '高校' : '大学'}
              </div>
              <div className="certification-text">{cert.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;