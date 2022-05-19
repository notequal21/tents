

let header = document.querySelector(".header");

let sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
window.onscroll = function () { stickyHeader() };

if (document.querySelector('.pricelist-sidemenu')) {

    let sidemenu = document.querySelector(".pricelist-sidemenu");
    let content = document.querySelector(".pricelist-content");
    let contentBody = document.querySelector(".pricelist-body");
    let pageTop = document.querySelector(".page__top");

    let sticky = contentBody.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            sidemenu.classList.add("sticky");
            content.classList.add("sticky");
            sidemenu.style.top = 20
            sidemenu.style.bottom = 'auto'
            if (window.pageYOffset >= contentBody.clientHeight + pageTop.clientHeight) {
                sidemenu.classList.remove("sticky");
                sidemenu.style.bottom = 0
                content.classList.remove("sticky");
            }
        } else {
            sidemenu.classList.remove("sticky");
            content.classList.remove("sticky");
            sidemenu.style.top = 20
            sidemenu.style.bottom = 'auto'
        }
    }
    window.onscroll = function () { stickyHeader() };
}