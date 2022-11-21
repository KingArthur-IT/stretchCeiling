const contactsModal = document.querySelector('.contacts');

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
}