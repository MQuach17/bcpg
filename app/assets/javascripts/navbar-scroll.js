(function($){
	$(document).scroll(function(){
		offset = $(window).scrollTop();
		console.log(offset);
		if(offset > 500){
			// $('.content').addClass('clear-navbar');
			$('.hero-overlay').fadeOut('fast');
		}
		else if(offset <= 500){
			// $('.content').removeClass('clear-navbar');
			$('.hero-overlay').fadeIn('slow');
		}
	});
})(jQuery)


