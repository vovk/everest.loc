$(document).ready(function(){
	// owl-carousel
	$(".owl-carousel").owlCarousel({
		items: 3
	});
	$(".owl-carousel2").owlCarousel({
		items: 3
	});


	$('.eye').on("click", function(){
		$(this).parents('div.col-md-3').css('width', '100%');
		$(this).parents('.product-img-description').next().css({'display':'block','float':'left'});
		$(this).css({'float':'left'});
	});
});