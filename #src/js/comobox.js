if (document.querySelector('.combobox')) {
  const combobox = document.querySelector('.combobox')
  const body = document.querySelector('body')
  const comboboxBtn = document.querySelector('.combobox__active')
  const comboboxContent = document.querySelector('.combobox-list')

  let handleCombobox = () => {
    if (comboboxContent.classList.contains('active')) {
      comboboxContent.classList.remove('active')
      comboboxBtn.classList.remove('active')
      body.classList.remove('lock')
    } else {
      comboboxContent.classList.add('active')
      comboboxBtn.classList.add('active')
      body.classList.add('lock')
    }
  }

  comboboxBtn.addEventListener('click', handleCombobox)
}

if (document.querySelector('.competition-body__top-active')) {
  const comboboxBtn = document.querySelector('.competition-body__top-active')
  const comboboxContent = document.querySelector('.competition-body__top-list')

  let handleCombobox = () => {
    if (comboboxContent.classList.contains('active')) {
      comboboxContent.classList.remove('active')
      comboboxBtn.classList.remove('active')
    } else {
      comboboxContent.classList.add('active')
      comboboxBtn.classList.add('active')
    }
  }

  comboboxBtn.addEventListener('click', handleCombobox)
}

if (document.querySelector('.pricelist-content__item-length')) {
  const btn = document.querySelectorAll('.pricelist-content__item-length')
  const btn2 = document.querySelectorAll('.pricelist-content__item-size')
  const dropdown = document.querySelectorAll('.pricelist-content__item-dropdown')

  const toggleDropdown = () => {
    if (dropdown[0].classList.contains('active')) {
      dropdown.forEach(item => item.classList.remove('active'))
    } else {
      dropdown.forEach(item => item.classList.add('active'))
    }
  }

  btn.forEach(item => item.addEventListener('click', toggleDropdown))
  btn2.forEach(item => item.addEventListener('click', toggleDropdown))
}

if (document.querySelector('.pricelist-modal__cost-length')) {
  console.log(123);
  const btn = document.querySelectorAll('.pricelist-modal__cost-size')
  const btn2 = document.querySelectorAll('.pricelist-modal__cost-length')
  const dropdown = document.querySelectorAll('.pricelist-content__item-dropdown')

  const toggleDropdown = () => {
    if (dropdown[0].classList.contains('active')) {
      dropdown.forEach(item => item.classList.remove('active'))
    } else {
      dropdown.forEach(item => item.classList.add('active'))
    }
  }

  btn.forEach(item => item.addEventListener('click', toggleDropdown))
  btn2.forEach(item => item.addEventListener('click', toggleDropdown))
}