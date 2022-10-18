const clientCarouselClass = 'our-clients__list';

$(document).ready(function(){
  carouselSetup();
});

$(window).resize(function() {
  carouselSetup();
});

function carouselSetup(){
  if ( $(window).width() < 1024 ) {
    startClientsCarousel();
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