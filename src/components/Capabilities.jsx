import React from 'react';
import { Banknote, Receipt, Building2, ArrowLeftRight, Users, Presentation } from 'lucide-react';

const LEAD = {
  icon: <Banknote size={30} />,
  title: '자금조달',
  sub: '금융자금 · 정책자금 · 무상지원 · 바우처',
  line: '조달 가능한 재원을 전부 펼쳐 놓고 순서를 정합니다. 나머지 다섯 가지는 이 한도를 만들기 위해 움직입니다.',
  href: '#funding',
};

const REST = [
  {
    icon: <Receipt size={22} />,
    title: '절세 · 세무',
    sub: 'MSO · 가업승계 · 경정청구',
    line: '끌어온 자금이 세금으로 새지 않도록 구조를 짭니다.',
  },
  {
    icon: <Building2 size={22} />,
    title: '기업 운영',
    sub: '법인전환 · 연구소 · 인증 · 특허',
    line: '한도와 세제 혜택의 근거가 되는 자산을 만듭니다.',
  },
  {
    icon: <ArrowLeftRight size={22} />,
    title: '투자 · M&A',
    sub: '기업매각 · IR · 밸류에이션',
    line: '언제, 얼마에, 어떤 구조로 넘길지를 함께 결정합니다.',
  },
  {
    icon: <Users size={22} />,
    title: '노무 · 인사',
    sub: '고용지원금 · 4대보험 · 퇴직금',
    line: '사람에 드는 비용을 지원금으로 되돌립니다.',
  },
  {
    icon: <Presentation size={22} />,
    title: '영업 · 강의',
    sub: 'B2B · B2C · 설득 · 브리핑',
    line: '조달한 자금으로 만든 것을 실제로 팔리게 합니다.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="band band--panel cap">
      <div className="wrap">
        <div className="cap__head reveal">
          <p className="eyebrow">컨설팅 영역</p>
          <h2 className="h-sec">
            자금이 먼저고, 나머지 다섯은
            <br />
            그 자금을 지키기 위해 붙습니다.
          </h2>
          <p className="lede" style={{ marginTop: '1rem' }}>
            여섯 가지가 따로 놀면 어느 하나도 제대로 되지 않습니다. 조달만 하고 끝나는
            컨설팅은 절반짜리입니다.
          </p>
        </div>

        <a href={LEAD.href} className="cap__lead reveal">
          <div className="cap__leadTop">
            <span className="cap__leadIcon">{LEAD.icon}</span>
            <span className="seal-tag">지금 가장 많이 찾으시는 영역</span>
          </div>
          <h3 className="cap__leadTitle">{LEAD.title}</h3>
          <p className="cap__leadSub">{LEAD.sub}</p>
          <p className="cap__leadLine">{LEAD.line}</p>
          <span className="cap__leadGo">자금조달 자세히 보기</span>
        </a>

        <div className="cap__rest">
          {REST.map((r, i) => (
            <article key={r.title} className="cap__card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="cap__icon">{r.icon}</span>
              <h3 className="cap__title">{r.title}</h3>
              <p className="cap__sub">{r.sub}</p>
              <p className="cap__line">{r.line}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .cap__head { max-width: 58ch; margin-bottom: var(--s5); }

        .cap__lead {
          display:block; background: var(--ink); color: var(--paper);
          padding: 2.75rem 2.5rem; border-left: 4px solid var(--seal);
          margin-bottom: 1.5rem; transition: background .2s ease;
        }
        .cap__lead:hover { background: #0E1815; }
        .cap__leadTop { display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap; margin-bottom:1.5rem; }
        .cap__leadIcon { color: var(--seal-soft); display:flex; }
        .cap__lead .seal-tag { color: var(--seal-soft); border-color: rgba(216,102,107,.5); }
        .cap__leadTitle { font-size: clamp(1.875rem,4vw,2.75rem); font-weight:800; letter-spacing:-.045em; line-height:1.1; }
        .cap__leadSub { font-size:.9375rem; font-weight:600; color: var(--seal-soft); margin:.5rem 0 1.25rem; }
        .cap__leadLine { font-size:1.0625rem; line-height:1.75; color: rgba(243,242,238,.72); max-width: 52ch; }
        .cap__leadGo { display:inline-block; margin-top:1.75rem; font-size:.875rem; font-weight:700; color: var(--paper); border-bottom:2px solid var(--seal); padding-bottom:.25rem; }

        .cap__rest { display:grid; grid-template-columns: repeat(5, 1fr); gap:1px; background: var(--rule); border:1px solid var(--rule); }
        .cap__card { background: var(--paper); padding: 1.75rem 1.25rem; }
        .cap__icon { color: var(--ink-faint); display:flex; margin-bottom:1rem; }
        .cap__title { font-size:1.125rem; font-weight:800; letter-spacing:-.03em; }
        .cap__sub { font-size:.75rem; color: var(--seal); font-weight:600; margin:.25rem 0 .85rem; }
        .cap__line { font-size:.8438rem; line-height:1.7; color: var(--ink-soft); }

        @media (max-width: 1000px) { .cap__rest { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) {
          .cap__lead { padding: 2rem 1.5rem; }
          .cap__rest { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
