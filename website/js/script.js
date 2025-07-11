$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);
    });

    $('#learnMoreBtn').click(function() {
        alert('Thanks for your interest! More information would load here.');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });
});