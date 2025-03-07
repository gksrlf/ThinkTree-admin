document.addEventListener("DOMContentLoaded", () => {
  tableHoverEvent();
  initDatePicker();
});

const initDatePicker = () => {
  const picker = datepicker("#datepicker", {
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
