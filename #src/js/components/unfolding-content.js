// function unfoldingContent(params) {
//   const unfoldingBlocks = document.querySelectorAll('[data-unfolding]')
  
//   // unfoldingBlocks.forEach(item => {
//   //   const curr
//   // })
//   const unfoldingBtns = document.querySelectorAll('[data-unfolding-btn]')
//   const unfoldingBody = document.querySelectorAll('[data-unfolding-body]')

//   const scrollHeight = Math.ceil(unfoldingBody.scrollHeight)
//   const height = Math.ceil(unfoldingBody.getBoundingClientRect().height)

//   if (scrollHeight > height) {
//     unfoldingBody.classList.add('card--has-full')
//     btn.style.display = '';
//   }

//   unfoldingBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const currentBlock = e.target.closest('[data-unfolding]')
//       const currentBody = currentBlock.querySelector('[data-unfolding-body]')

//     })
//   })
// }

document.addEventListener('DOMContentLoaded', () => {
  function unfoldingContent() {
    const unfoldingBlocks = document.querySelectorAll('[data-unfolding]')
    const animateTime = 300; // ms
  
    unfoldingBlocks.forEach(item => {
      const unfoldingBody = item.querySelector('[data-unfolding-body]');
      const unfoldingBtn = item.querySelector('[data-unfolding-btn]')
      const scrollHeight = Math.ceil(unfoldingBody.scrollHeight)
      const height = Math.ceil(unfoldingBody.getBoundingClientRect().height)
  
      item.style = `--animate-time: ${animateTime}ms`
  
      if (scrollHeight > height) {
        item.classList.add('unfolding-content--has-full')
        unfoldingBtn.style.display = '';
      }
  
      unfoldingBtn.addEventListener('click', () => {
        const isOpened = item.classList.contains('unfolding-content--is-opened');
  
        if (isOpened) {
          unfoldingBody.style.maxHeight = '';
          unfoldingBtn.classList.remove('unfolding-content__btn--is-opened')
  
          setTimeout(() => {
            item.classList.remove('unfolding-content--is-opened');
          }, animateTime);
        } else {
          item.classList.add('unfolding-content--is-opened')
          unfoldingBtn.classList.add('unfolding-content__btn--is-opened')
  
          setTimeout(() => {
            unfoldingBody.style.maxHeight = `${scrollHeight}px`;
          });
        }
      })
    })
  }
  unfoldingContent()
})


