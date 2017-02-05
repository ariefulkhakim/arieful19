
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

				



	
	new WOW().init();	
	
})(jQuery);    


