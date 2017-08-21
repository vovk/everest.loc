$(document).ready(function(){
	// owl-carousel
	$(".owl-carousel").owlCarousel({
		items: 3
	});
	$('#catalogSlider .owl-carousel').owlCarousel({
		items: 3,
        nav: 1,
        navText: ["prev", "next"],
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
    });

	$('.eye').on("click", function(){
		$(this).parents('div.col-md-3').css('width', '100%');
		$(this).parents('.product-img-description').next().css({'display':'block','float':'left'});
	});
});