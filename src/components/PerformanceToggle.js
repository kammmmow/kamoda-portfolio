// src/components/PerformanceToggle.js
import React, { useContext, useState } from 'react';
import { PerformanceContext } from '../App';
import '../styles/PerformanceToggle.css';

const PerformanceToggle = () => {
  const { reducedMotion, setReducedMotion } = useContext(PerformanceContext);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const togglePerformanceMode = () => {
    setReducedMotion(!reducedMotion);
    
    // 切り替え時のフィードバック
    if (!reducedMotion) {
      // ノーマル→軽量モードに切り替え
      alert('✅ アニメーション控えめモードを有効にしました。ページがスムーズに動作するようになります。');
    } else {
      // 軽量→ノーマルモードに切り替え
      alert('🎨 通常モードに戻しました。豊富なアニメーションをお楽しみください。');
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="performance-toggle-container">
      {/* メイン切り替えボタン */}
      <button 
        className={`performance-main-button ${isVisible ? 'active' : ''}`}
        onClick={toggleVisibility}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="パフォーマンス設定を開く"
      >
        <i className={`fas ${reducedMotion ? 'fa-tachometer-alt' : 'fa-magic'}`}></i>
        
        {/* ツールチップ */}
        {showTooltip && (
          <div className="tooltip">
            パフォーマンス設定
          </div>
        )}
      </button>

      {/* 設定パネル */}
      <div className={`performance-panel ${isVisible ? 'visible' : ''}`}>
        <div className="panel-header">
          <h3>
            <i className="fas fa-cog"></i>
            パフォーマンス設定
          </h3>
          <button 
            className="close-button"
            onClick={toggleVisibility}
            aria-label="設定を閉じる"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="panel-content">
          <div className="mode-option">
            <div className="option-info">
              <h4>
                <i className={`fas ${reducedMotion ? 'fa-check-circle text-success' : 'fa-circle text-muted'}`}></i>
                アニメーション控えめ
              </h4>
              <p>古いPCや低スペック端末でも快適に閲覧できます</p>
              <ul className="feature-list">
                <li>• アニメーション最小化</li>
                <li>• エフェクト簡略化</li>
                <li>• スムーズスクロール</li>
                <li>• 高速ローディング</li>
              </ul>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={reducedMotion}
                onChange={togglePerformanceMode}
              />
              <span className="slider"></span>
            </label>
          </div>
          
          <div className="mode-option">
            <div className="option-info">
              <h4>
                <i className={`fas ${!reducedMotion ? 'fa-check-circle text-success' : 'fa-circle text-muted'}`}></i>
                通常モード
              </h4>
              <p>豊富なアニメーションとエフェクトを楽しめます</p>
              <ul className="feature-list">
                <li>• 豊富なアニメーション</li>
                <li>• 視覚的エフェクト</li>
                <li>• ダイナミック演出</li>
                <li>• インタラクティブUI</li>
              </ul>
            </div>
          </div>
          
          {/* 現在の状態表示 */}
          <div className="current-status">
            <div className={`status-indicator ${reducedMotion ? 'performance' : 'normal'}`}>
              <i className={`fas ${reducedMotion ? 'fa-leaf' : 'fa-sparkles'}`}></i>
              <span>
                現在: {reducedMotion ? 'アニメーション控えめ' : '通常モード'}
              </span>
            </div>
          </div>
          
          {/* パフォーマンス情報 */}
          <div className="performance-info">
            <h5>
              <i className="fas fa-info-circle"></i>
              お使いの環境
            </h5>
            <div className="device-info">
              <div className="info-item">
                <span>CPU コア数:</span>
                <span>{navigator.hardwareConcurrency || '不明'}</span>
              </div>
              <div className="info-item">
                <span>メモリ:</span>
                <span>{navigator.deviceMemory ? `${navigator.deviceMemory}GB` : '不明'}</span>
              </div>
              <div className="info-item">
                <span>推奨モード:</span>
                <span className={`recommended ${
                  (navigator.hardwareConcurrency || 2) < 4 || (navigator.deviceMemory || 2) < 4 
                    ? 'performance' : 'normal'
                }`}>
                  {(navigator.hardwareConcurrency || 2) < 4 || (navigator.deviceMemory || 2) < 4 
                    ? 'アニメーション控えめ' : '通常モード'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* オーバーレイ */}
      {isVisible && <div className="overlay" onClick={toggleVisibility}></div>}
    </div>
  );
};

export default PerformanceToggle;