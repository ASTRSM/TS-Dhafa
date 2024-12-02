// hamburger
const headerHamburger = document.querySelector('header #nav-link-wrapper')
const footerHamburger = document.querySelector('footer #nav-link-wrapper')

document.querySelector('header #hamburger').addEventListener('click', (e) => {
  headerHamburger.classList.toggle('active')
})

document.querySelector('footer #hamburger').addEventListener('click', (e) => {
  document.querySelector('footer').classList.toggle('active')
  footerHamburger.classList.toggle('active')
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
    autoplaySpeed: 8000,
  })
})


// cookie consent banner
const dialog = document.querySelector('dialog')

window.onload = (event) => {
  const cookie = getCookie("cookie-consent")

  if (cookie === null) {
    dialog.showModal()
  }
};

document.getElementById("grant").addEventListener("click", function() {
  const cookie = JSON.parse(getCookie("cookie-consent"))
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  dialog.showModal()

  checkboxes.forEach(checkbox => {
    const name = checkbox.getAttribute('name')
    if (cookie[name] === "granted") {
       checkbox.checked = true
     }
  })

});

document.getElementById("accept-all-cookies").addEventListener("click", function() {
  grantAllConsents()
})

document.getElementById("accept-cookies").addEventListener("click", function() {
  let cookies = {}
  const formEl = document.querySelector('form')
  const formData = new FormData(formEl)

  for (var [key, value] of formData.entries()) {
  cookies[key] = value === "granted" ? "granted" : "denied"
  }

  const data = {
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ...cookies,
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    security_storage: 'granted'
  };

  document.cookie = `cookie-consent=${encodeURIComponent(JSON.stringify(data))}; path=/; secure; samesite=strict; max-age=${60 * 60 * 24 * 30}`;

  grantConsents()
})

document.getElementById("ignore-cookies").addEventListener("click", function() {
  dialog.close()
})

const grantAllConsents = () => {
  function gtag() { dataLayer.push(arguments); }

  const grantAll = {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    security_storage: 'granted'
  }

  document.cookie = `cookie-consent=${encodeURIComponent(JSON.stringify(grantAll))}; path=/; secure; samesite=strict; max-age=${60 * 60 * 24 * 30}`;

  gtag('consent', 'update', grantAll);
  dialog.close()
}

const grantConsents = () => {
  const consent = getCookie("cookie-consent")
  function gtag() { dataLayer.push(arguments); }

  gtag('consent', 'update', JSON.parse(consent))
  dialog.close()
}

function getCookie(name) {
  const cookies = document.cookie.split('; '); // Split into individual cookies
  for (const cookie of cookies) {
    const [key, value] = cookie.split('='); // Split into key and value
    if (key === name) {
      return decodeURIComponent(value); // Decode the cookie value
    }
  }
  return null; // Return null if the cookie is not found
}
