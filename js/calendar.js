

// import interactionPlugin from '../packages/interaction/index.global.js'
// import dayGridPlugin from '../packages/daygrid/index.global.js'


const init = () => {
  // const calendarEl = document.getElementById('calendar')
  // const calendar = new Calendar(calendarEl, {
  //   plugins: [
  //     interactionPlugin,
  //     dayGridPlugin
  //   ],
  //   initialView: 'timeGridWeek',
  //   editable: true,
  //   events: [
  //     { title: 'Meeting', start: new Date() }
  //   ]
  // })
  //
  // calendar.render()
  // get calendarBar colors
  const rootStyles = window.getComputedStyle(document.documentElement)
  let scheduleBars = new Array(6).fill('')
  scheduleBars = scheduleBars.map((e,i) => e = rootStyles.getPropertyValue(`--schedule-bullet-color${i + 1}`))

  const getRandomColor = () => {
    return Math.floor(Math.random() * 7)
  }


  const calendarEl = document.querySelector('.calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'today',
      center: 'prev title next',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    titleFormat: (date) => {
      return date.date.year + '년 ' + (date.date.month + 1) + '월'
    },
    locale: 'ko',
    nowIndicator: true,
    selectable: true,
    droppable: true,
    navLinks: true,
    editable: true,
    events: [{
      title: '반복',
      daysOfWeek: [4],
      start: '13:40:00',
      textColor:rootStyles.getPropertyValue('--schedule-bar-text'),
      color: scheduleBars[getRandomColor()]
    },
      {
        title: '2',
        start: '15:00:00',
        daysOfWeek: [4],
        textColor:rootStyles.getPropertyValue('--schedule-bar-text'),
        color: scheduleBars[getRandomColor()]
      },
      {
        title: 'test',
        start: '2025-03-23',
        end: '2025-03-25',
        textColor:rootStyles.getPropertyValue('--schedule-bar-text'),
        color: scheduleBars[getRandomColor()]
      },
      {
        title: 'test',
        start: '2025-03-24',
        end: '2025-03-26',
        textColor:rootStyles.getPropertyValue('--schedule-bar-text'),
        color: scheduleBars[getRandomColor()]
      },
    ],
    views: {
      dayGridMonth: {
        dayMaxEventRows: 2
      },
      timeGridWeek: {},
      timeGridDay: {},
      listWeek: {}
    },
    select: (info) => {
      const startDate = info.startStr;
      const endDate = info.endStr;

      // 해당 날짜에 있는 이벤트 가져오기
      const events = calendar.getEvents().filter(event => {
        const eventStart = event.startStr;
        return eventStart >= startDate && eventStart < endDate; // 범위 내 이벤트 필터링
      });

      // 가져온 이벤트 출력
      if (events.length > 0) {
        console.log(`선택된 날짜(${startDate})에 등록된 이벤트:`);
        events.forEach(event => console.log(event.title));
      } else {
        console.log(`선택된 날짜(${startDate})에는 이벤트가 없습니다.`);
      }
    },
    customButtons : {
      today : {
        text: '오늘',
        click: () => {
          calendar.today()
        }
      }
    }
  });
  calendar.render();

}


(() => {
  init()
})()
