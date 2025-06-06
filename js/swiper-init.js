document.addEventListener("DOMContentLoaded", () => {
  const contents = [
    {
      sectionName: "스포트라이트",
      theme: "크거나 작거나: 슈퍼IP vs. 스몰IP",
      item: "팬덤과 플랫폼이 만든 또 하나의 우주, 슈퍼 IP",
      img: "./img/manuscript1/banner.png",
      imgMobile: "./img/manuscript1/banner-m.png",
    },
    {
      sectionName: "글로벌 마켓 리포트",
      theme: "",
      item: "영상 제작 활성화를 위한 주목할 만한 글로벌 인센티브 정책",
      img: "./img/manuscript4/thum.jpg",
    },
    {
      sectionName: "피플 인사이트",
      theme: "작지만 큰 세상, 숏폼을 만드는 사람들과 만나다!",
      item: "케이프스플래닛, 유일한 대표/PD<br>SBS '문명특급' 홍민지 PD",
      img: "./img/manuscript7/banner.png",
      imgMobile: "./img/manuscript7/banner-m.png",
    },
    {
      sectionName: "트렌드 하이라이트",
      theme: "",
      item: "게임의 영상화, 스토리 너머 플랫폼을 고민하다:<br>게임 IP의 영상콘텐츠 제작 트렌드 변화",
      img: "./img/manuscript9/thum.jpg",
    },
    {
      sectionName: "데이터 포인트",
      theme: "",
      item: "2024년도 방송영상 상장사 시장 결산 및 동향 분석",
      img: "./img/manuscript12/thum.png",
    },
  ];

  // === 메인 배너 슬라이드 렌더링 ===
  const swiperWrapper = document.getElementById("swiper-slides");
  contents.forEach((content) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    slide.innerHTML = `
      <div class="banner">
        <div class="banner-bg pc-bg" style="background-image: url('${content.img}');"></div>
        <div class="banner-bg mobile-bg" style="background-image: url('${content.imgMobile || content.img}');"></div>
        <div class="overlay"></div>
        <div class="content">
          <div class="theme-wrapper">
            <div class="label">${content.sectionName}</div>
            ${content.theme ? `<p class="theme">${content.theme}</p>` : ""}
          </div>
          <p class="item">${content.item}</p>
        </div>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  new Swiper(".main-banner-swiper", {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: {
      el: ".main-banner-swiper .swiper-pagination",
      clickable: true,
    },
  });

  const swiperStates = {
    spotlight: null,
    global: null,
    people: null,
    trend: null,
    data: null,
  };

  // === Swiper 초기화/해제 함수 ===
  function toggleSwiper(key, selector, nextEl, prevEl) {
    const isMobile = window.innerWidth < 1024;
    const initialized = !!swiperStates[key];

    if (isMobile && !initialized) {
      swiperStates[key] = new Swiper(selector, {
        slidesPerView: "auto",
        spaceBetween: 16,
        grabCursor: true,
        navigation: {
          nextEl,
          prevEl,
        },
      });
    } else if (!isMobile && initialized) {
      swiperStates[key].destroy(true, true);
      swiperStates[key] = null;
    }
  }

  // === 전체 Swiper 초기화 실행 함수 ===
  function initAllSwipers() {
    toggleSwiper("spotlight", ".spotlight-swiper", ".spotlight-button-next", ".spotlight-button-prev");
    toggleSwiper("global", ".global-swiper", ".global-button-next", ".global-button-prev");
    toggleSwiper("people", ".people-swiper", ".people-button-next", ".people-button-prev");
    toggleSwiper("trend", ".trend-swiper", ".trend-button-next", ".trend-button-prev");
    toggleSwiper("data", ".data-swiper", ".data-button-next", ".data-button-prev");
  }

  // 최초 실행 및 리사이즈 대응
  initAllSwipers();
  window.addEventListener("resize", () => {
    setTimeout(initAllSwipers, 100);
  });
});
