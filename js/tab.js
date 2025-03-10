
const init = () => {

  document.querySelector('#titlePop').addEventListener('click', () => {
    const modal = document.querySelector('.modal')
    modal.style.display = 'block'
  })

  document.querySelector(".btn_modal_close").addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  });

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
