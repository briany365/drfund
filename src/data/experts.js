/**
 * 두 전문가 프로필.
 *
 * ※ 임두만 대표 항목 중 CHECK 표시가 붙은 값은 확인된 정보로 교체해 주세요.
 *   (role / tagline / credentials / focus / career)
 *   이 파일만 고치면 사이트 전체(히어로 · 전문가 섹션 · 푸터)에 함께 반영됩니다.
 */

export const experts = [
  {
    key: 'jung',
    name: '정병현',
    en: 'Brian Chong',
    role: '자금 구조 설계 · 정책자금',
    photo: './images/experts/jung-byunghyun.jpg',
    photoColor: './images/experts/jung-byunghyun-color.jpg',
    tagline: '기업의 구조를 바꿔 한도를 만들어 냅니다.',
    intro:
      '경영 컨설팅과 기업 자문을 28년간 해왔습니다. 자금을 끌어오는 일과 그 자금이 세금 · 지분 · 승계에서 어떻게 되돌아오는지를 한 사람이 함께 봅니다. 특허와 인증, 연구소 설립처럼 한도의 근거가 되는 자산을 직접 만들어 온 것이 다른 점입니다.',
    credentials: [
      'Ph.D.(경영학박사) · 서울과학종합대학원대학교',
      'MBA · Helsinki School of Economics(International Management)',
      'IPS 산업정책연구원 연구교수 · 대학 겸임교수',
      '특허 · 상표 13건 직접 출원 보유, 학술 논문 4편',
      '개업공인중개사 — 담보 부동산 가치 판단',
    ],
    focus: [
      '정책자금 기관 선별과 신청 순서 설계',
      '기술평가 트랙 전환 (특허 · 연구소 · 인증)',
      '법인 구조 · 절세 · 승계까지 연결한 자금 설계',
    ],
  },
  {
    key: 'lim',
    name: '임두만',
    en: 'Duman Lim',
    role: '금융자금 · 대환 설계', // CHECK
    photo: './images/experts/lim-duman.jpg',
    photoColor: './images/experts/lim-duman-color.jpg',
    tagline: '닫힌 여신 창구를 다시 여는 경로를 찾습니다.', // CHECK
    intro:
      '은행과 제2금융권 여신 실무를 바탕으로 기존 부채를 정리하고 조건을 다시 짜는 일을 맡습니다. 담보 · 신용 · 보증 가운데 어느 트랙이 이 기업에 열려 있는지, 어느 기관을 먼저 두드려야 하는지를 판단합니다.', // CHECK
    credentials: [
      '금융권 여신 심사 · 실행 실무', // CHECK
      '고금리 차입 저금리 대환 구조 설계', // CHECK
      '담보 · 신용 · 보증서 트랙 병행 배치', // CHECK
      '부동산 담보 평가와 한도 재산정', // CHECK
    ],
    focus: [
      '기존 대출 전액 대환과 금리 재조정',
      '담보 여력이 없는 기업의 신용 트랙 전환',
      '추가 자금을 붙일 여지가 남은 기관 선별',
    ],
  },
];
