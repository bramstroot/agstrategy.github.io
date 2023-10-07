jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 800 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // ONE PAGE NAVIGATION
	$(".navigation-main .navigation-items").onePageNav({
		currentClass: "current",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: ":not(.external)",
		easing: "swing"
	});
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        
    });
    
    
    // INIT PARALLAX PLUGIN
    $(".background-content.parallax-on").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated-from-bottom", { 
        duration: 600,
        delay: 0,
        origin: "bottom",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    
    
    // WORK CAROUSEL
    $('.work-carousel').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 30,
        autoplay: true,
        responsive:{
            800:{
                items: 3,
            },
        }
    });
    
        
});


jQuery(document).ready(function($) {
    "use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
    
    
    // // SCROLL REVEAL SETUP
    // window.sr = ScrollReveal();
    // sr.reveal(".scroll-animated", { 
    //     duration: 600,
    //     delay: 0,
    //     origin: "left",
    //     rotate: { x: 0, y: 0, z: 0 },
    //     opacity: 0,
    //     distance: "20vh",
    //     viewFactor: 0.4,
    //     scale: 1,
    // });
    
    
    // AJAX CONTACT FORM SUBMIT
    $("#contact-form").submit(function(e) {

        e.preventDefault();
        var postdata = $(this).serialize();

        $.ajax({

            type: "POST",
            url: "assets/php/contact.php",
            data: postdata,
            dataType: "json",
            success: function(json) {

                $("#contact-form input, #contact-form textarea").removeClass("error");

                setTimeout(function(){

                    if (json.nameMessage !== "") {

                        $("#contact-form-name").addClass("error");

                    }

                    if (json.emailMessage !== "") {

                        $("#contact-form-email").addClass("error");

                    }

                    if (json.messageMessage !== "") {

                        $("#contact-form-message").addClass("error");

                    }

                }, 10);

                if (json.nameMessage === "" && json.emailMessage === "" && json.messageMessage === "") {

                    $("#contact-form.error input, #contact-form.error textarea").removeClass("error");
                    $('#contact-form').addClass("success");
                    $('#contact-form textarea, #contact-form input').val("");
                    
                    setTimeout(function(){
                        
                        $('#contact-form').removeClass("success");
                        
                    },4000);

                }

            }

        });

    });

    
});