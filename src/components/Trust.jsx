import React from 'react';

const STANCE = [
  {
    t: '될 가능성이 낮으면 시작하지 않습니다',
    d: '정책자금은 한 번 부결되면 상당 기간 재신청이 막히는 경우가 있습니다. 보수적으로 봐서 어렵다고 판단되면 제안 자체를 접고 그렇게 말씀드립니다. 일단 넣어 보는 방식은 대표님의 시간을 쓰는 일입니다.',
  },
  {
    t: '사업계획서는 대행이 아니라 공동 작성입니다',
    d: '대표님이 이해하지 못하는 사업계획서는 대면 심사에서 반드시 무너집니다. 인터뷰에서 출발해 구조를 함께 짜고, 예상 질문과 답변까지 준비합니다. 설명은 대표님이 하시되, 그 자리에서 막히지 않게 하는 것이 저희 일입니다.',
  },
  {
    t: '특허를 설명하는 쪽이 아니라 직접 내 본 쪽입니다',
    d: '기술평가 등급은 한도를 결정하는 가장 강한 변수입니다. V2G · 블록체인 · 해양소재 · AI 세무까지 13건의 특허와 상표를 직접 설계해 출원했습니다. 기업의 기술을 심사관이 읽는 언어로 옮길 수 있는 이유입니다.',
  },
  {
    t: '조달 이후 12개월까지 봅니다',
    d: '자금은 한 번 받고 끝나는 이벤트가 아니라 다음 라운드를 위한 기록입니다. 집행 증빙과 사후 관리, 다음 해 추가 조달까지 이어지도록 연간 로드맵으로 설계합니다.',
  },
];

const NUMBERS = [
  { v: '13건', l: '직접 출원한 특허 · 상표' },
  { v: '4편', l: '학술 논문' },
  { v: '28년', l: '기업 현장 경험' },
  { v: '2인', l: '상담부터 실행까지 직접' },
];

export default function Trust() {
  return (
    <section className="band tr">
      <div className="wrap">
        <div className="tr__head reveal">
          <p className="eyebrow">일하는 방식</p>
          <h2 className="h-sec">브로커와 다른 점은 여기서 갈립니다.</h2>
        </div>

        <div className="tr__nums reveal">
          {NUMBERS.map((n) => (
            <div key={n.l}>
              <span className="fig tr__v">{n.v}</span>
              <span className="tr__l">{n.l}</span>
            </div>
          ))}
        </div>

        <div className="tr__grid">
          {STANCE.map((s, i) => (
            <article key={s.t} className="tr__card reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <h3 className="tr__t">{s.t}</h3>
              <p className="tr__d">{s.d}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .tr__head { max-width: 54ch; margin-bottom: var(--s4); }
        .tr__nums {
          display:grid; grid-template-columns: repeat(4, 1fr); gap:1.5rem;
          padding: 1.75rem 0; border-top:2px solid var(--ink); border-bottom:1px solid var(--rule);
          margin-bottom: var(--s5);
        }
        .tr__nums > div { display:flex; flex-direction:column; gap:.25rem; }
        .tr__v { font-size: clamp(1.5rem, 3vw, 2.125rem); }
        .tr__l { font-size:.8125rem; color: var(--ink-soft); }

        .tr__grid { display:grid; grid-template-columns: repeat(2, 1fr); gap: 2.5rem 3rem; }
        .tr__t { font-size:1.1875rem; font-weight:700; letter-spacing:-.03em; line-height:1.45; margin-bottom:.85rem; padding-left:1rem; border-left:3px solid var(--seal); }
        .tr__d { font-size:.9375rem; line-height:1.85; color: var(--ink-soft); }

        @media (max-width: 780px) {
          .tr__nums { grid-template-columns: repeat(2, 1fr); gap:1.25rem; }
          .tr__grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
}
