// src/components/Education.js - 重複要素整理版
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: '北海道札幌国際情報高等学校グローバルビジネス科',
      status: '卒業',
      statusType: 'completed',
      period: '2018年4月 - 2021年3月',
      highlight: null
    },
    {
      id: 2,
      title: '中央大学国際経営学部国際経営学科',
      status: '飛び級卒業',
      statusType: 'accelerated',
      period: '2021年4月 - 2024年3月',
      highlight: '学部をGPA3.92（239人中2位）で3年次に早期卒業。優秀な成績により大学院進学資格を1年早く取得。'
    },
    {
      id: 3,
      title: '中央大学大学院経済学研究科',
      status: '在学中',
      statusType: 'current',
      period: '2024年4月 - 2026年3月（予定）',
      highlight: null
    }
  ];

  // ステータスに応じたスタイルとアイコンを取得
  const getStatusStyle = (statusType) => {
    const styles = {
      completed: { className: 'status-completed', icon: 'fas fa-check-circle' },
      accelerated: { className: 'status-accelerated', icon: 'fas fa-star' },
      current: { className: 'status-current', icon: 'fas fa-clock' }
    };
    return styles[statusType] || styles.completed;
  };

  return (
    <div className="education">
      <h2 className="education-title">学歴</h2>
      <div className="education-timeline">
        {educationData.map((edu) => {
          const statusStyle = getStatusStyle(edu.statusType);
          
          return (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-connector">
                <div className={`timeline-dot ${statusStyle.className}`}>
                  <i className={statusStyle.icon}></i>
                </div>
                {edu.id !== educationData.length && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <h3>{edu.title}</h3>
                <div className={`timeline-status ${statusStyle.className}`}>
                  {edu.status}
                </div>
                <div className="timeline-period">{edu.period}</div>
                
                {/* 飛び級の詳細説明を一箇所に集約 */}
                {edu.highlight && (
                  <div className="timeline-highlight">
                    <i className="fas fa-info-circle"></i>
                    <span>{edu.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Education;