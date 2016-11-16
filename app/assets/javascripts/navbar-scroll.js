(function($){
	$(document).scroll(function(){
		offset = $(window).scrollTop();
		console.log(offset);
		if(offset > 500){
			$('.hero-overlay').hide();
		}
		else if(offset <= 500){
			$('.hero-overlay').fadeIn('slow');
		}
	});
})(jQuery)


