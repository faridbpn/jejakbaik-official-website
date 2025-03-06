'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});

ScrollReveal().reveal('#hero-subtitle', { 
  delay: 300, 
  distance: '50px', 
  origin: 'left', 
  duration: 1000, 
  easing: 'ease-in-out' 
});

ScrollReveal().reveal('#hero-title', { 
  delay: 500, 
  distance: '50px', 
  origin: 'top', 
  duration: 1000, 
  easing: 'ease-in-out' 
});

ScrollReveal().reveal('#hero-text', { 
  delay: 700, 
  distance: '50px', 
  origin: 'right', 
  duration: 1000, 
  easing: 'ease-in-out' 
});

ScrollReveal().reveal('#hero-button', { 
  delay: 900, 
  scale: 0.8, 
  duration: 1000, 
  easing: 'ease-in-out' 
});

ScrollReveal().reveal('#hero-image', { 
  delay: 1100, 
  distance: '50px', 
  origin: 'bottom', 
  duration: 1200, 
  easing: 'ease-in-out',
  rotate: { x: 0, y: 20, z: 0 }
});

ScrollReveal().reveal('#hero-subtitle', { delay: 300, distance: '50px', origin: 'left', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#hero-title', { delay: 500, distance: '50px', origin: 'top', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#hero-text', { delay: 700, distance: '50px', origin: 'right', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#hero-button', { delay: 900, scale: 0.8, duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#hero-image', { delay: 1100, distance: '50px', origin: 'bottom', duration: 1200, easing: 'ease-in-out', rotate: { x: 0, y: 20, z: 0 }});

ScrollReveal().reveal('#about-banner', { delay: 300, distance: '50px', origin: 'left', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#about-title', { delay: 500, distance: '50px', origin: 'top', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#about-text', { delay: 700, distance: '50px', origin: 'right', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#about-list', { delay: 900, scale: 0.8, duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('#about-button', { delay: 1100, distance: '50px', origin: 'bottom', duration: 1200, easing: 'ease-in-out' });