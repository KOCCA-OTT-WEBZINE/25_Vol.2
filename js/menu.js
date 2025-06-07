const spotlightItem = {
  0: {
    title: "방송영상콘텐츠의 다음 장을 여는 AI 기술과 창작자의 역할",
    author: { name: "최돈현", affiliation: "Soy.lab 대표" },
  },
  1: {
    title: "‘어떻게 만들까’에서 ‘무엇을 만들까’의 시대로: AI 시대, 광고영상 제작의 변화와 전망",
    author: { name: "박찬수", affiliation: "HSAD Chief AI Director" },
  },
  2: {
    title: "AI가 제작한 ‘지브리’ 스타일은 저작권 침해일까: AI 창작물의 법적 보호를 둘러싼 쟁점과 논의",
    author: { name: "김종균", affiliation: "특허청 상표디자인심사국 심사관" },
  },
  3: {
    title: "AI 생성물 표시제 도입에 따른 주요 쟁점",
    author: { name: "박만수", affiliation: "한국콘텐츠진흥원 콘텐츠산업정책연구센터 산업정책팀 선임연구원" },
  },
};

const globalItem = {
  0: {
    title: "스트리밍을 넘어서: 미국 OTT의 실시간 콘텐츠 도전과 진화",
    author: { name: "유재성", affiliation: "위스콘신대학교 그린베이캠퍼스 조교수" },
  },
  1: {
    title: "글로벌 콘텐츠 제작비 급상승 원인과 대응 전략",
    author: { name: "최선영", affiliation: "연세대학교 커뮤니케이션대학원 객원교수" },
  },
  2: {
    title: "글로벌 스트리밍 플랫폼의 수익성 혁신, FAST가 이끈다",
    author: { name: "김조한", affiliation: "뉴 아이디 상무" },
  },
};

const peopleItem = {
  0: {
    title: "AI 콘텐츠 제작, 영상의 기초에서 답을 찾다",
    author: { name: "김광집", affiliation: "스튜디오메타케이 대표" },
  },
  1: {
    title: "창작의 동반자이자 지렛대로, AI와 함께 성장하다",
    author: { name: "현해리", affiliation: "무암 대표" },
  },
};

const trendItem = {
  0: {
    title: "미드 명가, HBO의 국내 상륙기",
    author: { name: "김헌", affiliation: "한양대학교 ERICA 미디어학과 조교수" },
  },
  1: {
    title: "왜 다시, <수사반장>인가: OTT 시대의 IP 리부트 전략",
    author: { name: "홍석우", affiliation: "MOst267 EP" },
  },
  2: {
    title: "스포츠 다큐멘터리, 새로운 카테고리가 되다",
    author: { name: "조은성", affiliation: "다큐멘터리 감독" },
  },
  3: {
    title: "국내 방송영상 제작 생태계 구조와 현황",
    author: { name: "김 숙", affiliation: "(주)컬쳐미디어랩 대표" },
  },
};

const dataPointItem = {
  0: {
    title: "2024-2025 글로벌 방송 포맷 시장 동향과 트렌드",
  },
  1: {
    title: "주요 동아시아 국가의 로컬 OTT 서비스 사업자 현황",
  },
};

// 섹션별 정보 통합
const contentMap = [
  { label: "스포트라이트", path: "spotlight", items: spotlightItem },
  { label: "글로벌 마켓 리포트", path: "global", items: globalItem },
  { label: "피플 인사이트", path: "people", items: peopleItem },
  { label: "트렌드 하이라이트", path: "trend", items: trendItem },
  { label: "데이터 포인트", path: "data", items: dataPointItem },
];

// 메뉴 열기 및 렌더링
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const closeBtn = document.getElementById("menu-close");
  const menu = document.getElementById("mobile-menu");
  const content = document.getElementById("menu-content");

  toggle.addEventListener("click", () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
    renderMenu();
  });
  
  closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
  });

  function renderMenu() {
    content.innerHTML = "";

    contentMap.forEach(({ label, path, items }) => {
      const section = document.createElement("div");
      section.innerHTML = `
        <h2 class="section-title">${label}</h2>
        <ul class="section-list">
          ${Object.entries(items)
          .map(([key, item]) => {
            const author = item.author
              ? `<p class="author">${item.author.name} | ${item.author.affiliation}</p>`
              : "";
            return `
                <li class="section-item">
                  <a href="./${path}_${Number(key) + 1}.html" class="menu-link">
                    <p>${stripFootnotesAndTags(item.title)}</p>
                    ${author}
                  </a>
                </li>
              `;
          })
          .join("")}
        </ul>
      `;
      content.appendChild(section);
    });
  }
});