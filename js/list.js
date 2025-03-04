document.addEventListener("DOMContentLoaded", () => {
  tableHoverEvent();
  initDatePicker();
});

const initDatePicker = () => {
  const picker = datepicker("#datepicker", {
    // 사용자 정의.
    formatter: (input, date, instance) => {
      // 이렇게 하면 날짜가 `1/1/2019`로 표시됩니다.
      input.value = date.toDateString();
    },
    startDay: 1, // 달력 주는 월요일부터 시작합니다.
    customDays: ["일", "월", "화", "수", "목", "금", "토"],
    customMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    overlayPlaceholder: "4자리 연도 입력",

    alwaysShow: false, // 달력을 숨기지 않음.
    dateSelected: new Date(), // 오늘이 선택됨.
    minDate: new Date(1900, 0, 1), // 1900년 1월 1일
    maxDate: new Date(2099, 0, 1), // 2099년 1월 1일
    startDate: new Date(), // 이번 달.
    showAllDates: true, // 현재 월을 제외한 선행 및 후행 날짜의 숫자가 표시됨.
  });
};

// highlight 이벤트
const toggleHighlight = (event, highlight) => {
  const table = document.getElementById("list_table");
  const rowIndex = event.currentTarget.parentElement.rowIndex;
  const cellIndex = event.currentTarget.cellIndex;

  table.querySelectorAll("tr").forEach((row, rIdx) => {
    row.querySelectorAll("td, th").forEach((cell, cIdx) => {
      if (rIdx === rowIndex || cIdx === cellIndex) {
        cell.classList.toggle("highlight", highlight);
      }
    });
  });
};

// table hover 이벤트
const tableHoverEvent = () => {
  const table = document.getElementById("list_table");

  // thead 제외 tbody td 이벤트 적용
  table.querySelectorAll("tbody td").forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => toggleHighlight(e, true));
    cell.addEventListener("mouseleave", (e) => toggleHighlight(e, false));
  });
};
