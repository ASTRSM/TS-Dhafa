// hamburger
const hamburgerMenu = document.querySelector('#nav-link-wrapper')

document.querySelector('#hamburger').addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('active')
})

// tabbling event
const buttons = document.querySelectorAll('.tab-button')
const slides = document.querySelectorAll('.tab-slide')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeActiveSlides()
    slides[index].classList.add('active')
    button.classList.add('active')
  })
})

function removeActiveSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active')
    buttons[index].classList.remove('active')
  })
}

// slick slider
$(document).ready(function () {
  // function for unique background position
  $('.slider-slide').each(function (index, element) {
    const isEven = index % 2 == 0
    const unique = isEven ? 20 : 30
    const rotation = unique * index
    $(element)
      .find('.background')
      .css(
        'transform',
        `scale(480%) scaleX(-1) translate(-${index}%, -2${index}%) rotate(${rotation}deg)`
      )
  })

  $('#slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  })
})
