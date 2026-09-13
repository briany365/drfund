import React from 'react';
import { experts } from '../data/experts';

export default function Hero() {
  return (
    <section id="top" className="hero band--ink">
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker">금융자금 · 정책자금 조달 컨설팅</p>

          <h1 className="hero__title">
            “안 된다”고 했던 그 자금,
            <br />
            숨통을 틔웁니다.
          </h1>

          <div className="channel hero__channel" aria-hidden="true">
            <span className="channel__blocked" />
            <span className="channel__node" />
            <span className="channel__open" />
          </div>

          <p className="lede hero__lede">
            담보가 부족해서, 등급이 낮아서, 이미 대출이 많아서. 다른 곳에서 거절이 나온
            자리가 저희 일이 시작되는 자리입니다. 기존 대출을 정리하고, 남아 있는 창구를
            찾고, 추가 자금까지 같은 설계 안에서 붙입니다.
          </p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--seal">
              무료 자금진단 신청
            </a>
            <a href="#cases" className="btn btn--ghost">
              최근 조달 사례 보기
            </a>
          </div>

        </div>

        <div className="hero__pair">
          {experts.map((e) => (
            <figure key={e.key} className="pf">
              <div className="pf__frame">
                <img src={e.photo} alt={`${e.name} 대표`} width="1000" height="1250" />
              </div>
              <figcaption className="pf__cap">
                <span className="pf__name">{e.name}</span>
                <span className="pf__role">{e.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

          <dl className="hero__facts">
            <div>
              <dt>대환 + 추가 조달</dt>
              <dd>기존 부채를 정리하면서 새 자금을 함께 붙입니다</dd>
            </div>
            <div>
              <dt>금융 · 정책 동시 설계</dt>
              <dd>은행 여신과 정책자금을 한 판에 놓고 순서를 정합니다</dd>
            </div>
            <div>
              <dt>전문가 2인이 직접</dt>
              <dd>상담부터 실행까지 같은 사람이 끝까지 붙습니다</dd>
            </div>
          </dl>
      </div>

      <style>{`
        .hero {
          background: var(--ink);
          color: var(--paper);
          padding: calc(72px + var(--s6)) 0 var(--s6);
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content:''; position:absolute; inset:0;
          background:
            repeating-linear-gradient(to bottom, rgba(243,242,238,.045) 0 1px, transparent 1px 46px);
          pointer-events:none;
        }
        .hero__inner {
          position: relative;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          grid-template-areas: "copy pair" "facts pair";
          grid-template-rows: auto auto;
          column-gap: var(--s6);
          row-gap: 0;
          align-items: center;
        }
        .hero__copy { grid-area: copy; }
        .hero__pair { grid-area: pair; }
        .hero__facts { grid-area: facts; }
        .hero__kicker {
          font-size: .8125rem; font-weight: 700; letter-spacing: .02em;
          color: var(--seal-soft); margin-bottom: 1.25rem;
        }
        .hero__title {
          font-size: clamp(2.25rem, 5.1vw, 4rem);
          font-weight: 800; line-height: 1.18; letter-spacing: -.045em;
          color: var(--paper);
        }
        .hero__channel { margin: 2rem 0 1.75rem; max-width: 380px; }
        .hero__lede { max-width: 46ch; }
        .hero__cta { display:flex; gap:.75rem; flex-wrap:wrap; margin-top: 2.25rem; }
        .hero__facts {
          margin-top: 3rem; padding-top: 1.75rem;
          border-top: 1px solid var(--rule-dark);
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }
        .hero__facts dt {
          font-size: .9375rem; font-weight: 700; letter-spacing: -.02em;
          color: var(--paper); margin-bottom: .35rem;
        }
        .hero__facts dd { font-size: .8125rem; line-height: 1.6; color: rgba(243,242,238,.55); }

        /* 두 인물 — 동일 크기, 동일 정렬 */
        .hero__pair { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .pf { margin: 0; }
        .pf__frame {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: var(--ink-2);
          border: 1px solid var(--rule-dark);
        }
        .pf__frame img { width:100%; height:100%; object-fit: cover; object-position: center top; }
        .pf__frame::after {
          content:''; position:absolute; inset:auto 0 0 0; height:38%;
          background: linear-gradient(to top, rgba(22,33,29,.85), transparent);
        }
        .pf__cap {
          margin-top: .9rem; padding-top: .75rem;
          border-top: 2px solid var(--seal);
          display: flex; flex-direction: column; gap: .15rem;
        }
        .pf__name { font-size: 1.25rem; font-weight: 800; letter-spacing: -.03em; color: var(--paper); }
        .pf__role { font-size: .8125rem; color: rgba(243,242,238,.6); }

        @media (max-width: 1000px) {
          .hero__inner {
            grid-template-columns: 1fr;
            grid-template-areas: "copy" "pair" "facts";
            row-gap: var(--s5);
          }
          .hero__pair { max-width: 520px; }
          .hero__facts { grid-template-columns: 1fr; gap: 1rem; }
        }
        @media (max-width: 560px) {
          .hero__pair { gap: .75rem; }
          .pf__name { font-size: 1.0625rem; }
          .pf__role { font-size: .75rem; }
        }
      `}</style>
    </section>
  );
}
