
if (document.querySelector('.menu-burger')) {
	const openBtn = document.querySelector('.menu-burger')
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