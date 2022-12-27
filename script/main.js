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

const measurementsPlanToday = document.getElementById('measurements-plan-today'),
      measurementsDoneToday = document.getElementById('measurements-done-today'),
      mountPlanToday = document.getElementById('mount-plan-today'),
      mountDoneToday = document.getElementById('mount-done-today'),
      mountPlanTomorrow = document.getElementById('mount-plan-tomorrow')

if (measurementsPlanToday){
  const measurementsToday = Math.round(6 * ((new Date().getDay() / 3) + 1) + Math.random() * 3)
  const mountToday = Math.round(5 * ((new Date().getDay() / 3) + 1) + Math.random() * 2)
  const mountTomorrow = Math.round(5 * ((new Date().getDay() / 3) + 1) + Math.random() * 4)
  const part = new Date().getHours() < 9 ? 1 : new Date().getHours() < 12 ? 0.7 : new Date().getHours() < 18 ? 0.3 : 0.1;

  measurementsPlanToday.innerHTML = Math.ceil(measurementsToday * part);
  measurementsDoneToday.innerHTML = Math.ceil(measurementsToday * (1 - part));
  mountPlanToday.innerHTML = Math.ceil(mountToday * part);
  mountDoneToday.innerHTML = Math.ceil(mountToday * (1 - part));
  mountPlanTomorrow.innerHTML = mountTomorrow;
}