// fade in saat scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// PARALLAX HERO
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const video = document.querySelector(".hero video");
  const content = document.querySelector(".hero-content");

  if(video){
    video.style.transform = `translateY(${scroll * 0.2}px) scale(1.05)`;
  }

  if(content){
    content.style.transform = `translateY(${scroll * -0.1}px)`;
  }
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if(window.scrollY > 50){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});