// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Mobile nav toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});
document.querySelectorAll('nav ul a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('nav ul').classList.remove('open'));
});

// ER Loop step animation
const steps = document.querySelectorAll('.er-step');
let current = 0;
setInterval(() => {
  steps.forEach(s => s.classList.remove('active'));
  steps[current].classList.add('active');
  current = (current + 1) % steps.length;
}, 2000);
