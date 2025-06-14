// src/components/Research.js
import React, { useState, useEffect } from 'react';
import '../styles/Research.css';

const Research = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeCard, setActiveCard] = useState(null);

  // スクロール時のアニメーション用
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.research-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const researchData = [
    {
      id: 1,
      title: "二酸化炭素濃度上昇に起因する労働生産性低下を防止する通知システムの開発",
      description: "部屋の二酸化炭素濃度が人間の集中力に影響を及ぼすという問題提起がある。私は、大学で自習している時と自宅で勉強している時の集中力の差の要因の一つがこれだと考えた。さらにこれは、リモートワークが進み自宅が労働環境と化している近年の労働環境において、特に注目すべき問題であるだろう。そこで、Raspberry Piと二酸化炭素濃度センサーを用いて部屋の二酸化炭素濃度を定期測定し、基準値を超えた際にSlackにて換気を促す通知をするシステムの開発を行った。",
      category: "IoT・AI",
      status: "完了",
      progress: 100,
      stages: [
        { name: "計画立案", completed: true },
        { name: "機材収集", completed: true },
        { name: "開発", completed: true },
        { name: "テスト", completed: true },
        { name: "論文執筆", completed: true },
        { name: "国際学会発表", completed: true }
      ],
      keyFeatures: [
        "Raspberry Pi活用",
        "Slack API連携",
        "リアルタイム測定",
        "労働生産性向上"
      ],
      technologies: ["Raspberry Pi", "Python", "Slack API", "センサー技術"],
      impact: "リモートワーク環境の生産性向上",
      color: "#4CAF50"
    },
    {
      id: 2,
      title: "Vensimを用いた自動車解体業のビジネスモデルの研究",
      description: "自動車解体業は、市場で軽自動車や電気自動車のシェアが拡大することにより、ビジネスモデルの変革が必要になる。なぜなら、同事業の収益の多くは普通自動車のエンジンをはじめとした中古部品の輸出が占めているが、軽自動車は日本独自の規格であるため海外では売れず、電気自動車はモーターで動くためエンジンがそもそも存在しないためである。しかし、この市場の変化とその影響が及ぶ時期についての予測ができておらず、戦略立案に至っていないのが現場の状況である。そこで、Vensimというシステムダイナミクスのソフトウェアを用いることで、サプライチェーンのシミュレーションを行い、将来的に自動車解体業にどの程度の影響が起こるかを可視化する。",
      category: "ビジネス分析",
      status: "進行中",
      progress: 80,
      stages: [
        { name: "計画立案", completed: true },
        { name: "情報収集", completed: true },
        { name: "シミュレーション実行", completed: true },
        { name: "国際学会発表-1", completed: true },
        { name: "シミュレーション改善", completed: false, active: true },
        { name: "国際学会発表-2", completed: false }
      ],
      keyFeatures: [
        "システムダイナミクス",
        "将来予測モデル",
        "ビジネス戦略分析",
        "産業変革対応"
      ],
      technologies: ["Vensim", "データ分析", "シミュレーション", "戦略コンサルティング"],
      impact: "自動車解体業界の持続可能な発展",
      color: "#2196F3"
    }
  ];

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="research">
      {/* セクションヘッダー */}
      <div className="research-header">
        <div className="research-badge">
          <i className="fas fa-microscope"></i>
          <span>Research</span>
        </div>
        <h2 className="research-title">研究内容</h2>
        <p className="research-subtitle">
          技術と社会の課題解決を目指した研究プロジェクト
        </p>
      </div>

      {/* 背景エフェクト */}
      <div className="research-background">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </div>

      {/* 研究カード */}
      <div className="research-container">
        {researchData.map((research, index) => (
          <div
            key={research.id}
            className={`research-card ${visibleCards.includes(index) ? 'visible' : ''} ${activeCard === research.id ? 'expanded' : ''}`}
            data-index={index}
            onClick={() => handleCardClick(research.id)}
            style={{ '--accent-color': research.color }}
          >
            {/* カードヘッダー */}
            <div className="card-header">
              <div className="card-category">
                <span className="category-badge">{research.category}</span>
                <span className={`status-badge status-${research.status === '完了' ? 'completed' : 'ongoing'}`}>
                  {research.status}
                </span>
              </div>
              <div className="card-expand-icon">
                <i className={`fas fa-chevron-${activeCard === research.id ? 'up' : 'down'}`}></i>
              </div>
            </div>

            {/* カードタイトル */}
            <h3 className="card-title">{research.title}</h3>

            {/* プログレスバー */}
            <div className="progress-section">
              <div className="progress-header">
                <span className="progress-label">進捗状況</span>
                <span className="progress-percentage">{research.progress}%</span>
              </div>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${research.progress}%` }}
                ></div>
              </div>
            </div>

            {/* キー機能（常時表示） */}
            <div className="key-features">
              {research.keyFeatures.map((feature, idx) => (
                <span key={idx} className="feature-tag">{feature}</span>
              ))}
            </div>

            {/* 展開可能コンテンツ */}
            <div className={`card-expandable ${activeCard === research.id ? 'expanded' : ''}`}>
              {/* 説明文 */}
              <div className="research-description">
                <p>{research.description}</p>
              </div>

              {/* 技術スタック */}
              <div className="technology-section">
                <h4 className="section-subtitle">使用技術</h4>
                <div className="technology-grid">
                  {research.technologies.map((tech, idx) => (
                    <div key={idx} className="tech-item">
                      <i className="fas fa-code"></i>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 研究段階 */}
              <div className="stages-section">
                <h4 className="section-subtitle">研究進捗</h4>
                <div className="stages-timeline">
                  {research.stages.map((stage, idx) => (
                    <div 
                      key={idx} 
                      className={`stage-item ${stage.completed ? 'completed' : ''} ${stage.active ? 'active' : ''}`}
                    >
                      <div className="stage-dot">
                        {stage.completed ? (
                          <i className="fas fa-check"></i>
                        ) : stage.active ? (
                          <i className="fas fa-clock"></i>
                        ) : (
                          <i className="fas fa-circle"></i>
                        )}
                      </div>
                      <span className="stage-label">{stage.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* インパクト */}
              <div className="impact-section">
                <h4 className="section-subtitle">期待される影響</h4>
                <div className="impact-card">
                  <i className="fas fa-lightbulb"></i>
                  <span>{research.impact}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* セクションフッター */}
      <div className="research-footer">
        <div className="research-stats">
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">進行中プロジェクト</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1</div>
            <div className="stat-label">国際学会発表</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">複数</div>
            <div className="stat-label">使用技術</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;