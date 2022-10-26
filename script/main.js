const clientCarouselClass = 'our-clients__list';
const resumeCarouselClass = 'resume__form-wrapper';

$(document).ready(function(){
  carouselSetup();
  startFormCarousel();
});

$(window).resize(function() {
  carouselSetup();
});

function carouselSetup(){
  if ( $(window).width() < 1024 ) {
    startClientsCarousel();
    $(`.${clientCarouselClass}`).removeClass('off');
  } else {
    $(`.${clientCarouselClass}`).addClass('off');
    $(`.${clientCarouselClass}`).removeClass('owl-carousel');
  }
}

function startClientsCarousel(){
  $(`.${clientCarouselClass}`).addClass('owl-carousel')
  $(`.${clientCarouselClass}`).owlCarousel({
    loop: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    nav: false,
    dots: false,
    center: true,
    responsive:{
      0:{
        items: 2.2
      },
      425:{
        items: 2.2
      },
      768:{
        items: 3.3,
      },
    }
  });
};
function startFormCarousel(){
  const resumeCarousel = $(`.${resumeCarouselClass}`).owlCarousel({
    loop: false,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    nav: false,
    dots: false,
    center: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false
  });

  $('.resume__next').click(function() {
    resumeCarousel.trigger('next.owl.carousel');
  });
  $('.resume__prev').click(function() {
    resumeCarousel.trigger('prev.owl.carousel');
  });
};

function stopClientsCarousel(className) {
    const owl = $(`.${className}`);
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}


//menu
document.querySelector('.header__burger')?.addEventListener('click', () => {
  document.querySelector('.menu')?.classList.add('opened');
});

document.querySelector('.menu__close')?.addEventListener('click', () => {
  document.querySelector('.menu')?.classList.remove('opened');
})