// src/components/Certifications.js
import React, { useState, useEffect } from 'react';
import '../styles/Certifications.css';

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // スクロール時のアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.certifications');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // フィルター変更時のアニメーション
  useEffect(() => {
    setVisibleItems([]);
    const timer = setTimeout(() => {
      const currentCerts = getCertificationsByCategory(activeCategory);
      currentCerts.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...new Set([...prev, index])]);
        }, index * 80);
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const certificationsData = {
    highschool: [
      {
        name: '全商 情報処理検定ビジネス情報部門１級',
        category: 'IT・情報',
        level: '1級',
        icon: 'fas fa-laptop-code',
        color: '#2196F3'
      },
      {
        name: '全商 商業経済検定試験１級',
        category: 'ビジネス',
        level: '1級', 
        icon: 'fas fa-chart-line',
        color: '#4CAF50'
      },
      {
        name: '全商 英語検定試験１級',
        category: '語学',
        level: '1級',
        icon: 'fas fa-globe',
        color: '#FF9800'
      },
      {
        name: '全経 簿記能力検定試験３級',
        category: '会計',
        level: '3級',
        icon: 'fas fa-calculator',
        color: '#9C27B0'
      },
      {
        name: '文章読解・作成能力検定 準二級',
        category: '文書',
        level: '準2級',
        icon: 'fas fa-pen-fancy',
        color: '#E91E63'
      },
      {
        name: 'IPA主催 ITパスポート試験',
        category: 'IT・情報',
        level: '国家資格',
        icon: 'fas fa-shield-alt',
        color: '#2196F3',
        special: true
      }
    ],
    university: [
      {
        name: '個人情報管理士（特定）',
        category: '法務・コンプライアンス',
        level: '特定',
        icon: 'fas fa-user-shield',
        color: '#795548'
      },
      {
        name: 'IPA主催 基本情報技術者試験',
        category: 'IT・情報',
        level: '国家資格',
        icon: 'fas fa-microchip',
        color: '#2196F3',
        special: true
      },
      {
        name: 'IPA主催 情報セキュリティマネジメント試験',
        category: 'IT・情報',
        level: '国家資格',
        icon: 'fas fa-lock',
        color: '#2196F3',
        special: true
      },
      {
        name: '３級ファイナンシャル・プランニング技能士',
        category: '金融',
        level: '3級',
        icon: 'fas fa-coins',
        color: '#FF5722'
      },
      {
        name: '２級ファイナンシャル・プランニング技能士（一部合格）',
        category: '金融',
        level: '2級（一部）',
        icon: 'fas fa-coins',
        color: '#FF5722',
        partial: true
      },
      {
        name: '文部科学省後援 ビジネス実務マナー検定２級',
        category: 'ビジネス',
        level: '2級',
        icon: 'fas fa-handshake',
        color: '#4CAF50'
      }
    ]
  };

  const getCertificationsByCategory = (category) => {
    if (category === 'all') {
      return [
        ...certificationsData.highschool.map(cert => ({ ...cert, period: 'highschool' })),
        ...certificationsData.university.map(cert => ({ ...cert, period: 'university' }))
      ];
    }
    return certificationsData[category].map(cert => ({ ...cert, period: category }));
  };

  const categories = [
    { id: 'all', name: 'すべて', icon: 'fas fa-list', count: Object.values(certificationsData).flat().length },
    { id: 'highschool', name: '高校時代', icon: 'fas fa-school', count: certificationsData.highschool.length },
    { id: 'university', name: '大学時代', icon: 'fas fa-university', count: certificationsData.university.length }
  ];

  const currentCertifications = getCertificationsByCategory(activeCategory);

  // 統計データ
  const stats = {
    total: Object.values(certificationsData).flat().length,
    national: Object.values(certificationsData).flat().filter(cert => cert.special).length,
    categories: [...new Set(Object.values(certificationsData).flat().map(cert => cert.category))].length,
    level1: Object.values(certificationsData).flat().filter(cert => cert.level?.includes('1級')).length
  };

  return (
    <div className={`certifications ${isVisible ? 'visible' : ''}`}>
      {/* セクションヘッダー */}
      <div className="certifications-header">
        <div className="certifications-badge">
          <i className="fas fa-certificate"></i>
          <span>Certifications</span>
        </div>
        <h2 className="certifications-title">資格</h2>
        <p className="certifications-subtitle">
          継続的な学習と自己研鑽の証
        </p>
      </div>

      {/* 背景エフェクト */}
      <div className="certifications-background">
        <div className="cert-elements">
          <div className="cert-element element-1"></div>
          <div className="cert-element element-2"></div>
          <div className="cert-element element-3"></div>
        </div>
      </div>

      <div className="certifications-container">
        {/* 統計カード */}
        <div className="certifications-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.total}</div>
              <div className="stat-label">総取得数</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-medal"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.national}</div>
              <div className="stat-label">国家資格</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-tags"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.categories}</div>
              <div className="stat-label">分野数</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">{stats.level1}</div>
              <div className="stat-label">1級資格</div>
            </div>
          </div>
        </div>

        {/* フィルターナビゲーション */}
        <div className="certifications-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <div className="filter-icon">
                <i className={category.icon}></i>
              </div>
              <div className="filter-text">
                <span className="filter-name">{category.name}</span>
                <span className="filter-count">{category.count}件</span>
              </div>
            </button>
          ))}
        </div>

        {/* 資格カードグリッド */}
        <div className="certifications-content">
          <div className="certifications-grid">
            {currentCertifications.map((cert, index) => (
              <div
                key={`${cert.period}-${index}`}
                className={`certification-card ${visibleItems.includes(index) ? 'visible' : ''} ${cert.special ? 'special' : ''} ${cert.partial ? 'partial' : ''}`}
                style={{ 
                  '--cert-color': cert.color,
                  '--animation-delay': `${index * 0.08}s`
                }}
              >
                {/* カードヘッダー */}
                <div className="card-header">
                  <div className="card-icon">
                    <i className={cert.icon}></i>
                  </div>
                  <div className="card-badges">
                    <span className={`period-badge ${cert.period}`}>
                      {cert.period === 'highschool' ? '高校' : '大学'}
                    </span>
                    <span className={`level-badge ${cert.special ? 'special' : cert.partial ? 'partial' : 'normal'}`}>
                      {cert.level}
                    </span>
                  </div>
                </div>

                {/* カードコンテンツ */}
                <div className="card-content">
                  <h3 className="cert-name">{cert.name}</h3>
                  <div className="cert-category">
                    <i className="fas fa-tag"></i>
                    <span>{cert.category}</span>
                  </div>
                </div>

                {/* 特別なバッジ */}
                {cert.special && (
                  <div className="special-indicator">
                    <i className="fas fa-star"></i>
                    <span>国家資格</span>
                  </div>
                )}
                {cert.partial && (
                  <div className="partial-indicator">
                    <i className="fas fa-clock"></i>
                    <span>一部合格</span>
                  </div>
                )}

                {/* カード装飾 */}
                <div className="card-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;