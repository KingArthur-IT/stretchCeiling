
//menu
document.querySelector('.header__burger')?.addEventListener('click', () => {
  document.querySelector('.menu')?.classList.add('opened');
});

document.querySelector('.menu__close')?.addEventListener('click', () => {
  document.querySelector('.menu')?.classList.remove('opened');
});
document.querySelectorAll('.menu__item').forEach((el) => {
  el.addEventListener('click', () => {
    document.querySelector('.menu')?.classList.remove('opened');
  })
});