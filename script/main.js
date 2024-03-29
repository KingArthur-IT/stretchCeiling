const resumeCarouselClass = 'resume__form-wrapper';
const resumeFormWrapper = document.querySelector('.resume__form-wrapper');

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

if (resumeFormWrapper){
  const nameInput = resumeFormWrapper.querySelector('input[username]');
  const phoneInput = resumeFormWrapper.querySelector('input[userphone]');   
  const sendBtn = resumeFormWrapper.querySelector('.resume__send-btn');

  const checkSendReady = () => {
    return nameInput.value.length > 4 && phoneInput.value.length >= 10
  }

  sendBtn.addEventListener('click', () => {
    if (!checkSendReady()) return

      //send action
      // nameInput.value
      // phoneInput.value

      //open thanks modal
      thanksModal.classList.add('modal-dispalayed');
      setTimeout(() => {
          thanksModal.classList.add('modal-visible');
      }, 200);
  });

  const inputHandle = () => {
      const isSendBtnActive = sendBtn.classList.contains('active')
      if (checkSendReady() && !isSendBtnActive) {
        sendBtn.classList.add('active');
      }
      if (!checkSendReady() && isSendBtnActive) {
        sendBtn.classList.remove('active');
      }
  }

  nameInput.addEventListener('input', () => {inputHandle()});
  phoneInput.addEventListener('input', () => {inputHandle()});
}

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