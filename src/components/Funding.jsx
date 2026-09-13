import React from 'react';
import {
  Landmark,
  Building2,
  Gift,
  RefreshCcw,
  ShieldCheck,
  Cpu,
  Layers,
} from 'lucide-react';

const PILLARS = [
  {
    icon: <Landmark size={26} />,
    name: '금융자금',
    kind: '은행 · 제2금융권 여신',
    body:
      '담보대출, 신용대출, 마이너스통장, 대환. 가장 빠르게 움직일 수 있는 자금이지만 조건 차이가 가장 큰 영역이기도 합니다. 같은 기업이라도 어느 창구에서 어떤 근거로 심사를 받느냐에 따라 금리와 한도가 달라집니다.',
    items: ['기존 대출 전액 대환 · 금리 재조정', '담보 여력 소진 기업의 신용 트랙 전환', '보증서 담보 방식의 한도 확보', '한도 여지가 남은 기관 선별'],
  },
  {
    icon: <Building2 size={26} />,
    name: '정책자금',
    kind: '융자 · 저금리 장기',
    body:
      '정부와 공공기관이 재원을 대는 저금리 장기 자금입니다. 거치기간이 길어 초기 상환 부담을 미룰 수 있습니다. 다만 한 번 부결되면 상당 기간 재신청이 막히는 경우가 있어, 넣는 순서와 시점이 승인 여부만큼 중요합니다.',
    items: ['운전자금 · 시설자금 · 창업자금 · 수출자금', '기관별 우대 요건에 맞춘 신청 순서 설계', '부동산 담보 없이 보증서로 가능', '개인사업자 · 법인 모두 신청 가능'],
  },
  {
    icon: <Gift size={26} />,
    name: '무상지원 · 바우처',
    kind: '보조금 · 상환의무 없음',
    body:
      '갚지 않아도 되는 재원입니다. 경쟁률이 높고 집행 증빙 의무가 따르지만, 선정되면 자기부담 없이 사업비를 확보할 수 있습니다. 융자보다 먼저 훑어야 실제로 손에 남는 금액이 달라집니다.',
    items: ['창업사업화 · R&D 과제', '고용지원금', '수출 · 데이터 · 제조 바우처', '지자체 자체 보조사업'],
  },
];

const PATHS = [
  {
    icon: <RefreshCcw size={24} />,
    name: '대환으로 먼저 정리합니다',
    body:
      '고금리 차입과 마이너스통장이 섞여 있으면 새 자금을 붙일 여지 자체가 없습니다. 흩어진 대출을 한 장으로 모아 실효금리를 계산하고, 낮은 조건으로 옮긴 뒤에 추가 조달을 시작합니다.',
  },
  {
    icon: <ShieldCheck size={24} />,
    name: '담보가 아닌 트랙으로 옮깁니다',
    body:
      '담보 여력이 바닥났다는 것은 담보를 보는 창구가 끝났다는 뜻이지, 자금이 끝났다는 뜻은 아닙니다. 신용과 보증을 기준으로 보는 기관으로 심사 창구를 바꿉니다.',
  },
  {
    icon: <Cpu size={24} />,
    name: '기술을 한도의 근거로 만듭니다',
    body:
      '매출과 자산이 부족한 기업은 재무제표로는 계속 같은 답을 받습니다. 특허와 개발 실적을 기술평가가 인정하는 문서로 바꾸면, 숫자가 쌓이기 전에도 한도가 열립니다.',
  },
  {
    icon: <Layers size={24} />,
    name: '여러 재원을 겹쳐 배치합니다',
    body:
      '한 기관에서 전액을 받으려 하면 한도에 먼저 걸립니다. 금융 · 정책 · 무상지원을 시차를 두고 나눠 배치하면 총 조달액이 달라집니다.',
  },
];

