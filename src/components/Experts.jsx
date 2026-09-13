import React from 'react';
import { experts } from '../data/experts';

export default function Experts() {
  return (
    <section id="experts" className="band ex">
      <div className="wrap">
        <div className="ex__head reveal">
          <p className="eyebrow">두 사람이 함께 봅니다</p>
          <h2 className="h-lead">
            상담은 전문가, 실무는 신입.
            <br />
            그 구조가 아닙니다.
          </h2>
          <p className="lede" style={{ marginTop: '1.5rem' }}>
            여신 실무를 아는 사람과 기업 구조를 바꾸는 사람이 같은 건을 함께 봅니다.
            당장 옮길 수 있는 대출과, 시간을 들여 만들어야 할 요건을 동시에 판단할 수 있는
            이유입니다.
          </p>
        </div>

        <div className="ex__grid">
          {experts.map((e) => (
            <article key={e.key} className="ex__card reveal">
              <div className="ex__portrait">
                <img src={e.photo} alt={`${e.name} 대표`} width="1000" height="1250" />
              </div>

              <div className="ex__body">
                <div className="ex__id">
                  <h3 className="ex__name">
                    {e.name}
                    <span className="ex__en">{e.en}</span>
                  </h3>
                  <p className="ex__role">{e.role}</p>
                </div>

                <p className="ex__tagline">{e.tagline}</p>
                <p className="ex__intro">{e.intro}</p>

                <div className="ex__block">
                  <p className="ex__lab">맡는 일</p>
                  <ul className="ex__focus">
                    {e.focus.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="ex__block">
                  <p className="ex__lab">근거</p>
                  <ul className="ex__creds">
                    {e.credentials.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .ex__head { max-width: 60ch; margin-bottom: var(--s6); }
        .ex__grid { display:grid; grid-template-columns: 1fr 1fr; gap: 2rem; }

        .ex__card { border-top: 2px solid var(--ink); padding-top: 1.75rem; }

        /* 두 인물 동일 비율 · 동일 크기 */
        .ex__portrait {
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--paper-2);
          margin-bottom: 1.75rem;
        }
        .ex__portrait img { width:100%; height:100%; object-fit: cover; object-position: center top; }

        .ex__id { display:flex; align-items:baseline; justify-content:space-between; gap:1rem; flex-wrap:wrap; padding-bottom:.9rem; border-bottom:1px solid var(--rule); margin-bottom:1.25rem; }
        .ex__name { font-size:1.75rem; font-weight:800; letter-spacing:-.04em; display:flex; align-items:baseline; gap:.6rem; }
        .ex__en { font-size:.8125rem; font-weight:500; color:var(--ink-faint); letter-spacing:0; }
        .ex__role { font-size:.875rem; font-weight:700; color: var(--seal); }

        .ex__tagline { font-size:1.125rem; font-weight:700; letter-spacing:-.03em; line-height:1.5; margin-bottom:.9rem; }
        .ex__intro { font-size:.9375rem; line-height:1.85; color: var(--ink-soft); }

        .ex__block { margin-top:1.75rem; }
        .ex__lab { font-size:.75rem; font-weight:700; color: var(--ink-faint); margin-bottom:.75rem; }

        .ex__focus { list-style:none; }
        .ex__focus li {
          font-size:.9375rem; line-height:1.6; padding: .6rem 0 .6rem 1.35rem;
          position:relative; border-bottom:1px solid var(--rule);
        }
        .ex__focus li::before { content:''; position:absolute; left:0; top:1.05em; width:8px; height:2px; background: var(--seal); }

        .ex__creds { list-style:none; }
        .ex__creds li { font-size:.875rem; line-height:1.7; color: var(--ink-soft); padding-left:1.35rem; position:relative; margin-bottom:.5rem; }
        .ex__creds li::before { content:''; position:absolute; left:0; top:.6em; width:5px; height:5px; background: var(--ink-faint); }

        @media (max-width: 900px) {
          .ex__grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
    </section>
  );
}
