import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const INDUSTRIES = [
  {
    name: '제조업',
    headline: '한도가 가장 크게 열리는 업종. 관건은 기술을 문서로 증명하는 일입니다.',
    points: [
      '같은 매출이어도 서비스업보다 높은 한도 설계가 가능한 우대 대상',
      'OEM · 외주 생산 중이라면 업종 정비만으로 제조 트랙에 진입',
      '기업부설연구소와 특허로 기술평가 등급을 올려 보증 한도를 상향',
      '설비 투자는 스마트공장 · 제조데이터 바우처로 부담을 분산',
    ],
    docs: ['공장등록증 · 임대차', '생산공정도 · BOM', '특허 · 실용신안', '발주서 · 수주잔고'],
  },
  {
    name: '도 · 소매 유통',
    headline: '단순 도소매 코드로는 막힙니다. 업종 구조를 다시 짜는 것이 출발점입니다.',
    points: [
      '단순 도소매만으로는 우대 트랙 진입이 어려워 업종 추가 설계가 필요',
      '자체 브랜드나 기획 상품이 있다면 제조 · 기획 기능을 업종에 반영',
      '온라인 확장 시 앱 · 웹 개발 바우처와 수출바우처를 자금과 결합',
      '재고 회전과 매입채무 주기로 운전자금 소요액을 논리적으로 증빙',
    ],
    docs: ['사업자등록증(업종코드)', '매입 · 매출 원장', '거래처 계약서', '재고 실사 자료'],
  },
  {
    name: '병 · 의원',
    headline: '자금 조달과 세부담 설계를 따로 하면 손해입니다. 한 판에서 짜야 합니다.',
    points: [
      '개설 · 이전 · 증설 시설자금과 운전자금 트랙을 병행 검토',
      'MSO(가족법인) 구조로 조달 주체와 세부담 주체를 분리',
      '벤처투자기업인증 · 기업부설연구소로 세감면과 조달 조건을 동시 확보',
      '배당과 퇴직소득 설계로 조달한 자금이 종합소득세로 새는 것을 차단',
    ],
    docs: ['의료기관 개설신고증', '건강보험 청구 실적', '장비 견적서 · 임대차', '종합소득세 신고서'],
  },
  {
    name: 'SW · IT',
    headline: '매출이 적어도 됩니다. 기술이 자산으로 잡히면 한도가 따라옵니다.',
    points: [
      '재무가 약한 초기 기업은 기술평가 트랙으로 심사 창구를 우회',
      '특허와 SW 저작권 확보로 기술평가 등급을 직접 끌어올림',
      '벤처기업인증과 기업부설연구소 조합으로 세액공제와 한도를 동시에',
      'R&D 무상 과제와 개발자금 융자를 시차를 두고 이중 배치',
    ],
    docs: ['SW 저작권 등록증', '특허 출원 · 등록', '개발 인력 명부 · 4대보험', '기술 개발 로드맵'],
  },
  {
    name: '임대 · 부동산',
    headline: '감정가가 내려가도 현금흐름이 남아 있으면 다시 짤 여지가 있습니다.',
    points: [
      '감정가 하락으로 한도가 줄어든 담보를 기관별로 다시 산정',
      '임대 현금흐름을 상환 능력의 근거로 재작성해 심사 논리를 보완',
      '마이너스통장 등 고금리 회전 자금을 먼저 저금리로 대환',
      '담보 여력을 전부 쓰지 않고 일부를 다음 조달용으로 남겨 배치',
    ],
    docs: ['등기부등본 · 건축물대장', '임대차 계약서 일람', '임대수입 내역', '기존 대출 약정서'],
  },
  {
    name: '건설 · 서비스 외',
    headline: '업종마다 통하는 기관이 다릅니다. 처음 듣는 업종은 없습니다.',
    points: [
      '건설 · 인력 · 학원 · 물류 등 업종별로 통하는 기관과 트랙을 선별',
      '면허 · 등록증 기반 업종은 자격 요건 정비가 심사의 절반',
      '수주잔고와 계약 파이프라인을 운전자금 소요 근거로 문서화',
      '고용 규모가 큰 업종은 고용지원금과 자금을 함께 설계',
    ],
    docs: ['업종 면허 · 등록증', '수주 계약서 · 잔고', '4대보험 사업장 자료', '재무제표 3개년'],
  },
];

