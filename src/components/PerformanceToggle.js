// src/components/PerformanceToggle.js - 超シンプル版: ワンクリック切り替えのみ
import React, { useContext, useState } from 'react';
import { PerformanceContext } from '../App';
import '../styles/PerformanceToggle.css';

const PerformanceToggle = () => {
  const { reducedMotion, setReducedMotion } = useContext(PerformanceContext);
  const [showTooltip, setShowTooltip] = useState(false);

  // メインの切り替え機能（1クリックで即座に切り替え）
  const togglePerformanceMode = () => {
    setReducedMotion(!reducedMotion);
  };

  return (
    <div className="performance-toggle-container">
      {/* シンプル切り替えボタン */}
      <button 
        className={`performance-toggle-button ${reducedMotion ? 'performance-mode' : 'normal-mode'}`}
        onClick={togglePerformanceMode}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label={`パフォーマンスモード: ${reducedMotion ? 'ON' : 'OFF'}`}
      >
        {/* アイコンと状態表示 */}
        <div className="button-content">
          <i className={`fas ${reducedMotion ? 'fa-tachometer-alt' : 'fa-magic'}`}></i>
          <div className="mode-indicator">
            <span className="mode-text">
              {reducedMotion ? '軽量' : '通常'}
            </span>
          </div>
        </div>
        
        {/* 状態インジケーター */}
        <div className={`status-dot ${reducedMotion ? 'performance' : 'normal'}`}></div>
        
        {/* ツールチップ */}
        {showTooltip && (
          <div className="tooltip">
            <strong>{reducedMotion ? 'パフォーマンスモード' : '通常モード'}</strong>
            <br />
            <small>クリックで切り替え</small>
          </div>
        )}
      </button>
    </div>
  );
};

export default PerformanceToggle;