import React from 'react';
import { Mail, Globe, FileText } from 'lucide-react';

const NEEDED = [
  '사업자등록증',
  '최근 재무제표 (개인사업자는 소득금액증명)',
  '기존 대출 현황 (기관 · 잔액 · 금리)',
  '부동산 보유 시 등기부등본',
];

export default function Contact() {
  return (
    <section id="contact" className="band band--ink ct">
      <div className="wrap ct__inner">
        <div className="ct__left reveal">
          <p className="eyebrow">무료 자금진단</p>
          <h2 className="h-lead" style={{ color: 'var(--paper)' }}>
            지금 우리 회사는
            <br />
            어디까지 열려 있습니까.
          </h2>

          <div className="channel ct__channel" aria-hidden="true">
            <span className="channel__blocked" />
            <span className="channel__node" />
            <span className="channel__open" />
          </div>

          <p className="lede">
            진단에는 비용을 받지 않습니다. 지금 신청 가능한 기관과 트랙, 그리고 한도를
            막고 있는 것이 무엇인지 먼저 확인해 보시고 결정하셔도 늦지 않습니다. 어렵다는
            판단이 나오면 그 이유도 그대로 말씀드립니다.
          </p>

          <div className="ct__buttons">
            <a href="mailto:briany0527@naver.com?subject=무료%20자금진단%20신청" className="btn btn--seal">
              <Mail size={18} />
              자금진단 신청하기
            </a>
            <a href="https://drbriany.com" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              <Globe size={18} />
              닥터브리 컨설팅그룹
            </a>
          </div>
        </div>

        <aside className="ct__right reveal">
          <p className="ct__lab">
            <FileText size={16} />
            진단에 필요한 자료
          </p>
          <ul className="ct__list">
            {NEEDED.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="fine" style={{ color: 'rgba(243,242,238,.45)', marginTop: '1.25rem' }}>
            전부 준비되지 않아도 됩니다. 사업자등록증만 있어도 큰 방향은 말씀드릴 수
            있습니다. 받은 자료는 진단 외 목적으로 사용하지 않습니다.
          </p>
        </aside>
      </div>

      <style>{`
        .ct__inner { display:grid; grid-template-columns: 1.25fr .75fr; gap: var(--s6); align-items:start; }
        .ct__channel { margin: 1.75rem 0; max-width: 320px; }
        .ct__buttons { display:flex; gap:.75rem; flex-wrap:wrap; margin-top: 2.25rem; }

        .ct__right { border:1px solid var(--rule-dark); padding: 1.75rem; }
        .ct__lab { display:flex; align-items:center; gap:.5rem; font-size:.8125rem; font-weight:700; color: var(--seal-soft); margin-bottom:1.25rem; }
        .ct__list { list-style:none; }
        .ct__list li {
          font-size:.9063rem; line-height:1.6; color: rgba(243,242,238,.75);
          padding: .75rem 0; border-bottom:1px solid var(--rule-dark);
        }
        .ct__list li:last-child { border-bottom:0; }

        @media (max-width: 900px) { .ct__inner { grid-template-columns: 1fr; gap: var(--s4); } }
      `}</style>
    </section>
  );
}
