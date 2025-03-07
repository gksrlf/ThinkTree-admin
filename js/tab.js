
const init = () => {

  document.querySelector('#titlePop').addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    modal.style.display = 'block'
  })
}





(() => {
  init()
})()
