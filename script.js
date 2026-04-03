window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  // ======================
  // CARD FADE
  // ======================
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });

  // ======================
  // REVEAL
  // ======================
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });

  // ======================
  // PARALLAX HERO
  // ======================
  const video = document.querySelector(".hero video");
  const content = document.querySelector(".hero-content");

  if(video){
    video.style.transform = `translateY(${scroll * 0.2}px) scale(1.05)`;
  }

  if(content){
    content.style.transform = `translateY(${scroll * -0.1}px)`;
  }

  // ======================
  // NAVBAR SCROLL EFFECT
  // ======================
  const nav = document.querySelector(".navbar");
  if(scroll > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  // ======================
  // ACTIVE NAV LINK
  // ======================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scroll >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

setInterval(() => {
  img1.classList.toggle("front");
  img1.classList.toggle("back");

  img2.classList.toggle("front");
  img2.classList.toggle("back");
}, 2500);

function showMenu(type) {
  const food = document.querySelector('.food');
  const drink = document.querySelector('.drink');
  const buttons = document.querySelectorAll('.menu-toggle button');

  // reset semua
  food.classList.remove('active');
  drink.classList.remove('active');
  buttons.forEach(btn => btn.classList.remove('active'));

  if (type === 'food') {
    food.classList.add('active');
    buttons[0].classList.add('active');
  } else {
    drink.classList.add('active');
    buttons[1].classList.add('active');
  }
}