// Remove Footnotes and HTML Tags
function stripFootnotesAndTags(text) {
  return text
    .replace(/<[^>]+>/g, "") // HTML 태그 제거
    .replace(/[\d¹²³⁴⁵⁶⁷⁸⁹⁰]+[⁾)]/g, "") // 각주 숫자 제거
    .trim();
}

// Progress Bar
function updateProgressBar() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  const scrollableHeight = scrollHeight - clientHeight;
  const scrolled = (scrollTop / scrollableHeight) * 100;
  document.getElementById("progress-bar").style.width = `${scrolled}%`;
}

window.addEventListener("scroll", updateProgressBar);

// Top Button
function handleTopButtonVisibility() {
  const scrollY = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const distanceToBottom = documentHeight - (scrollY + windowHeight);

  const topButton = document.getElementById("top-button");
  if (scrollY > 200 && distanceToBottom > 200) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", handleTopButtonVisibility);