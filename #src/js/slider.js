if (document.querySelector('.about-small-img')) {
    let aboutSmallImg = new Swiper(".about-small-img", {
        spaceBetween: 10,
        slidesPerView: 2,
        watchSlidesProgress: true,
        breakpoints: {
            993: {
                slidesPerView: 2,
                spaceBetween: 22
            },
        }
    });
    let aboutBigImg = new Swiper(".about-big-img", {
        spaceBetween: 5,
        thumbs: {
            swiper: aboutSmallImg,
        },
    });
}
if (document.querySelector('.reviews-tab__content-slider')) {
    let reviewSlider = new Swiper(".reviews-tab__content-slider", {
        spaceBetween: 16,
        slidesPerView: 'auto',
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.reviews-swiper-button-next',
            prevEl: '.reviews-swiper-button-prev',
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
            },
        }
    });
}
if (document.querySelector('.sponsors__slider')) {
    let sponsorsSlider = new Swiper(".sponsors__slider", {
        spaceBetween: 14,
        slidesPerView: 2.8,
        loop: false,
        grabCursor: true,
        navigation: {
            nextEl: '.sponsors__slider-next',
            prevEl: '.sponsors__slider-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        }
    });
}
if (document.querySelector('.about-videos__slider')) {
    let sponsorsSlider = new Swiper(".about-videos__slider", {
        spaceBetween: 18,
        slidesPerView: 'auto',
        loop: false,
        grabCursor: true,
        breakpoints: {
            768: {
                spaceBetween: 30,
                slidesPerView: 4,
            },
        }
    });
}
if (document.querySelector('.pricelist-content__row-content')) {
    let sponsorsSlider = new Swiper(".pricelist-content__row-content", {
        spaceBetween: 20,
        slidesPerView: 'auto',
        loop: false,
        grabCursor: true,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
            },
            1500: {
                spaceBetween: 30,
                slidesPerView: 3,
            },
        }
    });
}

if (document.querySelector('.cart-slider__item')) {
    const swiper = new Swiper('.cart-slider__item', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
            768: {
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: '.cart-slider-button-next',
            prevEl: '.cart-slider-button-prev',
        },
    });
}
if (document.querySelector('.pricelist-modal__img-item')) {
    const swiper = new Swiper('.pricelist-modal__img-item', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.pricelist-modal-button-next',
            prevEl: '.pricelist-modal-button-prev',
        },
    });
}