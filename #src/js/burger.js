$(document).ready(function(){
    $('.main__burger').click(function(event){
        $('.main__burger, .top__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});