$(document).ready(function(){
	// owl-carousel
	$(".categories-content .owl-carousel").owlCarousel({
		items: 3
	});
	$('#catalogSlider .owl-carousel').owlCarousel({
		items: 3,
       // nav : true,
       // navText: ['<button class="owl-prev">Prev</button>', '<button class="owl-next">Next</button>'],
       // navContainerClass: "owl-nav",
       // navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
    });


document.getElementById('next-slide').addEventListener('click', function(){
   $('#catalogSlider .owl-carousel').trigger('next.owl.carousel');
});

document.getElementById('prev-slide').addEventListener('click', function(){
   $('#catalogSlider .owl-carousel').trigger('prev.owl.carousel');
});


	$('.eye').on("click", function(){
		$(this).parents('div.col-md-3').css('width', '100%');
		$(this).parents('.product-img-description').next().css({'display':'block','float':'left'});
	});
});