const STEPS = [
  { t: '무료 사전 진단', d: '사업자등록증, 최근 재무제표, 기존 대출 현황만 주시면 지금 열려 있는 창구와 예상 한도를 먼저 확인합니다.' },
  { t: '가능성 판단', d: '여기서 어렵다고 판단되면 그렇게 말씀드립니다. 될 가능성이 낮은 건을 일단 넣어 보는 방식은 쓰지 않습니다.' },
  { t: '부채 구조 정리', d: '기존 대출의 실효금리와 상환 일정을 계산해 대환할 것과 남길 것을 나눕니다.' },
  { t: '조달 설계서 작성', d: '금융 · 정책 · 무상지원을 어떤 순서와 시점으로 배치할지 금액과 함께 문서로 만듭니다.' },
  { t: '요건 세팅', d: '필요하면 업종 정비, 연구소 설립, 특허 출원, 인증 취득을 먼저 합니다. 승인 여부가 갈리는 구간입니다.' },
  { t: '서류 작성 · 신청', d: '사업계획서와 기술 문서를 대표님과 함께 작성하고 기관별 양식에 맞춰 제출합니다.' },
  { t: '심사 대응', d: '현장 실사와 대면 평가에서 나올 질문을 미리 정리하고, 대표님이 직접 답변하실 수 있도록 준비합니다.' },
  { t: '실행 · 사후관리', d: '집행 증빙과 사후 보고를 정리하고, 다음 라운드 조달까지 이어지도록 관리합니다.' },
];

const FAQ = [
  {
    q: '다른 곳에서 이미 거절당했는데도 가능한가요?',
    a: '거절 사유에 따라 다릅니다. 담보 부족이나 한도 소진처럼 창구를 바꾸면 풀리는 사유가 있고, 연체나 세금 체납처럼 먼저 해소해야 하는 사유가 있습니다. 진단에서 어느 쪽인지 먼저 확인해 드립니다.',
  },
  {
    q: '기존 대출이 많은데 대환이 실제로 되나요?',
    a: '총액보다 구성이 문제인 경우가 많습니다. 고금리 회전 자금이 섞여 있으면 그것부터 정리해야 새 자금을 붙일 여지가 생깁니다. 다만 기관별 중복 제한과 부채비율 기준이 있어 전부 옮길 수 있는지는 건별로 다릅니다.',
  },
  {
    q: '담보가 전혀 없어도 됩니까?',
    a: '담보 없이 신용이나 보증서로 진행하는 트랙이 있습니다. 이 경우 재무 지표나 기술평가가 담보를 대신하는 근거가 되므로, 어떤 근거를 만들 수 있는지가 관건입니다.',
  },
  {
    q: '개인사업자도 되나요?',
    a: '가능합니다. 다만 업종과 규모에 따라 법인 전환이 한도와 세부담 양쪽에서 유리한 경우가 많습니다. 전환 시점과 방식에 따라 비용 차이가 크므로 자금 신청 전에 함께 검토하시는 편이 낫습니다.',
  },
  {
    q: '얼마나 걸리나요?',
    a: '요건이 이미 갖춰진 기업은 신청부터 실행까지 수 주 단위입니다. 업종 정비나 인증 · 연구소 설립이 먼저 필요하면 수개월이 걸립니다. 진단 단계에서 어느 쪽인지 말씀드립니다.',
  },
  {
    q: '비용은 어떻게 되나요?',
    a: '기업 상황과 작업 범위에 따라 다릅니다. 업무 범위 · 수행 기간 · 책임 범위를 계약서에 명시한 뒤 착수하며, 사전 진단은 비용을 받지 않습니다.',
  },
];

