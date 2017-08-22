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

    var element1 = document.getElementById('next-slide');
    var element2 = document.getElementById('prev-slide');
    if (element1){
	    document.getElementById('next-slide').addEventListener('click', function(){
	        $('#popularProducts').trigger('next.owl.carousel');
	    });
	}
	if (element2){
	    document.getElementById('prev-slide').addEventListener('click', function(){
	        $('#popularProducts').trigger('prev.owl.carousel');
	    });
	}

    // tabs
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});