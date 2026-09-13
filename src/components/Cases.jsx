import React from 'react';
import { cases, caseDisclaimer } from '../data/cases';

export default function Cases() {
  return (
    <section id="cases" className="band cs band--ink">
      <div className="wrap">
        <div className="cs__head reveal">
          <p className="eyebrow">최근 조달 사례</p>
          <h2 className="h-lead" style={{ color: 'var(--paper)' }}>
            막혀 있던 자리에서
            <br />
            실제로 나온 결과입니다.
          </h2>
          <p className="lede" style={{ marginTop: '1.5rem' }}>
            네 건 모두 다른 곳에서 어렵다는 답을 받은 뒤에 시작된 건입니다. 어떤 상태였고,
            어디가 막혀 있었고, 무엇을 바꿨는지 순서대로 정리했습니다.
          </p>
        </div>

        <div className="cs__list">
          {cases.map((c) => (
            <article key={c.no} className="cs__item reveal">
              <header className="cs__bar">
                <span className="cs__no fig">CASE {c.no}</span>
                <span className="cs__sector">{c.sector}</span>
                <span className="cs__subject">{c.subject}</span>
              </header>

              <h3 className="cs__title">{c.title}</h3>

              <div className="cs__flow">
                <div className="cs__before">
                  <p className="cs__lab">조달 전</p>
                  <ul>
                    {c.before.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="cs__blocked">{c.blocked}</p>
                </div>

                <div className="cs__pipe" aria-hidden="true">
                  <span className="cs__pipeLine" />
                  <span className="cs__pipeDot" />
                </div>

                <div className="cs__after">
                  <p className="cs__lab cs__lab--seal">조달 결과</p>
                  <div className="cs__figs">
                    {c.figures.map((f) => (
                      <div key={f.label} className="cs__fig">
                        <span className="fig cs__figV">{f.value}</span>
                        <span className="cs__figL">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="cs__result">{c.result}</p>
                  <p className="cs__effect">{c.effect}</p>
                </div>
              </div>

              <div className="cs__approach">
                <p className="cs__lab">무엇을 바꿨나</p>
                <ol>
                  {c.approach.map((a, i) => (
                    <li key={a}>
                      <span className="fig">{i + 1}</span>
                      {a}
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>

        <p className="cs__note">{caseDisclaimer}</p>
      </div>

      <style>{`
        .cs__head { max-width: 60ch; margin-bottom: var(--s6); }
        .cs__list { display:flex; flex-direction:column; gap: 1.5rem; }

        .cs__item {
          background: var(--ink-2);
          border: 1px solid var(--rule-dark);
          border-left: 3px solid var(--seal);
          padding: 2.25rem 2rem;
        }

        .cs__bar { display:flex; flex-wrap:wrap; align-items:center; gap:.75rem; margin-bottom:1.1rem; }
        .cs__no { font-size:.8125rem; color: var(--seal-soft); letter-spacing:.02em; }
        .cs__sector { font-size:.8125rem; font-weight:600; color: var(--paper); border:1px solid var(--rule-dark); padding:.2rem .6rem; }
        .cs__subject { font-size:.8125rem; color: rgba(243,242,238,.5); }

        .cs__title {
          font-size: clamp(1.25rem, 2.4vw, 1.625rem); font-weight:700; letter-spacing:-.035em;
          line-height:1.45; color: var(--paper); margin-bottom:2rem; max-width: 34ch;
        }

        .cs__flow { display:grid; grid-template-columns: 1fr 56px 1.05fr; align-items:stretch; }

        .cs__lab { font-size:.75rem; font-weight:700; letter-spacing:.02em; color: rgba(243,242,238,.45); margin-bottom:1rem; }
        .cs__lab--seal { color: var(--seal-soft); }

        .cs__before ul { list-style:none; }
        .cs__before li {
          font-size:.9063rem; line-height:1.7; color: rgba(243,242,238,.62);
          padding-left:1.1rem; position:relative; margin-bottom:.65rem;
        }
        .cs__before li::before { content:''; position:absolute; left:0; top:.65em; width:6px; height:2px; background: var(--ink-faint); }
        .cs__blocked {
          margin-top:1.25rem; padding-top:1rem; border-top:1px dashed rgba(243,242,238,.18);
          font-size:.875rem; line-height:1.7; color: var(--ink-faint); font-style: italic;
        }

        .cs__pipe { display:flex; align-items:center; justify-content:center; position:relative; }
        .cs__pipeLine {
          width:2px; height:100%;
          background: linear-gradient(to bottom, rgba(243,242,238,.12), var(--seal));
        }
        .cs__pipeDot {
          position:absolute; width:10px; height:10px; border-radius:50%; background: var(--seal);
          top:50%; transform: translateY(-50%);
        }

        .cs__after { padding-left: 0; }
        .cs__figs { display:flex; flex-wrap:wrap; gap: 1.75rem; margin-bottom:1.25rem; }
        .cs__fig { display:flex; flex-direction:column; gap:.2rem; }
        .cs__figV { font-size: clamp(1.75rem, 3.6vw, 2.5rem); color: var(--paper); line-height:1.05; }
        .cs__figL { font-size:.8125rem; color: var(--seal-soft); }
        .cs__result { font-size:.9375rem; line-height:1.75; color: var(--paper); font-weight:600; letter-spacing:-.02em; }
        .cs__effect { font-size:.875rem; line-height:1.7; color: rgba(243,242,238,.55); margin-top:.5rem; }

        .cs__approach { margin-top:2rem; padding-top:1.75rem; border-top:1px solid var(--rule-dark); }
        .cs__approach ol { list-style:none; display:grid; grid-template-columns: repeat(3, 1fr); gap:1.5rem; }
        .cs__approach li { font-size:.875rem; line-height:1.7; color: rgba(243,242,238,.68); }
        .cs__approach li .fig {
          display:block; font-size:.75rem; color: var(--seal-soft); margin-bottom:.4rem;
        }

        .cs__note {
          margin-top: var(--s4); padding-top:1.25rem; border-top:1px solid var(--rule-dark);
          font-size:.75rem; line-height:1.75; color: rgba(243,242,238,.42); max-width: 78ch;
        }

        @media (max-width: 900px) {
          .cs__item { padding: 1.75rem 1.25rem; }
          .cs__flow { grid-template-columns: 1fr; gap: 1.5rem; }
          .cs__pipe { height: 34px; }
          .cs__pipeLine { width:100%; height:2px; background: linear-gradient(to right, rgba(243,242,238,.12), var(--seal)); }
          .cs__pipeDot { top:50%; left:50%; transform: translate(-50%,-50%); }
          .cs__approach ol { grid-template-columns: 1fr; gap:1rem; }
        }
      `}</style>
    </section>
  );
}
