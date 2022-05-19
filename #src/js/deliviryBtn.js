if (document.querySelector('.pricelist-sidemenu__dilivery-btn')) {
  const deliviryBtn = document.querySelector('.pricelist-sidemenu__dilivery-btn')
  const deliviryInput = document.querySelector('.pricelist-sidemenu__dilivery-input')

  let toggleDeliviry = () => {
    if (deliviryInput.classList.contains('active')) {
      deliviryInput.classList.remove('active')
    } else {
      deliviryInput.classList.add('active')
    }
  }

  deliviryBtn.addEventListener('click', toggleDeliviry)
}