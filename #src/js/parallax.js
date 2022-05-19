
if (document.documentElement.clientWidth > 1000) { // disable script if resolution less than 1000px 

  let bg = document.querySelector('.kanuvoye-pomesucud');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
  });

}