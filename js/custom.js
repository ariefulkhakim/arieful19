			
(function ($) {
 "use strict";
 	// ==========Navigation==========
 	$('a.page-scroll').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1500);
		e.preventDefault();
	});		

	$(window).on('scroll', function() {
	  if ($(this).scrollTop() > 100) {
		$('.menu-top').addClass('menu-show');
	  } else {
		$('.menu-top').removeClass('menu-show');
	  }
	});
	
	$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
	});

	// mixitup	
	$('.portfolio-wrapper').mixItUp();

	// owlCarousel
	$(".testimonial-content").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            theme: "tp-round-button",
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: true,
        });

	new WOW().init();	
	
})(jQuery);    

