
// ---- native JS

if (document.querySelector('.header-body__btns-item_menu')) {
	const openBtn = document.querySelector('.header-body__btns-item_menu')
	const closeBtn = document.querySelector('.header-menu__top-close')
	const menuBg = document.querySelector('.header-menu__bg')
	const menu = document.querySelector('.header-menu')
	const body = document.querySelector('body')

	let toggleBurger = () => {
		if (openBtn.classList.contains('active')) {
			openBtn.classList.remove('active')
			menu.classList.remove('active')
			body.classList.remove('lock')
		} else {
			openBtn.classList.add('active')
			menu.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.addEventListener('click', toggleBurger)
	closeBtn.addEventListener('click', toggleBurger)
	menuBg.addEventListener('click', toggleBurger)
}
$(document).ready(function () {
    $('.faq-body__item-title').click(function (event) {
        if ($('.faq-body').hasClass('one')) {
            $('.faq-body__item-title').not($(this)).removeClass('active');
            $('.faq-body__item-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    });
});
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
        slidesPerView: 'auto',
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: '.sponsors__slider-next',
            prevEl: '.sponsors__slider-prev',
        },
        breakpoints: {
            768: {
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
var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        var id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');
    
      activeTrigger.classList.remove('active'); // 1
      trigger.classList.add('active'); // 2
    
      activeContent.classList.remove('active'); // 3
      content.classList.add('active'); // 4
    });
});



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});