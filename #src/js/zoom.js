if (document.querySelector('.pricelist-modal-zoom')) {
  let zoomBtn = document.querySelectorAll('.pricelist-modal-zoom')
  let imgCon = document.querySelector('.pricelist-modal__zoom-container')

  let toggleZoom = () => {
    imgCon.classList.contains('active') ? imgCon.classList.remove('active')
      : imgCon.classList.add('active')
  }
  zoomBtn.forEach(item => {
    item.addEventListener('click', toggleZoom)
  })
}