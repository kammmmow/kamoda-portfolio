// src/components/Achievements.js
import React, { useState, useEffect } from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('IT_skills');
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

    const section = document.querySelector('.achievements');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // タブ切り替え時のアニメーション
  useEffect(() => {
    setVisibleItems([]);
    const timer = setTimeout(() => {
      const itemCount = achievementsData[activeTab].items.length;
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, i * 100);
      }
    }, 150);
    
    return () => clearTimeout(timer);
  }, [activeTab]);

  const achievementsData = {
    IT_skills: {
      title: 'IT関係',
      icon: 'fas fa-code',
      color: '#2196F3',
      items: [
        {
          title: 'V.Codeホームページ管理',
          description: '文系のためのプログラミングサークルV.Codeのホームページの更新、管理。',
          link: 'https://venture-code-chuo.github.io/homepage/',
          linkText: 'ホームページを見る',
          type: 'project'
        },
        {
          title: 'HTML講座開催',
          description: '同サークルにて、全3回（各100分）のHTML講座を開催する。',
          type: 'education'
        },
        {
          title: '空き教室確認システムUI',
          description: '同サークルハッカソンにて作成、リリースした空き教室確認システムの全てのUIのデザインを作成。（サービス終了）',
          link: 'https://fec-app.link/fec_app_folder/users/top_page/',
          linkText: 'システムを見る',
          type: 'project'
        },
        {
          title: 'Globac Award 2022 優秀賞',
          description: '学部の価値向上に貢献したと認められた団体・個人を表彰するコンテスト"Globac Award 2022"優秀賞をV.Codeとして受賞。',
          link: 'https://www.chuo-u.ac.jp/academics/faculties/globalmanagement/news/2023/03/65426/',
          linkText: '受賞記事を見る',
          type: 'award'
        }
      ]
    },
    scholarship: {
      title: '奨学金',
      icon: 'fas fa-graduation-cap',
      color: '#4CAF50',
      items: [
        {
          title: '学部長賞給付奨学金',
          description: '学部にて特に優秀な成績を収めたとされる個人に送られる"学部長賞給付奨学金"に採用される。',
          type: 'scholarship'
        },
        {
          title: '吉川徹財団 第一期奨学生',
          description: '一般財団法人吉川徹財団 第一期奨学生に採用される。',
          link: 'https://toruyoshikawa.org/',
          linkText: '財団について',
          type: 'scholarship'
        },
        {
          title: 'アドヴァン山形育英会 奨学生',
          description: '公益財団法人アドヴァン山形育英会 奨学生に採用される。',
          link: 'https://www.advan.co.jp/ikueikai/',
          linkText: '育英会について',
          type: 'scholarship'
        },
        {
          title: '2024年度大学院給付奨学生',
          description: '成績優秀者に対し研究活動を支援する目的で送られる"2024年度大学院給付奨学生"に採用される。',
          type: 'scholarship'
        }
      ]
    },
    project: {
      title: 'ゼミプロジェクト',
      icon: 'fas fa-lightbulb',
      color: '#FF9800',
      items: [
        {
          title: 'SHIPsプロジェクト',
          description: '株式会社三技協様の協力のもと、ゼミ活動で行った"SHIPsプロジェクト"にて考案したビジネスアイデアを、住友重機械プロセス機器株式会社様の本社でプレゼンする。',
          type: 'presentation'
        },
        {
          title: 'JT共同研究',
          description: '日本たばこ産業株式会社の共同研究において、紙タバコと電子タバコのギャップを定性的・定量的に分析する。',
          type: 'research'
        }
      ]
    },
    volunteer: {
      title: 'ボランティア',
      icon: 'fas fa-heart',
      color: '#E91E63',
      items: [
        {
          title: '小学校PC授業サポート',
          description: '八王子市立由木東小学校にて、小学1年生が初めてパソコンを扱う授業のボランティアに参加する。',
          link: 'https://www.chuo-u.ac.jp/uploads/2023/09/academics_faculties_teachingcourse_project_20230607_14_28.pdf?1693958400091',
          linkText: '活動詳細を見る',
          type: 'volunteer'
        }
      ]
    }
  };

  const getTypeIcon = (type) => {
    const icons = {
      project: 'fas fa-rocket',
      education: 'fas fa-chalkboard-teacher',
      award: 'fas fa-trophy',
      scholarship: 'fas fa-medal',
      presentation: 'fas fa-presentation',
      research: 'fas fa-flask',
      volunteer: 'fas fa-hands-helping'
    };
    return icons[type] || 'fas fa-star';
  };

  return (
    <div className={`achievements ${isVisible ? 'visible' : ''}`}>
      {/* セクションヘッダー */}
      <div className="achievements-header">
        <div className="achievements-badge">
          <i className="fas fa-trophy"></i>
          <span>Achievements</span>
        </div>
        <h2 className="achievements-title">実績・活動</h2>
        <p className="achievements-subtitle">
          学業、研究、プロジェクトを通じて積み重ねた成果
        </p>
      </div>

      {/* 背景エフェクト */}
      <div className="achievements-background">
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>

      <div className="achievements-container">
        {/* モダンなタブナビゲーション */}
        <div className="modern-tabs">
          {Object.keys(achievementsData).map((tabKey) => {
            const tabData = achievementsData[tabKey];
            return (
              <button
                key={tabKey}
                className={`modern-tab-button ${activeTab === tabKey ? 'active' : ''}`}
                onClick={() => setActiveTab(tabKey)}
                style={{ '--tab-color': tabData.color }}
              >
                <div className="tab-icon">
                  <i className={tabData.icon}></i>
                </div>
                <span className="tab-text">{tabData.title}</span>
                <div className="tab-indicator"></div>
              </button>
            );
          })}
        </div>

        {/* コンテンツエリア */}
        <div className="achievements-content-area">
          <div className="content-header">
            <div className="content-icon" style={{ '--content-color': achievementsData[activeTab].color }}>
              <i className={achievementsData[activeTab].icon}></i>
            </div>
            <h3 className="content-title">{achievementsData[activeTab].title}</h3>
            <div className="content-count">
              {achievementsData[activeTab].items.length} 件の実績
            </div>
          </div>

          {/* アイテムグリッド */}
          <div className="achievements-grid">
            {achievementsData[activeTab].items.map((item, index) => (
              <div
                key={index}
                className={`achievement-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                style={{ 
                  '--item-color': achievementsData[activeTab].color,
                  '--animation-delay': `${index * 0.1}s`
                }}
              >
                <div className="item-header">
                  <div className="item-type-icon">
                    <i className={getTypeIcon(item.type)}></i>
                  </div>
                  <h4 className="item-title">{item.title}</h4>
                </div>
                
                <p className="item-description">{item.description}</p>
                
                {item.link && (
                  <div className="item-action">
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="item-link"
                    >
                      <span>{item.linkText}</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                )}
                
                <div className="item-decoration"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 統計情報 */}
        <div className="achievements-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">4</div>
              <div className="stat-label">カテゴリ</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">
                {Object.values(achievementsData).reduce((total, category) => total + category.items.length, 0)}
              </div>
              <div className="stat-label">総実績数</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="stat-content">
              <div className="stat-number">4</div>
              <div className="stat-label">奨学金受賞</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;