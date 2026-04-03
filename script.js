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