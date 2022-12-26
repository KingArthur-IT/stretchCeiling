const contactsModal = document.querySelector('.contacts');
const costModal = document.querySelector('.cost');
const orderModal = document.querySelector('.order');

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
        orderModal.classList.remove('modal-visible');
        setTimeout(() => {
            orderModal.classList.remove('modal-dispalayed');
        }, 300);
    };
    
    document.querySelector('.order__hero .modal__close').addEventListener('click', () => {closeOrderModal()});
    orderModal.addEventListener('click', () => {closeOrderModal()});
    document.querySelector('.order__hero').addEventListener('click', (e) => {e.stopPropagation()});
}