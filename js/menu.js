// 콘텐츠 데이터 정의 (간략화된 버전)
const spotlightItem = {
  0: {
    title: "팬덤과 플랫폼이 만든 또 하나의 우주, 슈퍼 IP",
    author: { name: "장민지", affiliation: "경남대학교 미디어영상학과 조교수" },
  },
  1: {
    title: "작지만 강한 스몰 IP의 힘",
    author: { name: "이성민", affiliation: "한국방송통신대학교 미디어영상학과 부교수" },
  },
  2: {
    title: "커뮤니티와 함께 성장하기 : 숏폼IP가 보여주는 콘텐츠 비즈니스 실험",
    author: { name: "강혜원", affiliation: "성균관대학교 컬처앤테크놀로지 융합전공 초빙교수" },
  },
};

const globalItem = {
  0: {
    title: "영상 제작 활성화를 위한 주목할 만한 글로벌 인센티브 정책",
    author: { name: "채정화", affiliation: "서강대학교 ICT법경제연구소 연구교수" },
  },
  1: {
    title: "글로벌 스트리밍 시장 경쟁 심화와 새로운 전략적 시도",
    author: { name: "이상원", affiliation: "경희대학교 미디어학과 교수" },
  },
  2: {
    title: "글로벌 OTT 서비스 사업자의 국가별 가격 전략",
  },
};

const peopleItem = {
  0: {
    title: "숏폼에서 콘텐츠 비즈니스의 미래를 보다",
    author: { name: "유일한", affiliation: "케이프스플래닛 대표/PD" },
  },
  1: {
    title: "우리는 결국 이야기를 만드는 사람들, 반경 1미터에 대한 진정성과 경청이 핵심이다",
    author: { name: "홍민지", affiliation: "SBS '문명특급' PD" },
  },
};

const trendItem = {
  0: {
    title: "게임의 영상화, 스토리 너머 플랫폼을 고민하다: 게임 IP의 영상콘텐츠 제작 트렌드 변화",
    author: { name: "송경원", affiliation: "『씨네21』 편집장" },
  },
  1: {
    title: "K-로케이션 톺아보기: 한국, 글로벌 OTT의 로케이션 넥서스(Nexus) 되나",
    author: { name: "김은영", affiliation: "성균관대학교 미디어커뮤니케이션학과 초빙교수" },
  },
  2: {
    title: "스포츠, 범죄, 리얼리티 … 역사물? 글로벌 TV 시리즈 장르별 제작 현황과 전망",
    author: { name: "김아영", affiliation: "한국국제문화교류진흥원 문화교류연구센터장" },
  },
};

const dataPointItem = {
  0: {
    title: "2024년도 방송영상 상장사 시장 결산 및 동향 분석",
  },
  1: {
    title: "2024년도 글로벌 및 국내 OTT 서비스 사업자 결산 분석",
  },
  2: {
    title: "데이터로 보는 숏폼 콘텐츠 이용",
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