const LADDER = [
  { step: '지금 상태', desc: '매출과 자산만으로 산정된 한도', tone: 'base' },
  { step: '부채 구조 정리', desc: '고금리 차입 대환, 부채비율 재편', tone: 'up' },
  { step: '업종 구조 정비', desc: '우대 트랙에 들어가도록 업종 반영', tone: 'up' },
  { step: '기술 자산화', desc: '특허 · 연구소로 기술평가 등급 상향', tone: 'up' },
  { step: '인증 조합', desc: '벤처 · 이노비즈 · 메인비즈 등 배치', tone: 'up' },
  { step: '무상 · 바우처 병행', desc: '상환의무 없는 재원을 별도 트랙으로 추가', tone: 'up' },
];

const AGENCIES = [
  { name: '시중은행 · 제2금융권', role: '담보 · 신용 여신, 대환, 한도 재산정' },
  { name: '중소벤처기업진흥공단', role: '직접대출, 창업기반지원, 신시장진출' },
  { name: '기술보증기금', role: '기술평가 기반 보증, R&D 연계' },
  { name: '신용보증기금', role: '신용보증, 유동화회사보증' },
  { name: '소상공인시장진흥공단', role: '소상공인 정책자금, 성장촉진' },
  { name: '지역신용보증재단', role: '지역 소상공인 보증, 지자체 이차보전' },
];

