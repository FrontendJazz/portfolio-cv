// ==========   Menu show & hide
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

// =========  Show menu and validate

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// =========  Hide menu and validate
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

// ======== Remove when click link item

const navLinks = document.querySelectorAll('.nav__link')
const linkActions = () =>  navMenu.classList.remove('show-menu')
navLinks.forEach(el => el.addEventListener('click', linkActions))

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// SKILL ACCORDION

const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className
  for (let i =0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}
skillsHeader.forEach(el => {
  el.addEventListener('click', toggleSkills)
})

// Qualification tabs

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')
    tabs.forEach(el => {
      el.classList.remove('qualification__active')
    })
    tab.classList.add('qualification__active')
  })
})



const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close")

const modal = (modalClick) => {
  modalViews[modalClick].classList.add("active-modal")
}
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    console.log(i)
    modal(i)

  })
})

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal")
    })
  })
})

