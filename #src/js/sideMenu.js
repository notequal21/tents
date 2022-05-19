if (document.querySelector('.pricelist-top__filters')) {
  const menu = document.querySelector('.pricelist-top__filters')
  const menuOpen = document.querySelector('.open-menu-btn')
  const menuClose = document.querySelector('.close-menu-btn')

  let toggleMenu = () => {
    if (menu.classList.contains('active')) {
      menu.classList.remove('active')
    } else {
      menu.classList.add('active')
    }
  }

  menuOpen.addEventListener('click', toggleMenu)
  menuClose.addEventListener('click', toggleMenu)

}