

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
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth'
  });
  calendar.render();

}


(() => {
  console.log('zzz@@@')
  init()
})()
