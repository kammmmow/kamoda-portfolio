// src/components/Education.js
import React, { useState, useEffect } from 'react';
import '../styles/Education.css';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // スクロール時のアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 段階的にアイテムを表示
            educationData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...new Set([...prev, index])]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.education');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      title: '北海道札幌国際情報高等学校',
      subtitle: 'グローバルビジネス科',
      status: '卒業',
      period: '2018年4月 - 2021年3月',
      duration: '3年間',
      icon: 'fas fa-school',
      color: '#FF9800',
      highlights: [
        '全商検定1級複数取得',
        'グローバルビジネス専攻',
        'ITパスポート取得'
      ],
      type: 'highschool'
    },
    {
      id: 2,
      title: '中央大学',
      subtitle: '国際経営学部国際経営学科',
      status: '早期（飛び級）卒業',
      period: '2021年4月 - 2024年3月',
      duration: '3年間',
      icon: 'fas fa-university',
      color: '#2196F3',
      highlights: [
        'GPA 3.92（239人中2位）',
        '学部長賞給付奨学金受賞',
        'V.Code 3期代表',
        '飛び級卒業'
      ],
      type: 'university',
      special: true
    },
    {
      id: 3,
      title: '中央大学大学院',
      subtitle: '経済学研究科',
      status: '在学中',
      period: '2024年4月 - 2026年3月（予定）',
      duration: '2年間',
      icon: 'fas fa-graduation-cap',
      color: '#4CAF50',
      highlights: [
        '大学院給付奨学生',
        '研究活動継続中',
        '国際学会発表'
      ],
      type: 'graduate',
      current: true
    }
  ];

  const getStatusStyle = (item) => {
    if (item.current) return 'current';
    if (item.special) return 'special';
    return 'completed';
  };

  return (
    <div className={`education ${isVisible ? 'visible' : ''}`}>
      {/* セクションヘッダー */}
      <div className="education-header">
        <div className="education-badge">
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </div>
        <h2 className="education-title">学歴</h2>
        <p className="education-subtitle">
          学習の軌跡と成長のストーリー
        </p>
      </div>

      {/* 背景エフェクト */}
      <div className="education-background">
        <div className="academic-elements">
          <div className="academic-element element-1"></div>
          <div className="academic-element element-2"></div>
          <div className="academic-element element-3"></div>
        </div>
      </div>

      <div className="education-container">
        {/* 進捗インジケーター */}
        <div className="education-progress">
          <div className="progress-line"></div>
          {educationData.map((item, index) => (
            <div 
              key={item.id}
              className={`progress-dot ${visibleItems.includes(index) ? 'visible' : ''} ${getStatusStyle(item)}`}
              style={{ '--dot-color': item.color }}
            >
              <i className={item.icon}></i>
            </div>
          ))}
        </div>

        {/* タイムラインカード */}
        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-card ${visibleItems.includes(index) ? 'visible' : ''} ${getStatusStyle(item)}`}
              style={{ 
                '--card-color': item.color,
                '--animation-delay': `${index * 0.2}s`
              }}
            >
              {/* カードヘッダー */}
              <div className="card-header">
                <div className="card-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="card-main-info">
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-subtitle">{item.subtitle}</h4>
                </div>
                <div className={`card-status status-${getStatusStyle(item)}`}>
                  {item.status}
                </div>
              </div>

              {/* カード詳細 */}
              <div className="card-details">
                <div className="card-period">
                  <div className="period-info">
                    <i className="fas fa-calendar-alt"></i>
                    <span>{item.period}</span>
                  </div>
                  <div className="duration-info">
                    <i className="fas fa-clock"></i>
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* ハイライト */}
                <div className="card-highlights">
                  <h5 className="highlights-title">主な成果・特徴</h5>
                  <div className="highlights-grid">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="highlight-item">
                        <i className="fas fa-star"></i>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 特別なバッジ */}
              {item.current && (
                <div className="current-badge">
                  <i className="fas fa-user-graduate"></i>
                  <span>現在在学中</span>
                </div>
              )}
              {item.special && (
                <div className="special-badge">
                  <i className="fas fa-medal"></i>
                  <span>飛び級卒業</span>
                </div>
              )}

              {/* カード装飾 */}
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>

        {/* 教育統計 */}
        <div className="education-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">3.92</div>
              <div className="stat-label">GPA</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-medal"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">2nd</div>
              <div className="stat-label">Class Rank</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">8</div>
              <div className="stat-label">Years Study</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">4+</div>
              <div className="stat-label">Scholarships</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;