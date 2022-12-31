const contactsModal = document.querySelector('.contacts');
const costModal = document.querySelector('.cost');
const orderModal = document.querySelector('.order');
const thanksModal = document.querySelector('.thanks');

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

    const checkSendReady = () => {
        const name = orderModal.querySelector('input[name]').value;
        const phone = orderModal.querySelector('input[phone]').value;
        const checkbox = orderModal.querySelector('input[type=checkbox]').checked;

        return name.length > 4 && phone.length >= 10 && checkbox
    }

    orderModal.querySelector('.order__btn').addEventListener('click', () => {
        const name = orderModal.querySelector('input[name]').value;
        const phone = orderModal.querySelector('input[phone]').value;
        const checkbox = orderModal.querySelector('input[type=checkbox]').checked;
        
        if (!checkSendReady()) return

        //send action
        closeOrderModal()

        //open thanks modal
        thanksModal.classList.add('modal-dispalayed');
        setTimeout(() => {
            thanksModal.classList.add('modal-visible');
        }, 200);
    });

    orderModal.querySelector('input[name]').addEventListener('input', () => {
        const isSendBtnActive = orderModal.querySelector('.btn').classList.contains('active')
        if (checkSendReady() && !isSendBtnActive)
            orderModal.querySelector('.btn').classList.add('active');
        if (!checkSendReady() && isSendBtnActive)
        orderModal.querySelector('.btn').classList.remove('active');
    });
    orderModal.querySelector('input[phone]').addEventListener('input', () => {
        const isSendBtnActive = orderModal.querySelector('.btn').classList.contains('active')
        if (checkSendReady() && !isSendBtnActive)
            orderModal.querySelector('.btn').classList.add('active');
        if (!checkSendReady() && isSendBtnActive)
        orderModal.querySelector('.btn').classList.remove('active');
    })
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