$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#masukan').fadeIn();
            } else {
                $('#masukan').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#masukan').click(function () {
            $('#masukan').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#masukan').tooltip('show');

});