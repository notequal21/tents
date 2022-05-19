$(document).ready(function () {
    $('.faq-body__item-title').click(function (event) {
        if ($('.faq-body').hasClass('one')) {
            $('.faq-body__item-title').not($(this)).removeClass('active');
            $('.faq-body__item-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    });
});
$(document).ready(function () {
    $('.faq-body__content-item-title').click(function (event) {
        if ($('.alahot-body__content').hasClass('one')) {
            $('.faq-body__content-item-title').not($(this)).removeClass('active');
            $('.faq-body__content-item-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    });
});
$(document).ready(function () {
    $('.header-menu__btn').click(function (event) {
        if ($('.header-menu__btns').hasClass('one')) {
            $('.header-menu__btn').not($(this)).removeClass('active');
            $('.menu-dropdown-content').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300)
    });
});


if (document.querySelector('.products-slidebar__title')) {
    if (window.innerWidth <= 1200) {
        const spoilerBtn = document.querySelector('.products-slidebar__title')
        const spoilerContent = document.querySelector('.products-slidebar__content')
        let toggleSpoiler = () => {
            if (spoilerBtn.classList.contains('active')) {
                spoilerBtn.classList.remove('active')
                spoilerContent.classList.remove('active')
            } else {
                spoilerBtn.classList.add('active')
                spoilerContent.classList.add('active')
            }
        }
        spoilerBtn.addEventListener('click', toggleSpoiler)
    }
}
if (document.querySelector('.mobile-spoiler-btn')) {
    let isActive = false
    if (window.innerWidth <= 992) {
        const spoilerBtn = document.querySelectorAll('.mobile-spoiler-btn')
        const spoilerContent = document.querySelectorAll('.fullpricelist-table__col')
        let toggleSpoiler = () => {
            isActive = !isActive
            if (isActive) {
                spoilerBtn.forEach(item => {
                    item.classList.add('active')
                })
                spoilerContent.forEach(item => {
                    item.classList.add('active')
                })
            } else {
                spoilerBtn.forEach(item => {
                    item.classList.remove('active')
                })
                spoilerContent.forEach(item => {
                    item.classList.remove('active')
                })
            }
        }
        spoilerBtn.forEach(item => {
            item.addEventListener('click', toggleSpoiler)
        })
    }
}
// if (document.querySelector('.menu-dropdown-btn')) {
//     let isActive = false
//     const spoilerBtn = document.querySelectorAll('.menu-dropdown-btn')
//     const spoilerContent = document.querySelectorAll('.menu-dropdown-content')
//     let toggleSpoiler = () => {
//         isActive = !isActive
//         if (isActive) {
//             spoilerBtn.forEach(item => {
//                 item.classList.add('active')
//             })
//             spoilerContent.forEach(item => {
//                 item.classList.add('active')
//             })
//         } else {
//             spoilerBtn.forEach(item => {
//                 item.classList.remove('active')
//             })
//             spoilerContent.forEach(item => {
//                 item.classList.remove('active')
//             })
//         }
//     }
//     spoilerBtn.forEach(item => {
//         item.addEventListener('click', toggleSpoiler)
//     })
// }