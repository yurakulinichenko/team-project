(() => {
  const toTopBtn = document.querySelector('.button-to-top');
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 500) {
      toTopBtn.style.display = 'flex';
    } else {
      toTopBtn.style.display = 'none';
    }
  });
})();
