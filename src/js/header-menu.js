const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const navLinks = document.querySelectorAll('.mobile-nav a');

burgerMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = 'auto';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});
