
const startDatePicker = () => {
  const picker = datepicker("#start_datepicker", {
    formatter: (input, date, instance) => {
      // 날짜 형태 변환
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const parseDate = year + "-" + month + "-" + day;

      input.value = parseDate;
    },
    startDay: 1, // 달력 주는 월요일부터 시작
    customDays: ["일", "월", "화", "수", "목", "금", "토"],
    customMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    overlayPlaceholder: "4자리 연도 입력", // 년도 검색란 텍스트
    overlayButton: "검색", // 년도 검색 버튼 텍스트
    minDate: new Date(1900, 0, 1), // 최소 1900년 1월 1일
    maxDate: new Date(2099, 11, 31), // 최대 2099년 12월 31일
    startDate: new Date(), // 시작 하는 달 (이번 달)
    showAllDates: true, // 현재 달을 제외한 선행 및 후행 달의 날짜 표시
  });
};

const endDatePicker = () => {
  const picker = datepicker("#end_datepicker", {
    formatter: (input, date, instance) => {
      // 날짜 형태 변환
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const parseDate = year + "-" + month + "-" + day;

      input.value = parseDate;
    },
    startDay: 1, // 달력 주는 월요일부터 시작
    customDays: ["일", "월", "화", "수", "목", "금", "토"],
    customMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    overlayPlaceholder: "4자리 연도 입력", // 년도 검색란 텍스트
    overlayButton: "검색", // 년도 검색 버튼 텍스트
    minDate: new Date(1900, 0, 1), // 최소 1900년 1월 1일
    maxDate: new Date(2099, 11, 31), // 최대 2099년 12월 31일
    startDate: new Date(), // 시작 하는 달 (이번 달)
    showAllDates: true, // 현재 달을 제외한 선행 및 후행 달의 날짜 표시
  });
};

const selectBox = () => {
  // 멀티샐렉트 로드
  updateSelectedOptions();
}

const removeBadge = () => {
  const targetEl = document.querySelectorAll('.badge-remove')
  // 뱃지 삭제 버튼 이벤트
  targetEl.forEach(el => {
  el.addEventListener('click',  function(e) {
      e.stopPropagation();
      const badge = e.target.parentElement;
      const checkboxId = badge.dataset.id;
      document.querySelector(`#${checkboxId}`).checked = false
      updateSelectedOptions();
    });
  });
}

// 멀티셀렉트 체크상태 옵션 업데이트
function updateSelectedOptions(e) {
  const headerDiv = document.querySelector('.multiselect__text');
  // headerDiv.empty();
  const checkedBoxes = document.querySelectorAll('.multiselect .inp--checkbox input[type="checkbox"]:checked');
  let badgeHtml = ''
  if (checkedBoxes.length > 0) {
    checkedBoxes.forEach(function(k) {
      const optionText = k.nextElementSibling.innerText;
      badgeHtml += `
        <span class="selected-badge" data-id="${k.getAttribute('id')}">
          ${optionText}
          <button class="badge-remove" type="button">&times;</button>
        </span>
      `;
    });
    if(badgeHtml) {
      headerDiv.innerHTML = badgeHtml
      removeBadge()
    }
  } else {
    headerDiv.innerHTML = '<span>선택하세요</span>';
  }
}

const eventBind = () => {
  // 멀티셀렉트 헤더 클릭 이벤트
  document.querySelector('.multiselect__header').addEventListener('click',function(e) {
    if (!document.querySelector('.multiselect__header-arrow').classList.contains('up')) {
      document.querySelector('.multiselect__header-arrow').classList.add('up');
      document.querySelector('.multiselect__content').style.display = 'block'
      // document.querySelector.next('.multiselect__content').slideToggle(100);
    } else {
      document.querySelector('.multiselect__header-arrow').classList.remove('up');
      document.querySelector('.multiselect__content').style.display = 'none'
    }
  });

  // 멀티셀렉트 이벤트 핸들러
  document.querySelector('.multiselect .inp--checkbox input[type="checkbox"]').addEventListener('click', (e) => {
    updateSelectedOptions(e);
  });
}

const thema = (type) => {
  document.documentElement.className = type
}

document.addEventListener("DOMContentLoaded", () => {
  startDatePicker();
  endDatePicker();
  selectBox()
  eventBind()
});
