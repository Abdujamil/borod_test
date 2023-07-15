
document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const close = document.querySelector('.header__close');
  
    toggleMenu.addEventListener('click', () => {
        mobileMenu.style.opacity = '1';
        mobileMenu.style.visibility = 'visible';
    });

    close.addEventListener('click', () => {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.visibility = 'hidden';
    });
  });
  

