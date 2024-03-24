document.addEventListener('DOMContentLoaded',() => {
  function modalInit() {
    const openModalBtn = document.querySelector('[data-open-modal]')
    if(!openModalBtn) return

    const modalNode = document.querySelector('[data-modal]')
    if(!modalNode) return

    const closeModalBtn = modalNode.querySelector('[data-close-modal]')

    function openModal() {
      modalNode.classList.add('modal-wrapper--is-active')
      document.body.style.overflowY = 'hidden'
      document.body.style.paddingRight = `${getScrollBarWidth()}px`
    }
    
    function  closeModal() {
      modalNode.classList.remove('modal-wrapper--is-active')
      document.body.style.overflowY = 'auto'
      document.body.style.paddingRight = '0'
    }        
    
    openModalBtn.addEventListener('click', openModal)
    closeModalBtn.addEventListener('click',closeModal)

    // window.addEventListener('click', (e) => {
    //   if(!e.target.closest('.modal-wrapper__content') && !e.target.classList.contains('modal-btn')){
    //     closeModal()
    //   }
    // })

    function getScrollBarWidth () {
      return window.innerWidth - document.body.clientWidth;
    }
  }

  modalInit()
})