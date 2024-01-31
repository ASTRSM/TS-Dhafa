const hamburgerMenu = document.querySelector('#nav-link-wrapper')

document.querySelector('#hamburger').addEventListener('click', (e) => {
  hamburgerMenu.classList.toggle('active');
})