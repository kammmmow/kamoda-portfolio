// src/components/Achievements.js
import React, { useState } from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  // タブのアクティブ状態を管理
  const [activeTab, setActiveTab] = useState('IT_skills');

  const achievementsData = {
    IT_skills: {
      title: 'IT関係',
      items: [
        <>
          <a href="https://venture-code-chuo.github.io/homepage/" target="_blank" rel="noopener noreferrer">文系のためのプログラミングサークルV.Codeのホームページ</a>
          の更新、管理。
        </>,
        '同サークルにて、全3回（各100分）のHTML講座を開催する。',
        <>
          同サークルハッカソンにて作成、リリースした
          <a href="https://fec-app.link/fec_app_folder/users/top_page/" target="_blank" rel="noopener noreferrer">空き教室確認システム</a>
          の全てのUIのデザインを作成。（サービス終了）
        </>,
        <>
          学部の価値向上に貢献したと認められた団体・個人を表彰するコンテスト
          <a href="https://www.chuo-u.ac.jp/academics/faculties/globalmanagement/news/2023/03/65426/" target="_blank" rel="noopener noreferrer">"Globac Award 2022"</a>
          優秀賞をV.Codeとして受賞。
        </>
      ]
    },
    scholarship: {
      title: '奨学金',
      items: [
        '学部にて特に優秀な成績を収めたとされる個人に送られる"学部長賞給付奨学金"に採用される。',
        <>
          <a href="https://toruyoshikawa.org/" target="_blank" rel="noopener noreferrer">一般財団法人吉川徹財団</a> 第一期奨学生に採用される。
        </>,
        <>
          <a href="https://www.advan.co.jp/ikueikai/" target="_blank" rel="noopener noreferrer">公益財団法人アドヴァン山形育英会</a> 奨学生に採用される。
        </>,
        '成績優秀者に対し研究活動を支援する目的で送られる"2024年度大学院給付奨学生"に採用される'
      ]
    },
    project: {
      title: 'ゼミプロジェクト',
      items: [
        '株式会社三技協様の協力のもと、ゼミ活動で行った"SHIPsプロジェクト"にて考案したビジネスアイデアを、住友重機械プロセス機器株式会社様の本社でプレゼンする。',
        '日本たばこ産業株式会社の共同研究において、紙タバコと電子タバコのギャップを定性的・定量的に分析する。'
      ]
    },
    volunteer: {
      title: 'ボランティア',
      items: [
        <>
          八王子市立由木東小学校にて、
          <a href="https://www.chuo-u.ac.jp/uploads/2023/09/academics_faculties_teachingcourse_project_20230607_14_28.pdf?1693958400091" target="_blank" rel="noopener noreferrer">小学1年生が初めてパソコンを扱う授業のボランティア</a>
          に参加する。
        </>
      ]
    }
  };

  return (
    <div className="achievements">
      <h2 className="achievements-title">実績・活動</h2>
      <div className="achievements-card">
        {/* タブナビゲーション */}
        <div className="achievements-tabs">
          {Object.keys(achievementsData).map((tabKey) => (
            <button
              key={tabKey}
              className={`tab-button ${activeTab === tabKey ? 'active' : ''}`}
              onClick={() => setActiveTab(tabKey)}
            >
              {achievementsData[tabKey].title}
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <div className="achievements-content">
          <h3>{achievementsData[activeTab].title}</h3>
          <ul>
            {achievementsData[activeTab].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;