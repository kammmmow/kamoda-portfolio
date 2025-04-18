// src/components/Education.js
import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: '北海道札幌国際情報高等学校グローバルビジネス科',
      status: '卒業',
      period: '2018年4月 - 2021年3月',
      logo: 'high-school-logo.png' // 必要に応じて画像を追加
    },
    {
      id: 2,
      title: '中央大学国際経営学部国際経営学科',
      status: '早期（飛び級）卒業',
      period: '2021年4月 - 2024年3月',
      logo: 'chuo-university-logo.png' // 必要に応じて画像を追加
    },
    {
      id: 3,
      title: '中央大学大学院経済学研究科',
      status: '在学中',
      period: '2024年4月 - 2026年3月',
      logo: 'chuo-graduate-logo.png' // 必要に応じて画像を追加
    }
  ];

  return (
    <div className="education">
      <h2 className="education-title">学歴</h2>
      <div className="education-timeline">
        {educationData.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-connector">
              <div className="timeline-dot"></div>
              {edu.id !== educationData.length && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <div className="timeline-status">{edu.status}</div>
              <div className="timeline-period">{edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;