document.addEventListener("DOMContentLoaded", () => {
  tableHoverEvent();
  initDatePicker();
});

const initDatePicker = () => {
const picker = datepicker("#datepicker", {
  minYear: 1900, // 최소 연도
  maxYear: new Date().getFullYear() + 10, // 현재 연도 + 10년까지 가능
  onShow: (instance) => {
    // 연도 선택 드롭다운 추가
    const yearSelect = document.createElement("select");
    yearSelect.classList.add("datepicker-year-select");

    for (
      let year = instance.opts.maxYear;
      year >= instance.opts.minYear;
      year--
    ) {
      const option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    }

    yearSelect.value = instance.currentYear; // 현재 연도 선택

    // 연도 변경 이벤트
    yearSelect.addEventListener("change", (event) => {
      instance.setDate(new Date(event.target.value, instance.currentMonth, 1));
    });

    // 기존의 연도 입력 필드를 숨기고 커스텀 드롭다운 추가
    const yearInput = instance.calendar.querySelector(".qs-year");
    if (yearInput) {
      yearInput.style.display = "none";
      yearInput.parentElement.appendChild(yearSelect);
    }
  },
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
