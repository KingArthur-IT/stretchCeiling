const resumeCarouselClass = 'resume__form-wrapper';

$(document).ready(function(){
  startFormCarousel();
});
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