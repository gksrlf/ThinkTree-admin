document.addEventListener("DOMContentLoaded", () => {
  quickMenuToggleEvent();
  window.addEventListener("resize", quickMenuToggleEvent);
});

const quickMenuToggleEvent = () => {
  const snbBar = document.querySelector(".snb_bar__area"); // quick menu bar (snb)
  const snbCover = document.querySelector(".snb_cover"); // 태블릿 & 모바일 메뉴 열렸을때 snb 배경
  const snbCloseButton = document.querySelector(".snb_close__box button"); // snb 닫기 버튼
  const snbOpenButton = document.querySelector(".snb_open__box"); // snb 열기 버튼
  const contents = document.querySelector(".contents_container .contents .content"); // contents 내부의 content 의 넓이
  const isMobile = window.innerWidth <= 640;

  if (!snbBar) return;

  // 클릭 이벤트 추가 (클래스 토글)
  snbCloseButton.addEventListener("click", () => {
    snbBar.classList.add("fold");
    contents.classList.add("content_wide");
    snbOpenButton.classList.add("on");
    if (isMobile) {
      snbBar.classList.remove("on");
      snbCover.classList.remove("on");
      snbCover.classList.add("off");
      snbOpenButton.classList.remove("hide");
    } 
  });

  snbOpenButton.addEventListener("click", () => {
    snbBar.classList.remove("fold");
    contents.classList.remove("content_wide");
    snbOpenButton.classList.remove("on");
    if (isMobile) { 
      snbBar.classList.add("on");
      snbCover.classList.add("on");
      snbCover.classList.remove("off");
      snbOpenButton.classList.add("hide");
    } 
  })
};