// page init
jQuery(function(){
	"use strict";

	initTabs();
	initIsoTop();
	initAnchors();
	initCounter();
	initbackTop();
	initLightbox();
	initAddClass();
	initGoogleMap();
	initTextRotator();
	initSlickSlider();
	initProgressBar();
	initVegasSlider();
	initStickyHeader();
	initFormValidation();
	initNavRemoveClass();
	initStyleChanger();
});


// Counter init
function initCounter() {
	jQuery('.timeline-count').counterUp({
		delay: 10,
		time: 2000
	});
}




// style changer
function initStyleChanger() {
	var element = jQuery('#style-changer');

	if(element) {
		$.ajax({
			url: element.attr('data-src'),
			type: 'get',
			dataType: 'text',
			success: function(data) {
				var newContent = jQuery('<div>', {
					html: data
				});

				newContent.appendTo(element);
			}
		});
	}
}