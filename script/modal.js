const contactsModal = document.querySelector('.contacts');
const costModal = document.querySelector('.cost');
const orderModal = document.querySelector('.order');
const thanksModal = document.querySelector('.thanks');
const ceilingForm = document.querySelector('.ceilings-head__form');

if (contactsModal){
    //open contacts modal
    document.querySelectorAll('.open-contacts-modal').forEach((el) => {
        el.addEventListener('click', () => {
            contactsModal.classList.add('modal-dispalayed');
            setTimeout(() => {
                contactsModal.classList.add('modal-visible');
            }, 200);
        })
    });
    
    //close contacts modal
    const closeContactsModal = () => {
        contactsModal.classList.remove('modal-visible');
        setTimeout(() => {
            contactsModal.classList.remove('modal-dispalayed');
        }, 300);
    };
    
    document.querySelector('.contacts__hero .modal__close').addEventListener('click', () => {closeContactsModal()});
    contactsModal.addEventListener('click', () => {closeContactsModal()});
    document.querySelector('.contacts__hero').addEventListener('click', (e) => {e.stopPropagation()});
};

if (costModal){
    //open contacts modal
    document.querySelectorAll('.open-cost-modal').forEach((el) => {
        el.addEventListener('click', () => {
            costModal.classList.add('modal-dispalayed');
            setTimeout(() => {
                costModal.classList.add('modal-visible');
            }, 200);
        })
    });
    
    //close cost modal
    const closeCostModal = () => {
        costModal.classList.remove('modal-visible');
        setTimeout(() => {
            costModal.classList.remove('modal-dispalayed');
        }, 300);
    };
    
    document.querySelector('.cost__hero .modal__close').addEventListener('click', () => {closeCostModal()});
    costModal.addEventListener('click', () => {closeCostModal()});
    document.querySelector('.cost__hero').addEventListener('click', (e) => {e.stopPropagation()});
}

if (orderModal){
    //open order modal
    document.querySelectorAll('.open-order-modal').forEach((el) => {
        el.addEventListener('click', () => {
            orderModal.classList.add('modal-dispalayed');
            setTimeout(() => {
                orderModal.classList.add('modal-visible');
            }, 200);
        })
    });
    
    //close order modal
    const closeOrderModal = () => {
        orderModal.querySelector('input[name]').value = '';
        orderModal.querySelector('input[phone]').value = '';
        orderModal.querySelector('.btn').classList.remove('active');

        orderModal.classList.remove('modal-visible');
        setTimeout(() => {
            orderModal.classList.remove('modal-dispalayed');
        }, 300);
    };
    
    document.querySelector('.order__hero .modal__close').addEventListener('click', () => {closeOrderModal()});
    orderModal.addEventListener('click', () => {closeOrderModal()});
    document.querySelector('.order__hero').addEventListener('click', (e) => {e.stopPropagation()});

    const nameInput = orderModal.querySelector('input[name]');
    const phoneInput = orderModal.querySelector('input[phone]');
    const checkbox = orderModal.querySelector('input[type=checkbox]');   
    const sendBtn = orderModal.querySelector('.btn');

    const checkSendReady = () => {
        return nameInput.value.length > 4 && phoneInput.value.length >= 10 && checkbox.checked
    }

    orderModal.querySelector('.order__btn').addEventListener('click', () => {
       if (!checkSendReady()) return

        //send action
        // nameInput.value
        // phoneInput.value
        // checkbox.checked

        closeOrderModal()

        //open thanks modal
        thanksModal.classList.add('modal-dispalayed');
        setTimeout(() => {
            thanksModal.classList.add('modal-visible');
        }, 200);
    });

    const orderInputHandle = () => {
        const isSendBtnActive = sendBtn.classList.contains('active')
        if (checkSendReady() && !isSendBtnActive)
            sendBtn.classList.add('active');
        if (!checkSendReady() && isSendBtnActive)
            sendBtn.classList.remove('active');
    }

    nameInput.addEventListener('input', () => {orderInputHandle()});
    phoneInput.addEventListener('input', () => {orderInputHandle()});
}

if(thanksModal){
    //close thanks modal
    const closeThanksModal = () => {
        thanksModal.classList.remove('modal-visible');
        setTimeout(() => {
            thanksModal.classList.remove('modal-dispalayed');
        }, 300);
    };
    
    document.querySelector('.thanks__hero .modal__close').addEventListener('click', () => {closeThanksModal()});
    thanksModal.addEventListener('click', () => {closeThanksModal()});
    document.querySelector('.thanks__hero').addEventListener('click', (e) => {e.stopPropagation()});
}

if(ceilingForm){
    const nameFormInput = ceilingForm.querySelector('input[name]');
    const phoneFormInput = ceilingForm.querySelector('input[phone]');
    const checkboxForm = ceilingForm.querySelector('input[type=checkbox]');   
    const sendFormBtn = ceilingForm.querySelector('.btn');

    const checkSendReady = () => {
        return nameFormInput.value.length > 4 && phoneFormInput.value.length >= 10 && checkboxForm.checked
    }

    sendFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (!checkSendReady()) return
 
         //send action
         // nameFormInput.value
         // phoneFormInput.value
         // checkboxForm.checked

         nameFormInput.value = '';
         phoneFormInput.value = '';
         checkboxForm.checked = true;
         sendFormBtn.classList.remove('active')
 
         //open thanks modal
         thanksModal.classList.add('modal-dispalayed');
         setTimeout(() => {
             thanksModal.classList.add('modal-visible');
         }, 200);
     });
 
     const formInputHandle = () => {
         const isSendBtnActive = sendFormBtn.classList.contains('active')
         if (checkSendReady() && !isSendBtnActive)
            sendFormBtn.classList.add('active');
         if (!checkSendReady() && isSendBtnActive)
            sendFormBtn.classList.remove('active');
     }
 
     nameFormInput.addEventListener('input', () => {formInputHandle()});
     phoneFormInput.addEventListener('input', () => {formInputHandle()})
}