document.addEventListener('DOMContentLoaded', () => {
  console.log('Parallax Practice');
  
  // Define scrollArrow node element and set initial opacity to '1'
  const scrollArrow = document.querySelector('.scroll-indicator');
  // scrollArrow.style.opacity = 1;
  
  const arrowFade = () => {
    if(window.scrollY === 0) {
      scrollArrow.style.opacity = 1;
      // scrollArrow.classList.add('blink');
    } else if (window.scrollY > 0) {
      scrollArrow.style.opacity = 0;
      // scrollArrow.classList.remove('blink');
    }
  };

  window.addEventListener('scroll', arrowFade);
});