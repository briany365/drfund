import React from 'react';
import { experts } from '../data/experts';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap ft__inner">
        <div className="ft__brand">
          <span className="ft__mark">
            <span className="ft__dash" aria-hidden="true" />
            자금조달 컨설팅
          </span>
          <p className="ft__line">
            금융자금과 정책자금을 한 판에 놓고 대환과 추가 조달을 함께 설계합니다.
          </p>
          <p className="ft__names">
            {experts.map((e) => e.name).join(' · ')}
          </p>
        </div>

        <nav className="ft__nav">
          <a href="#funding">자금조달</a>
          <a href="#cases">조달 사례</a>
          <a href="#experts">두 전문가</a>
          <a href="#capabilities">컨설팅 영역</a>
          <a href="#contact">진단 신청</a>
        </nav>

        <div className="ft__contact">
          <a href="mailto:briany0527@naver.com">briany0527@naver.com</a>
          <a href="https://drbriany.com" target="_blank" rel="noopener noreferrer">
            drbriany.com
          </a>
        </div>
      </div>

      <div className="wrap ft__bottom">
        <p>
          본 사이트의 내용은 일반적인 정보 제공을 목적으로 하며, 특정 기업의 승인 · 금리 ·
          한도를 보장하지 않습니다. 실제 조건은 기업의 재무 상태와 신청 시점의 기관 정책에
          따라 달라집니다.
        </p>
        <p className="ft__copy">© {new Date().getFullYear()} 닥터브리 컨설팅그룹</p>
      </div>

      <style>{`
        .ft { background: var(--ink); color: rgba(243,242,238,.6); padding: var(--s6) 0 2rem; border-top:1px solid var(--rule-dark); }
        .ft__inner { display:grid; grid-template-columns: 1.4fr 1fr 1fr; gap: var(--s4); }
        .ft__mark { display:inline-flex; align-items:center; gap:.6rem; font-size:1rem; font-weight:800; color: var(--paper); letter-spacing:-.03em; }
        .ft__dash { width:24px; height:3px; background:linear-gradient(to right, var(--ink-faint) 0 5px, transparent 5px 9px, var(--seal) 9px 24px); }
        .ft__line { font-size:.875rem; line-height:1.7; margin-top:.9rem; max-width: 34ch; }
        .ft__names { font-size:.875rem; font-weight:700; color: var(--paper); margin-top:1rem; letter-spacing:-.02em; }

        .ft__nav, .ft__contact { display:flex; flex-direction:column; gap:.65rem; font-size:.875rem; }
        .ft__nav a:hover, .ft__contact a:hover { color: var(--paper); }

        .ft__bottom {
          margin-top: var(--s5); padding-top:1.5rem; border-top:1px solid var(--rule-dark);
          display:flex; justify-content:space-between; gap:1.5rem; align-items:flex-end; flex-wrap:wrap;
        }
        .ft__bottom p { font-size:.75rem; line-height:1.7; color: rgba(243,242,238,.4); max-width: 72ch; }
        .ft__copy { white-space: nowrap; }

        @media (max-width: 780px) {
          .ft__inner { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </footer>
  );
}
