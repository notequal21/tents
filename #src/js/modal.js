
if (document.querySelector('.competition-top__btn')) {
	const openBtn = document.querySelectorAll('.competition-top__btn')
	const closeBtn = document.querySelector('.competition-modal__body-close')
	const modal = document.querySelector('.competition-modal')
	const modalBg = document.querySelector('.competition-modal__bg')
	const body = document.querySelector('body')

	let toggleModal = (e) => {
		e.preventDefault()

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
			body.classList.remove('lock')
		} else {
			modal.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.forEach((item) => {
		item.addEventListener('click', toggleModal)
	})
	closeBtn.addEventListener('click', toggleModal)
	modalBg.addEventListener('click', toggleModal)
}

if (document.querySelector('.pricelist-content__item-img') && document.querySelector('.pricelist-modal')) {
	const openBtn = document.querySelectorAll('.pricelist-content__item-img')
	const modal = document.querySelector('.pricelist-modal')
	const modalBg = document.querySelector('.pricelist-modal__bg')
	const closeBtn = document.querySelector('.pricelist-modal__close')
	const body = document.querySelector('body')

	let toggleModal = (e) => {
		e.preventDefault()

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
			body.classList.remove('lock')
		} else {
			modal.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.forEach((item) => {
		item.addEventListener('click', toggleModal)
	})
	modalBg.addEventListener('click', toggleModal)
	closeBtn.addEventListener('click', toggleModal)
}

if (document.querySelector('.gallery-photo__modal')) {
	const openBtn = document.querySelectorAll('.gallery-page__body-item')
	const modal = document.querySelector('.gallery-photo__modal')
	const modalBg = document.querySelector('.gallery-photo__modal-bg')
	const closeBtn = document.querySelector('.gallery-photo__modal-close')
	const body = document.querySelector('body')

	let toggleModal = (e) => {
		e.preventDefault()

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
			body.classList.remove('lock')
		} else {
			modal.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.forEach((item) => {
		item.addEventListener('click', toggleModal)
	})
	modalBg.addEventListener('click', toggleModal)
	closeBtn.addEventListener('click', toggleModal)
}

if (document.querySelector('.cart-photo__modal')) {
	const openBtn = document.querySelectorAll('.cart-body__item-img')
	const modal = document.querySelector('.cart-photo__modal')
	const modalBg = document.querySelector('.cart-photo__modal-bg')
	const closeBtn = document.querySelector('.cart-photo__modal-close')
	const body = document.querySelector('body')

	let toggleModal = (e) => {
		e.preventDefault()

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
			body.classList.remove('lock')
		} else {
			modal.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.forEach((item) => {
		item.addEventListener('click', toggleModal)
	})
	modalBg.addEventListener('click', toggleModal)
	closeBtn.addEventListener('click', toggleModal)
}

if (document.querySelector('.recomendation-photo__modal')) {
	const openBtn = document.querySelectorAll('.recomendation-item__btn')
	const modal = document.querySelector('.recomendation-photo__modal')
	const modalBg = document.querySelector('.recomendation-photo__modal-bg')
	const closeBtn = document.querySelector('.recomendation-photo__modal-close')
	const body = document.querySelector('body')

	let toggleModal = (e) => {
		e.preventDefault()

		if (modal.classList.contains('active')) {
			modal.classList.remove('active')
			body.classList.remove('lock')
		} else {
			modal.classList.add('active')
			body.classList.add('lock')
		}
	}

	openBtn.forEach((item) => {
		item.addEventListener('click', toggleModal)
	})
	modalBg.addEventListener('click', toggleModal)
	closeBtn.addEventListener('click', toggleModal)
}
