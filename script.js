window.addEventListener('scroll', () => {
  console.log('You are scrolling the page!');
});


const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

window.addEventListener('scroll', () => {
  console.log('You are scrolling the page!');
});



