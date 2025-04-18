import React, { useEffect } from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, children, title }) => {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // モーダルを開いた時にスクロールを無効にする
      document.body.style.overflow = 'hidden';
    }

    // クリーンアップ関数
    return () => {
      document.removeEventListener('keydown', handleEsc);
      // モーダルを閉じた時にスクロールを有効にする
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="modal-title">{title}</h2>}
        <div className="modal-content">{children}</div>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;