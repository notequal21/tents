if (document.querySelector('.callback-btn')) {
  const callbackBtn = document.querySelector('.callback-btn')
  const callbackContent = document.querySelector('.callback-content')
  const callbackContentClose = document.querySelector('.callback-content__close')

  let toggleCallback = () => {
    if (callbackContent.classList.contains('active')) {
      callbackContent.classList.remove('active')
      callbackBtn.classList.remove('active')
    } else {
      callbackContent.classList.add('active')
      callbackBtn.classList.add('active')
    }
  }

  callbackBtn.addEventListener('click', toggleCallback)
  callbackContentClose.addEventListener('click', toggleCallback)
}