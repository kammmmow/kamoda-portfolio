// src/components/Strengths.js
import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/Strengths.css';

const Strengths = () => {
  const [modalContent, setModalContent] = useState(null);
  
  const strengthsData = [
    {
      id: 'leadership',
      title: 'リーダーシップ',
      content: (
        <p>
          私は中学1年生から高校3年まで学級代表を務め、大学に入ってからはゼミの代表とサークルの代表を務めています。<br />
          長い期間組織のリーダーを務めた経験から、組織のマネジメント力やメンバーをまとめる能力といったリーダーシップを身につけました。<br />
          最近直面している課題は<strong>「いかに人を動かすか」</strong>ということです。これまではリーダーとして自分が業務のカバーに回ることでプロジェクトをまとめていましたが、
          それではメンバーの教育にならないことに気づき、動かない人が能動的に作業するよう促す能力が必要だと実感しました。
        </p>
      )
    },
    {
      id: 'inquiring_mind',
      title: '探究心',
      content: (
        <p>
          私はこれまで約2年半の大学生活を探究心を持って過ごしてきました。<br />
          大学講義では疑問点を持ち教授に質問することを心がけており、興味を持ったことの学びを深めています。<br />
          講義以外では、興味を持った分野の資格勉強を行ってきました。
          また、プログラミングに興味を持ったことをきっかけにプログラミングサークルに参加し、1年半経過した現在でもスキル向上に努めています。
          このように私は、これまで挑戦したことないことであっても<strong>興味を持ったことにはすぐに取り組み継続する探究心</strong>を持っています。
        </p>
      )
    },
    {
      id: 'diligent',
      title: '真面目と柔軟のバランス',
      content: (
        <p>
          私は誰よりも真面目でありながら、柔軟さも持ち合わせています。
          「真面目」では、分かりやすい数値で表すと<strong>通算GPAで3.90/4.0（3年春学期終了時点）</strong>を獲得しました。<br />
          その他、先方や教授、グループメンバーへの連絡を欠かさず、リマインドや細かい報連相などに気を配るようにしています。<br />
          しかし、真面目なだけでは発想が及ばないことや機転が利かないことがありました。<br />
          その経験から、<strong>真面目を前提として柔軟な考え方を持つ</strong>ことで、問題解決能力の向上や人脈の拡大といった成長を遂げることができました。
        </p>
      )
    }
  ];

  const openModal = (content, title) => {
    setModalContent({ content, title });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="strength">
      <h2 className="strength-title">強み</h2>
      <div className="strength-list">
        {strengthsData.map((strength) => (
          <div key={strength.id} className="strength-item">
            <button
              className="strength-button"
              onClick={() => openModal(strength.content, strength.title)}
            >
              {strength.title}
            </button>
          </div>
        ))}
      </div>

      {modalContent && (
        <Modal
          isOpen={!!modalContent}
          onClose={closeModal}
          title={modalContent.title}
        >
          {modalContent.content}
        </Modal>
      )}
    </div>
  );
};

export default Strengths;