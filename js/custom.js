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

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="image/ic_arrow_drop_up.png"></div><div class="quantity-button quantity-down"><img src="image/arrow-down.png"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
});