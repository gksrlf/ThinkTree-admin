document.addEventListener("DOMContentLoaded", () => {
  handleResize();
	window.addEventListener("resize", handleResize);
	asideToggleEvent();
});

const asideToggleEvent = () => {
  const lnbBar = document.querySelector(".lnb_bar__area"); // aside bar (lnb)
  const lnbCover = document.querySelector(".lnb_cover"); // 태블릿 & 모바일 메뉴 열렸을때 lnb 배경
	const asidebutton = document.querySelector(".lnb_bar_control__box button"); // aside를 여는 버튼
	const mobileOpenBtn = document.querySelector(".gnb_bar_mobile__area .mobile_menu_btn"); // 모바일 aside를 여는 버튼
	const mobileCloseBtn = document.querySelector(".lnb_bar__area .btn_nav_close"); // 모바일 aside를 여는 버튼
  const contents = document.querySelector(".contents_container .contents"); // aside를 제외한 실제 컨텐츠 영역
  const saveBox = document.querySelector(".save__box"); // 뷰페이지 하단 save box

	
  if (!lnbBar) return; // 요소가 없으면 실행하지 않음

	// 클릭 이벤트 추가 (클래스 토글)	
  asidebutton.addEventListener("click", () => {
    if (lnbBar.classList.contains("fold")) {
      lnbBar.classList.remove("fold");
      lnbCover.classList.add("on");
      contents.classList.remove("wide_mode");
      saveBox?.classList.remove("wide_mode");
    } else {
      lnbBar.classList.add("fold");
      lnbCover.classList.remove("on");
      contents.classList.add("wide_mode");
      saveBox?.classList.add("wide_mode");
    }
  });
	
	mobileOpenBtn.addEventListener("click", () => {
		lnbBar.classList.remove("fold");
		lnbCover.classList.add("on");
	});

	mobileCloseBtn.addEventListener("click", () => { 
		lnbBar.classList.add("fold");
    lnbCover.classList.remove("on");
	});	
};

const handleResize = () => {
	const lnbBar = document.querySelector(".lnb_bar__area");
	const contents = document.querySelector(".contents_container .contents");
  const lnbCover = document.querySelector(".lnb_cover");
 
  if (!lnbBar) return;

	const mobile = window.innerWidth <= 640;
	const tablet = window.innerWidth <= 1280;
	
	if (mobile) {
		lnbBar.classList.add("fold");
    contents.classList.remove("wide_mode");
    lnbCover.classList.remove("on");
	} else if (tablet) { 
		lnbBar.classList.add("fold");
    contents.classList.add("wide_mode");
    lnbCover.classList.remove("on");
	}else {
    lnbBar.classList.remove("fold");
    contents.classList.remove("wide_mode");
    lnbCover.classList.add("on");
  }
};
