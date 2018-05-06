jQuery(document).ready(function($) {
	var headerHeight = $('#main-header').outerHeight();
	
	$(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		
		if(scrolled >= headerHeight) {
			$('#main-header').addClass('sticky-header');
			$('html').css('padding-top', headerHeight + 'px');
		} else {
			$('#main-header').removeClass('sticky-header');
			$('html').css('padding-top','0');
		}
	});
});