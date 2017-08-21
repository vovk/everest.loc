$(document).ready(function(){
	// owl-carousel
	$(".imageCategory .owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            640: {
                items: 3
            }
        }
	});
    $('#catalogSlider .owl-carousel').owlCarousel({
        items: 3,
        touchDrag: 0,
        pullDrag: 0,
        mouseDrag: 0,
        responsive: {
            0: {
                items: 1
            },
            420: {
                items: 2
            },
            640: {
                items: 3
            }
        }
    });
    document.getElementById('next-slide').addEventListener('click', function(){
        $('#popularProducts').trigger('next.owl.carousel');
    });

    document.getElementById('prev-slide').addEventListener('click', function(){
        $('#popularProducts').trigger('prev.owl.carousel');
    });
});