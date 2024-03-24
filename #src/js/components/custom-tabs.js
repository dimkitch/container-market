document.addEventListener('DOMContentLoaded', () => {
  function tabsComponent() {
    const tabWrappers = document.querySelectorAll("[data-tabs]")
  	const tabBody = document.querySelector('[data-tabs-body]')
	  tabBody.style.display = "block"

    tabWrappers.forEach((tabWrapper) => {
      // const tabHeader = tabWrapper.querySelector("[data-tabs-header]")
      const tabHeaderItems = tabWrapper.querySelectorAll("[data-tabs-header-item]")
      const tabBody = tabWrapper.querySelector("[data-tabs-body]")
      const tabBodyItems = tabWrapper.querySelectorAll("[data-tabs-item]")
      tabBody.style.overflow = 'hidden'
      tabBody.style.position = 'relative'

      tabHeaderItems.forEach((tabHeaderItem, index) => {
        tabHeaderItem.addEventListener("click", () => {
          hideAllTabs()
          setActiveTab(index)
        })
      })
  
      // Функция, которая скрывает все табы кроме активного
      function hideAllTabs() {
        tabBodyItems.forEach((item, index) => {
          tabHeaderItems[index].classList.remove("active-tab")
          item.classList.remove('is-visible-tab')
          item.classList.add('is-hidden-tab')
        })
      }
  
      // Функция, которая добавляет активный класс выбраному табу
      function setActiveTab(index) {
        tabHeaderItems[index].classList.add("active-tab")
        tabBodyItems[index].classList.add('is-visible-tab')
        tabBodyItems[index].classList.remove('is-hidden-tab')
      }
  
      // Функция, которая делает активным первый таб
      function setInitionalState() {
        hideAllTabs()
        setActiveTab(0)
      }
  
      setInitionalState()
    })
  }
  
  tabsComponent()
  function eventTabs() {
    const tabNodes = document.querySelectorAll('[data-tabs-header-item]')
    if (!tabNodes) return

    tabNodes.forEach(tab =>{
      tab.addEventListener('click',() => {
        window.dispatchEvent(new Event('reinitAccordion'))
      })
    })
  }
  eventTabs()
})