export default function Funding() {
  return (
    <section id="funding" className="band fund">
      <div className="wrap">
        {/* ── 헤드 ── */}
        <div className="fund__head reveal">
          <p className="eyebrow">컨설팅 영역 01 — 자금조달</p>
          <h2 className="h-lead">
            자금은 찾는 것이 아니라
            <br />
            순서를 정하는 일입니다.
          </h2>
          <p className="lede" style={{ marginTop: '1.5rem' }}>
            같은 재무제표를 들고 갔는데 어떤 기업은 1억을 받고 어떤 기업은 4억을 받습니다.
            차이는 정보가 아니라 구성에서 나옵니다. 어떤 부채를 먼저 정리하고, 어느 기관을
            먼저 두드리고, 무엇을 나중을 위해 남겨 둘지가 실제 조달 총액을 바꿉니다.
          </p>
        </div>

        {/* ── 세 갈래 ── */}
        <div className="fund__pillars">
          {PILLARS.map((p, i) => (
            <article key={p.name} className="pil reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="pil__top">
                <span className="pil__icon">{p.icon}</span>
                <span className="pil__kind">{p.kind}</span>
              </div>
              <h3 className="pil__name">{p.name}</h3>
              <p className="pil__body">{p.body}</p>
              <ul className="pil__items">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* ── 막힌 자리를 여는 방법 ── */}
      <div className="fund__paths band--ink">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '58ch', marginBottom: 'var(--s5)' }}>
            <p className="eyebrow">막힌 자리에서 하는 일</p>
            <h2 className="h-sec" style={{ color: 'var(--paper)' }}>
              전부 막혔다는 말은 보통
              <br />
              한 방향만 두드렸다는 뜻입니다.
            </h2>
          </div>

          <div className="paths">
            {PATHS.map((p, i) => (
              <article key={p.name} className="path reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <span className="path__icon">{p.icon}</span>
                <h3 className="path__name">{p.name}</h3>
                <p className="path__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── 한도 사다리 + 기관 ── */}
      <div className="wrap fund__grid">
        <div className="reveal">
          <p className="eyebrow">한도가 올라가는 순서</p>
          <h3 className="h-sub" style={{ marginBottom: '1rem' }}>
            한도는 고정값이 아니라 결과값입니다.
          </h3>
          <p className="fine" style={{ marginBottom: '2rem', maxWidth: '46ch' }}>
            아래는 순서대로 쌓이는 구조입니다. 상향 폭은 업종과 재무 상태, 기관 정책에 따라
            달라지며 모든 기업에 같은 방식으로 적용되지는 않습니다.
          </p>

          <ol className="ladder">
            {LADDER.map((l, i) => (
              <li key={l.step} className={`ladder__row ladder__row--${l.tone}`}>
                <span className="ladder__n">{i === 0 ? '—' : `+${i}`}</span>
                <span className="ladder__txt">
                  <b>{l.step}</b>
                  <em>{l.desc}</em>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal">
          <p className="eyebrow">두드릴 수 있는 창구</p>
          <h3 className="h-sub" style={{ marginBottom: '1rem' }}>
            기관마다 보는 것이 다릅니다.
          </h3>
          <p className="fine" style={{ marginBottom: '2rem', maxWidth: '46ch' }}>
            한 곳에서 거절되었다고 전부 닫힌 것이 아닙니다. 동시에 진행할 수 있는 기관과
            순서를 지켜야 하는 기관을 구분해 정리해 드립니다.
          </p>

          <ul className="agencies">
            {AGENCIES.map((a) => (
              <li key={a.name}>
                <b>{a.name}</b>
                <span>{a.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .fund { padding-bottom: 0; }
        .fund__head { max-width: 64ch; margin-bottom: var(--s6); }

        .fund__pillars { display:grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule); border-top: 2px solid var(--ink); border-bottom: 1px solid var(--rule); }
        .pil { background: var(--paper); padding: 2.25rem 1.75rem; }
        .pil__top { display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-bottom:1.25rem; }
        .pil__icon { color: var(--seal); display:flex; }
        .pil__kind { font-size:.75rem; font-weight:600; color: var(--ink-faint); }
        .pil__name { font-size:1.5rem; font-weight:800; letter-spacing:-.035em; margin-bottom:.85rem; }
        .pil__body { font-size:.9375rem; line-height:1.8; color: var(--ink-soft); }
        .pil__items { list-style:none; margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid var(--rule); }
        .pil__items li { font-size:.875rem; line-height:1.6; padding-left:.95rem; position:relative; margin-bottom:.55rem; }
        .pil__items li::before { content:''; position:absolute; left:0; top:.62em; width:5px; height:5px; background:var(--seal); }

        .fund__paths { margin-top: var(--s7); padding: var(--s7) 0; }
        .paths { display:grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: var(--rule-dark); border:1px solid var(--rule-dark); }
        .path { background: var(--ink); padding: 2rem 1.75rem; }
        .path__icon { color: var(--seal-soft); display:flex; margin-bottom:1.1rem; }
        .path__name { font-size:1.1875rem; font-weight:700; letter-spacing:-.03em; color:var(--paper); margin-bottom:.75rem; }
        .path__body { font-size:.9375rem; line-height:1.8; color: rgba(243,242,238,.62); }

        .fund__grid { display:grid; grid-template-columns: 1fr 1fr; gap: var(--s6); padding-top: var(--s7); padding-bottom: var(--s7); }

        .ladder { list-style:none; counter-reset:none; }
        .ladder__row { display:flex; gap:1.1rem; align-items:baseline; padding: .95rem 1.1rem; border:1px solid var(--rule); margin-bottom:-1px; }
        .ladder__row--base { background: var(--paper-2); }
        .ladder__row--up { background: var(--paper); border-left: 3px solid var(--seal); }
        .ladder__n { font-size:.8125rem; font-weight:800; color: var(--seal); min-width:1.6rem; font-variant-numeric: tabular-nums; }
        .ladder__row--base .ladder__n { color: var(--ink-faint); }
        .ladder__txt { display:flex; flex-direction:column; gap:.15rem; }
        .ladder__txt b { font-size:1rem; font-weight:700; letter-spacing:-.02em; }
        .ladder__txt em { font-style:normal; font-size:.8438rem; color: var(--ink-soft); }

        .agencies { list-style:none; border-top:1px solid var(--rule); }
        .agencies li { padding: 1.1rem 0; border-bottom:1px solid var(--rule); display:flex; flex-direction:column; gap:.2rem; }
        .agencies b { font-size:1rem; font-weight:700; letter-spacing:-.02em; }
        .agencies span { font-size:.8438rem; color: var(--ink-soft); }

        @media (max-width: 960px) {
          .fund__pillars { grid-template-columns: 1fr; }
          .paths { grid-template-columns: 1fr; }
          .fund__grid { grid-template-columns: 1fr; gap: var(--s5); }
        }
      `}</style>
    </section>
  );
}
