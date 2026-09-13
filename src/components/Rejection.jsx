import React from 'react';

const LINES = [
  { said: '담보가 부족합니다.', mean: '이 기관의 담보 기준에서만 부족합니다. 신용·보증 트랙은 기준이 다릅니다.' },
  { said: '신용등급이 기준에 못 미칩니다.', mean: '등급을 보는 창구가 있고, 기술과 실적을 보는 창구가 따로 있습니다.' },
  { said: '이미 대출이 많습니다.', mean: '총액이 아니라 구성이 문제인 경우가 많습니다. 정리하면 여지가 생깁니다.' },
  { said: '부결 이력이 있어 어렵습니다.', mean: '부결 사유를 제거하기 전에 다시 넣으면 같은 답이 돌아옵니다. 순서를 바꿉니다.' },
];

export default function Rejection() {
  return (
    <section className="band band--tight rej">
      <div className="wrap">
        <div className="rej__head reveal">
          <p className="eyebrow">거절 통보를 받으셨다면</p>
          <h2 className="h-sec">
            네 문장 중 하나를 들으셨을 겁니다.
          </h2>
          <p className="lede" style={{ marginTop: '1rem' }}>
            대부분의 거절은 “이 회사는 안 된다”가 아니라 “지금 이 창구에서 이 서류로는
            안 된다”는 뜻입니다. 창구를 바꾸고 서류를 다시 쓰면 답이 달라지는 경우가
            있습니다. 물론 아무리 해도 어려운 건도 있습니다. 그 판단을 먼저 해드립니다.
          </p>
        </div>

        <ul className="rej__list">
          {LINES.map((l, i) => (
            <li key={i} className="rej__item reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <p className="rej__said">“{l.said}”</p>
              <div className="rej__arrow" aria-hidden="true">
                <span />
              </div>
              <p className="rej__mean">{l.mean}</p>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .rej__head { max-width: 62ch; margin-bottom: var(--s5); }
        .rej__list { list-style:none; display:grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--rule); border: 1px solid var(--rule); }
        .rej__item { background: var(--paper); padding: 2rem 1.75rem; }
        .rej__said {
          font-size: 1.25rem; font-weight: 700; letter-spacing: -.03em;
          color: var(--ink-faint); text-decoration: line-through;
          text-decoration-color: rgba(176,35,42,.55); text-decoration-thickness: 2px;
        }
        .rej__arrow { margin: 1rem 0; height: 2px; display:flex; }
        .rej__arrow span {
          display:block; width: 46px; height:2px; background: var(--seal);
        }
        .rej__mean { font-size: .9375rem; line-height: 1.75; color: var(--ink); }
        @media (max-width: 780px) {
          .rej__list { grid-template-columns: 1fr; }
          .rej__item { padding: 1.5rem 1.25rem; }
          .rej__said { font-size: 1.0625rem; }
        }
      `}</style>
    </section>
  );
}
