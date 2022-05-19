if (document.querySelector('.lang-select__btn')) {
  const langSelect = document.querySelector('.lang-select')
  const langSelectBtn = document.querySelector('.lang-select__btn')
  const langSelectDropdown = document.querySelector('.lang-select__dropdown')

  let toggleSelect = () => {
    if (langSelectDropdown.classList.contains('active')) {
      langSelectDropdown.classList.remove('active')
      langSelect.classList.remove('active')
    } else {
      langSelectDropdown.classList.add('active')
      langSelect.classList.add('active')
    }
  }

  langSelectBtn.addEventListener('click', toggleSelect)
}