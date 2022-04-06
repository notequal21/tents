
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