
const init = () => {

  document.querySelector('#titlePop').addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    modal.style.display = 'flex'
  })

  document.querySelector('#popup').addEventListener('click', () => {
    const pop = document.querySelector('.pop')
    pop.style.display = 'flex'
  })

  document.querySelector('#close').addEventListener('click', () => {
    const pop = document.querySelector('.pop')
    pop.style.display = 'none'
  })
}





(() => {
  init()
})()