export default function Process() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(0);
  const ind = INDUSTRIES[tab];

  return (
    <>
      {/* ── 업종별 ── */}
      <section className="band band--panel ind">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '58ch', marginBottom: 'var(--s5)' }}>
            <p className="eyebrow">업종별 접근</p>
            <h2 className="h-sec">제조업에 통하는 방식이 병의원에는 통하지 않습니다.</h2>
          </div>

          <div className="ind__tabs" role="tablist">
            {INDUSTRIES.map((it, i) => (
              <button
                key={it.name}
                role="tab"
                aria-selected={tab === i}
                className={`ind__tab ${tab === i ? 'is-on' : ''}`}
                onClick={() => setTab(i)}
              >
                {it.name}
              </button>
            ))}
          </div>

          <div className="ind__panel" role="tabpanel">
            <h3 className="ind__headline">{ind.headline}</h3>
            <div className="ind__cols">
              <ul className="ind__points">
                {ind.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="ind__docs">
                <p className="ind__docsLabel">주요 준비 서류</p>
                {ind.docs.map((d) => (
                  <span key={d}>{d}</span>
                ))}
                <p className="fine" style={{ marginTop: '1rem' }}>
                  기관과 사업별로 요구 서류가 달라집니다. 진단 시 목록을 정리해 드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .ind__tabs { display:flex; flex-wrap:wrap; gap:.5rem; margin-bottom:2rem; }
          .ind__tab {
            padding:.7rem 1.15rem; font-size:.9375rem; font-weight:600; letter-spacing:-.02em;
            border:1px solid var(--rule); background:var(--paper); color:var(--ink-soft);
            border-radius:2px; transition: all .18s ease;
          }
          .ind__tab:hover { border-color: var(--ink); color: var(--ink); }
          .ind__tab.is-on { background:var(--ink); border-color:var(--ink); color:var(--paper); }
          .ind__panel { background:var(--paper); border:1px solid var(--rule); border-top:3px solid var(--seal); padding: 2.5rem; }
          .ind__headline { font-size: clamp(1.125rem,2.2vw,1.5rem); font-weight:700; letter-spacing:-.03em; line-height:1.5; margin-bottom:2rem; max-width:40ch; }
          .ind__cols { display:grid; grid-template-columns: 1.35fr 1fr; gap: var(--s5); }
          .ind__points { list-style:none; }
          .ind__points li { font-size:.9375rem; line-height:1.75; color:var(--ink-soft); padding-left:1.35rem; position:relative; margin-bottom:1rem; }
          .ind__points li::before { content:''; position:absolute; left:0; top:.65em; width:8px; height:2px; background:var(--seal); }
          .ind__docsLabel { font-size:.8125rem; font-weight:700; color:var(--ink); margin-bottom:.85rem; }
          .ind__docs span { display:block; font-size:.875rem; color:var(--ink-soft); padding:.6rem .85rem; background:var(--paper-2); margin-bottom:.4rem; }
          @media (max-width: 860px) {
            .ind__panel { padding: 1.75rem 1.25rem; }
            .ind__cols { grid-template-columns: 1fr; gap: 2rem; }
          }
        `}</style>
      </section>

      {/* ── 절차 ── */}
      <section className="band proc">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '58ch', marginBottom: 'var(--s5)' }}>
            <p className="eyebrow">진행 순서</p>
            <h2 className="h-sec">신청부터가 아니라 판단부터 시작합니다.</h2>
            <p className="lede" style={{ marginTop: '1rem' }}>
              부결은 시간 손실입니다. 될 준비가 되었는지를 먼저 확인하고, 아니면 요건을
              먼저 만듭니다. 지금 넣어서 떨어지는 것보다 석 달 뒤에 되는 쪽이 언제나
              빠릅니다.
            </p>
          </div>

          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.t} className="step reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="step__n fig">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="step__t">{s.t}</h3>
                  <p className="step__d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <style>{`
          .steps { list-style:none; border-top:1px solid var(--rule); }
          .step { display:grid; grid-template-columns: 5rem 1fr; gap:1.5rem; padding:1.6rem 0; border-bottom:1px solid var(--rule); align-items:start; }
          .step__n { font-size:1.125rem; color:var(--seal); padding-top:.15rem; }
          .step__t { font-size:1.125rem; font-weight:700; letter-spacing:-.025em; margin-bottom:.35rem; }
          .step__d { font-size:.9375rem; line-height:1.8; color:var(--ink-soft); max-width:62ch; }
          @media (max-width: 640px) {
            .step { grid-template-columns: 3rem 1fr; gap:1rem; }
            .step__n { font-size:1rem; }
          }
        `}</style>
      </section>

      {/* ── FAQ ── */}
      <section className="band band--tight band--panel faq">
        <div className="wrap">
          <div className="reveal" style={{ marginBottom: 'var(--s4)' }}>
            <p className="eyebrow">자주 받는 질문</p>
            <h2 className="h-sec">먼저 물어보시는 것들</h2>
          </div>

          <div className="faq__list">
            {FAQ.map((f, i) => (
              <div key={f.q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{f.q}</span>
                  <ChevronDown size={18} className="faq__chev" />
                </button>
                {open === i && <p className="faq__a">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .faq__list { border-top:1px solid var(--rule); }
          .faq__item { border-bottom:1px solid var(--rule); }
          .faq__q {
            width:100%; display:flex; align-items:center; justify-content:space-between; gap:1.5rem;
            padding:1.4rem 0; text-align:left; font-size:1.0625rem; font-weight:700; letter-spacing:-.025em;
          }
          .faq__chev { flex-shrink:0; color:var(--ink-faint); transition: transform .2s ease; }
          .faq__item.is-open .faq__chev { transform: rotate(180deg); color: var(--seal); }
          .faq__a { font-size:.9375rem; line-height:1.85; color:var(--ink-soft); max-width:68ch; padding-bottom:1.5rem; }
          @media (max-width: 640px) { .faq__q { font-size:.9688rem; } }
        `}</style>
      </section>
    </>
  );
}
