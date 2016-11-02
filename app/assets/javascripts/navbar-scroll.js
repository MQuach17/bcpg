(function($){
	$(document).scroll(function(){
		offset = $(window).scrollTop();
		console.log(offset);
		if(offset > 500){
			// $('.content').addClass('clear-navbar');
		}
		else if(offset <= 500){
			// $('.content').removeClass('clear-navbar');
		}
	});
})(jQuery)


