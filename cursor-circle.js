const cursor = document.querySelector('.cursor-circle');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Her frame'de imleci biraz yaklaştır
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();
