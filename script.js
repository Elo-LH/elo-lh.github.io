window.addEventListener('DOMContentLoaded', function () {
  let waves1 = document.querySelectorAll('.wave1')
  let waves2 = document.querySelectorAll('.wave2')
  let waves3 = document.querySelectorAll('.wave3')
  let waves4 = document.querySelectorAll('.wave4')

  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY
    waves1.forEach((wave1) => {
      wave1.style.backgroundPositionX = 400 + scrollY * 1.2 + 'px'
    })
    waves2.forEach((wave2) => {
      wave2.style.backgroundPositionX = 400 + scrollY * -1.2 + 'px'
    })
    waves3.forEach((wave3) => {
      wave3.style.backgroundPositionX = 400 + scrollY * 1.4 + 'px'
    })
    waves4.forEach((wave4) => {
      wave4.style.backgroundPositionX = 400 + scrollY * -1.4 + 'px'
    })
  })
})
