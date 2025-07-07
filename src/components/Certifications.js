// src/components/Certifications.js - 重複要素整理版
import React, { useState } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 資格データをアピール力順に並び替え
  const certificationsData = {
    university: [
      // 大学取得資格（アピール力順）
      {
        text: 'IPA主催 基本情報技術者試験',
        appeal: 'high',
        date: '2023年',
        description: '情報技術の基礎知識を証明する国家資格'
      },
      {
        text: 'IPA主催 情報セキュリティマネジメント試験',
        appeal: 'high',
        date: '2023年',
        description: '情報セキュリティ管理の専門知識を証明'
      },
      {
        text: '２級ファイナンシャル・プランニング技能士（一部合格）',
        appeal: 'medium',
        date: '2024年',
        description: '金融・税制・不動産等の専門知識'
      },
      {
        text: '３級ファイナンシャル・プランニング技能士',
        appeal: 'medium',
        date: '2023年',
        description: 'ファイナンシャルプランニングの基礎知識'
      },
      {
        text: '個人情報管理士（特定）',
        appeal: 'low',
        date: '2022年',
        description: '個人情報保護の基礎知識'
      },
      {
        text: '文部科学省後援 ビジネス実務マナー検定２級',
        appeal: 'low',
        date: '2024年',
        description: 'ビジネスマナーとコミュニケーション能力'
      }
    ],
    highschool: [
      // 高校取得資格（現在の順序を維持）
      {
        text: '全商 情報処理検定ビジネス情報部門１級',
        appeal: 'medium',
        date: '2020年',
        description: 'ビジネス情報処理の専門知識'
      },
      {
        text: '全商 商業経済検定試験１級',
        appeal: 'medium',
        date: '2020年',
        description: '商業・経済の基礎知識'
      },
      {
        text: '全商 英語検定試験１級',
        appeal: 'medium',
        date: '2020年',
        description: '商業英語の実践的スキル'
      },
      {
        text: '全経 簿記能力検定試験３級',
        appeal: 'low',
        date: '2019年',
        description: '簿記・会計の基礎知識'
      },
      {
        text: '文章読解・作成能力検定 準二級',
        appeal: 'low',
        date: '2020年',
        description: '文章理解・作成能力'
      },
      {
        text: 'IPA主催 ITパスポート試験',
        appeal: 'medium',
        date: '2020年',
        description: 'IT基礎知識の国家資格'
      }
    ]
  };

  // すべての資格を統一フォーマットで格納
  const allCertifications = [
    ...certificationsData.university.map(cert => ({ ...cert, category: 'university', period: '大学時代' })),
    ...certificationsData.highschool.map(cert => ({ ...cert, category: 'highschool', period: '高校時代' }))
  ];

  // 表示する資格をフィルタリング
  const filteredCertifications = 
    activeCategory === 'all' 
      ? allCertifications
      : allCertifications.filter(cert => cert.category === activeCategory);

  // カテゴリーボタンのデータ
  const categories = [
    { id: 'all', name: 'すべて', icon: 'fas fa-list' },
    { id: 'university', name: '大学時代', icon: 'fas fa-university' },
    { id: 'highschool', name: '高校時代', icon: 'fas fa-school' }
  ];

  // アピール力に応じたスタイルを取得
  const getAppealStyle = (appeal) => {
    const styles = {
      high: { className: 'appeal-high', color: '#e74c3c', label: '重要' },
      medium: { className: 'appeal-medium', color: '#f39c12', label: '標準' },
      low: { className: 'appeal-low', color: '#95a5a6', label: '基礎' }
    };
    return styles[appeal] || styles.low;
  };

  return (
    <div className="certifications">
      <h2 className="certifications-title">資格・検定</h2>
      <div className="certifications-card">
        {/* カテゴリフィルター */}
        <div className="certifications-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* 資格統計サマリー */}
        <div className="certifications-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">{certificationsData.university.length}</div>
              <div className="stat-label">大学時代取得</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{certificationsData.highschool.length}</div>
              <div className="stat-label">高校時代取得</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{allCertifications.filter(cert => cert.appeal === 'high').length}</div>
              <div className="stat-label">重要資格</div>
            </div>
          </div>
        </div>

        {/* 資格リスト */}
        <div className="certifications-list">
          {filteredCertifications.map((cert, index) => {
            const appealStyle = getAppealStyle(cert.appeal);
            
            return (
              <div key={index} className={`certification-item ${cert.category} ${appealStyle.className}`}>
                <div className="certification-header">
                  <div className="certification-badge">
                    <i className={cert.category === 'university' ? 'fas fa-university' : 'fas fa-school'}></i>
                    <span>{cert.period}</span>
                  </div>
                  <div className="appeal-indicator" style={{ color: appealStyle.color }}>
                    <i className="fas fa-circle"></i>
                    <span>{appealStyle.label}</span>
                  </div>
                </div>
                <div className="certification-content">
                  <h4 className="certification-title">{cert.text}</h4>
                  <p className="certification-description">{cert.description}</p>
                  <div className="certification-date">取得: {cert.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certifications;