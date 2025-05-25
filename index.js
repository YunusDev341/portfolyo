const roles = [
  "mobile developer",
  "frontend developer",
];

const roleSpan = document.getElementById("role");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    charIndex--;
    roleSpan.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    roleSpan.textContent = currentRole.substring(0, charIndex);
  }

  let delay = isDeleting ? 50 : 150;

  
  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1500;
    isDeleting = true;
  }
  

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 500;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
