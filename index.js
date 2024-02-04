// hamburger
const hamburgerMenu = document.querySelector('#nav-link-wrapper')

document.querySelector('#hamburger').addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('active');
})


// tabbling event
const buttons = document.querySelectorAll('.tab-button');
const slides = document.querySelectorAll('.tab-slide');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    removeActiveSlides();
    slides[index].classList.add('active');
    button.classList.add('active');
  });
});

function removeActiveSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    buttons[index].classList.remove('active');
  });
}

