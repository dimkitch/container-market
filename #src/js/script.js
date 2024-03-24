@@include('./libs/swiper-bundle.min.js')
@@include('./libs/jquery-3.7.1.min.js')
@@include('./components/custom-input.js')
@@include('./components/custom-modal.js')
@@include('./components/custom-tabs.js')
@@include('./components/accordion.js')
@@include('./components/unfolding-content.js')

document.addEventListener('DOMContentLoaded',() => {

  const actionsSlider = new Swiper('.actions-slider__slider', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 1.2,
    navigation: {
      nextEl: '.actions-slider__btn-next',
      prevEl: '.actions-slider__btn-prev',
    },
    pagination: {
      el: '.actions-slider__pagination',
      type: 'fraction',
    },
    breakpoints: {
      576: {
        slidesPerView: 2.2
      },

      768: {
        slidesPerView: 1.8 
      },

      1024: {
        slidesPerView: 2.2
      },

      1280: {
        slidesPerView: 3
      }
    }
  })

  const aboutCompanySwiper = new Swiper('.about-company__slider', {
    spaceBetween: 8,
    slidesPerView: 2.2,
    breakpoints: {
      576: {
        slidesPerView: 3.2
      },

      768: {
        slidesPerView: 4.2
      },

      1280: {
        slidesPerView: 5
      }
    }
  })

  // const showcaseSlider = new Swiper('.showcase__slider', {
  //   speed: 400,
  //   spaceBetween: 20,
  //   slidesPerView: 4
  // })

  var realizationProjectsSliderSmall = new Swiper(".realization-projects__slider-small", {
    speed: 400,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: ".realization-projects__btn-next",
      prevEl: ".realization-projects__btn-prev",
    },
    // controller: {
    //   control: '.realization-projects__slider-big',
    //   by: 'slide',
    // },
  });

  var realizationProjectsSliderBig = new Swiper(".realization-projects__slider-big", {
    speed: 400,
    slidesPerView: 'auto',
    navigation: {
      nextEl: ".realization-projects__btn-next",
      prevEl: ".realization-projects__btn-prev",
    },
    pagination: {
      el: '.realization-projects__pagination',
      type: 'fraction',
    },
    // controller: {
    //   control: '.realization-projects__slider-small',
    //   by: 'slide',
    // },
    // thumbs: {
    //   swiper: realizationProjectsSliderSmall,
    // },
  });
  realizationProjectsSliderSmall.controller.control = realizationProjectsSliderBig
  realizationProjectsSliderBig.controller.control = realizationProjectsSliderSmall
  
  const lettersAppreciationSlider = new Swiper('.letters-appreciation__slider', {
    speed: 400,
    spaceBetween: 19,
    slidesPerView: 1.1,
    navigation: {
      nextEl: '.letters-appreciation__btn-next',
      prevEl: '.letters-appreciation__btn-prev',
    },
    pagination: {
      el: '.letters-appreciation__pagination',
      type: 'fraction',
    },
    breakpoints: {
      576: {
        slidesPerView: 2.6
      },
      768: {
        slidesPerView: 2.6
      },
      1024: {
        slidesPerView: 4.3
      },
      1280: {
        slidesPerView: 4.6
      }
    }
  })

  const articlesSlider = new Swiper('.articles-slider__slider', {
    speed: 400,
    slidesPerView: 'auto',
    // navigation: {
    //   nextEl: '.letters-appreciation__btn-next',
    //   prevEl: '.letters-appreciation__btn-prev',
    // },
    // pagination: {
    //   el: '.letters-appreciation__pagination',
    //   type: 'fraction',
    // },
    breakpoints: {
      // 576: {
      //   slidesPerView: 2.6
      // },
      768: {
        slidesPerView: 1.1
      },
      1480: {
        slidesPerView: 1.4
      }
    }
  })

  const benefitsSlider = new Swiper('.benefits__slider', {
    speed: 400,
    slidesPerView: 'auto',
    autoHeight: true,
    spaceBetween: 8,
    breakpoints: {
      375: {
        slidesPerView: 2.3
      },
      576: {
        slidesPerView: 3.3
      },
      768: {
        slidesPerView: 5
      }
    }
  })

  const centeredSlider = new Swiper('.centered-slider__inner', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 12,
    navigation: {
      nextEl: '.centered-slider__btn-next',
      prevEl: '.centered-slider_btn-prev',
    },
    pagination: {
      el: '.centered-slider__pagination',
      type: 'fraction',
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      1024: {
        spaceBetween: 36,
      }
    }
  })

  const mainProductSliderPreview = new Swiper('.main-product-slider__preview-slider', {
    slidesPerView: 5,
    spaceBetween: 4,
    grid: {
      rows: 2,
      fill: 'row',
    },
    breakpoints: {
      768: {
        slidesPerView: 6,
        spaceBetween: 6,
      }
    }
  })

  const mainProductSliderBig = new Swiper('.main-product-slider__big-slider', {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: mainProductSliderPreview,
    },
  })
})

window.addEventListener("load", function(){

  @@include('webP.js')

})


