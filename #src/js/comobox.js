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