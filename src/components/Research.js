// src/components/Research.js
import React from 'react';
import '../styles/Research.css';

const Research = () => {
  return (
    <div className="research">
      <h2 className="research-title">研究内容</h2>
      <div className="research-card">
        <h3><strong>二酸化炭素濃度上昇に起因する労働生産性低下を防止する通知システムの開発</strong></h3>
        <p>
          部屋の二酸化炭素濃度が人間の集中力に影響を及ぼすという問題提起がある。私は、大学で自習している時と自宅で勉強している時の集中力の差の要因の一つがこれだと考えた。
          さらにこれは、リモートワークが進み自宅が労働環境と化している近年の労働環境において、特に注目すべき問題であるだろう。
          そこで、Raspberry Piと二酸化炭素濃度センサーを用いて部屋の二酸化炭素濃度を定期測定し、
          基準値を超えた際にSlackにて換気を促す通知をするシステムの開発を行った。
        </p>

        {/* React の特徴を活かして研究内容をより視覚的に表示する要素を追加 */}
        <div className="research-progress">
          <h4>研究進捗状況</h4>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '100%' }}>100%</div>
          </div>
          <div className="progress-stages">
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">計画立案</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">機材収集</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">開発中</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">テスト</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">論文執筆</span>
            </div>
            <div className="stage active">
              <span className="stage-dot"></span>
              <span className="stage-label">国際学会発表</span>
            </div>
          </div>
        </div>
      </div>
      <div className="research-card">
        <h3><strong>Vensimを用いた自動車解体業のビジネスモデルの研究</strong></h3>
        <p>
            自動車解体業は、市場で軽自動車や電気自動車のシェアが拡大することにより、ビジネスモデルの変革が必要になる。
            なぜなら、同事業の収益の多くは普通自動車のエンジンをはじめとした中古部品の輸出が占めているが、
            軽自動車は日本独自の規格であるため海外では売れず、電気自動車はモーターで動くためエンジンがそもそも存在しないためである。
            しかし、この市場の変化とその影響が及ぶ時期についての予測ができておらず、戦略立案に至っていないのが現場の状況である。
            そこで、Vensimというシステムダイナミクスのソフトウェアを用いることで、サプライチェーンのシミュレーションを行い、
            将来的に自動車解体業にどの程度の影響が起こるかを可視化する。
        </p>
        <div className="research-progress">
          <h4>研究進捗状況</h4>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '80%' }}>80%</div>
          </div>
          <div className="progress-stages">
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">計画立案</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">情報収集</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">シミュレーションの実行</span>
            </div>
            <div className="stage completed">
              <span className="stage-dot"></span>
              <span className="stage-label">国際学会発表-1</span>
            </div>
            <div className="stage active">
              <span className="stage-dot"></span>
              <span className="stage-label">シミュレーションの改善</span>
            </div>
            <div className="stage">
              <span className="stage-dot"></span>
              <span className="stage-label">国際学会発表-2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;