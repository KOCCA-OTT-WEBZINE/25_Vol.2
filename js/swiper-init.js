document.addEventListener("DOMContentLoaded", () => {
  const contents = [
    {
      sectionName: "스포트라이트",
      theme: "인공지능(AI)와 방송영상 콘텐츠",
      item: "방송영상콘텐츠의 다음 장을 여는 AI 기술과 창작자의 역할",
      img: "./img/manuscript1/banner.png",
    },
    {
      sectionName: "글로벌 마켓 리포트",
      theme: "",
      item: "스트리밍을 넘어서: 미국 OTT의 실시간 콘텐츠 도전과 진화",
      img: "./img/manuscript5/banner.png",
    },
    {
      sectionName: "피플 인사이트",
      theme: "AI 활용한 영상콘텐츠 제작자를 만나다!",
      item: "스튜디오메타케이, 김광집 대표<br>무암, 현해리 대표",
      img: "./img/manuscript8/banner.png",
      // imgMobile: "./img/manuscript8/banner-pc.png",
    },
    {
      sectionName: "트렌드 하이라이트",
      theme: "",
      item: "미드 명가, HBO의 국내 상륙기",
      img: "./img/manuscript10/banner.png",
    },
    {
      sectionName: "데이터 포인트",
      theme: "",
      item: "2024-2025 글로벌 방송 포맷 시장 동향과 트렌드",
      img: "./img/manuscript14/banner.png",
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
    autoplay: { delay: 3000 },
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
  const initialized = !!swiperStates[key];

  if (!initialized) {
    const slideCount = document.querySelectorAll(`${selector} .swiper-slide`).length;

    swiperStates[key] = new Swiper(selector, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      slideToClickedSlide: false,
      grabCursor: true,
      loop: slideCount >= 3,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl,
        prevEl,
      },
      breakpoints: {
        1440: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
      },
    });
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
