import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { label: '자금조달', href: '#funding' },
  { label: '조달 사례', href: '#cases' },
  { label: '두 전문가', href: '#experts' },
  { label: '컨설팅 영역', href: '#capabilities' },
  { label: '진단 신청', href: '#contact' },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`hd ${solid ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
      <div className="wrap hd__inner">
        <a href="#top" className="hd__mark">
          <span className="hd__dash" aria-hidden="true" />
          자금조달 컨설팅
        </a>

        <nav className="hd__nav">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--seal btn--sm">
            무료 자금진단
          </a>
        </nav>

        <button
          className="hd__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="hd__sheet">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--seal" onClick={() => setOpen(false)}>
            무료 자금진단 신청
          </a>
        </div>
      )}

      <style>{`
        .hd {
          position: fixed; inset: 0 0 auto 0; z-index: 100;
          transition: background .25s ease, border-color .25s ease;
          border-bottom: 1px solid transparent;
        }
        .hd.is-solid {
          background: rgba(243,242,238,.92);
          backdrop-filter: saturate(140%) blur(10px);
          border-bottom-color: var(--rule);
        }
        .hd__inner { display:flex; align-items:center; justify-content:space-between; height:72px; }
        .hd__mark {
          display:inline-flex; align-items:center; gap:.6rem;
          font-size:1rem; font-weight:800; letter-spacing:-.03em;
          color: var(--paper); transition: color .25s ease;
        }
        .hd.is-solid .hd__mark { color: var(--ink); }
        .hd__dash {
          width:24px; height:3px; flex-shrink:0;
          background:linear-gradient(to right, var(--ink-faint) 0 5px, transparent 5px 9px, var(--seal) 9px 24px);
        }
        .hd__nav { display:flex; align-items:center; gap:1.75rem; }
        .hd__nav a {
          font-size:.9375rem; font-weight:600; letter-spacing:-.02em;
          color: rgba(243,242,238,.72); transition: color .25s ease;
        }
        .hd__nav a:hover { color: var(--paper); }
        .hd.is-solid .hd__nav a { color:var(--ink-soft); }
        .hd.is-solid .hd__nav a:hover { color:var(--ink); }
        .hd__nav .btn, .hd.is-solid .hd__nav .btn { color:#fff; }
        .hd__burger { display:none; padding:.5rem; margin-right:-.5rem; color: var(--paper); }
        .hd.is-solid .hd__burger { color: var(--ink); }
        .hd__sheet {
          display:none; background:var(--paper);
          border-top:1px solid var(--rule); padding:var(--gut);
          height:calc(100vh - 72px);
        }
        .hd__sheet a:not(.btn) {
          display:block; padding:1.1rem 0; font-size:1.125rem; font-weight:700;
          letter-spacing:-.02em; border-bottom:1px solid var(--rule);
        }
        .hd__sheet .btn { margin-top:1.5rem; }
        @media (max-width: 880px) {
          .hd__nav { display:none; }
          .hd__burger { display:block; }
          .hd__sheet { display:block; }
          .hd.is-open { background: var(--paper); border-bottom-color: var(--rule); }
          .hd.is-open .hd__mark, .hd.is-open .hd__burger { color: var(--ink); }
        }
      `}</style>
    </header>
  );
}
