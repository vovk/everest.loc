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
    // $(".tabs-menu a").click(function(event) {
    //     event.preventDefault();
    //     $(this).parent().addClass("current");
    //     $(this).parent().siblings().removeClass("current");
    //     var tab = $(this).attr("href");
    //     $(".tab-content").not(tab).css("display", "none");
    //     $(tab).fadeIn();
    // });
    $(".tab-content").hide();
    $(".tab-content:first").show();

    /* if in tab mode */
    $("ul.tabs-menu li").click(function() {
		
      $(".tab-content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs-menu li").removeClass("current");
      $(this).addClass("current");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab-content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs-menu li").removeClass("active");
	  $("ul.tabs-menu li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");

    //cart quantity
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

    //validation form
    function validateForm1() {
	    var name = document.forms["form-order"]["fname"].value;
	    var surname = document.forms["form-order"]["fsurname"].value;
	    var phone = document.forms["form-order"]["fphone"].value;
	    var mail = document.forms["form-order"]["fmail"].value;
	    if ((name == "") || (surname == "") || (mail == "") || (mail == "")){
	        alert("Нужно заполнить все поля");
	        return true;
	    }
	}
	function validateForm2() {
	    var index = document.forms["form-order2"]["findex"].value;
	    var country = document.forms["form-order2"]["fcountry"].value;
	    var area = document.forms["form-order2"]["farea"].value;
	    var city = document.forms["form-order2"]["fcity"].value;
	    var street = document.forms["form-order2"]["fstreet"].value;
	    var house = document.forms["form-order2"]["fhouse"].value;
	    var room = document.forms["form-order2"]["froom"].value;
	    if ((index == "") || (country == "") || (area == "") || (city == "") || (street == "") || (house == "") || (room == "")){
	        alert("Нужно заполнить все поля");
	        return true;
	    }
	}
	//процесс заказа
    $('.order-container1 .next1').on("click", function(){
    	if(!validateForm1()){
    		$(this).closest('.order-container1').toggle(700);
	    	$('.order-container1').next('.order-container2').toggle(400);
	    	$('.ord.this').animate(
	    		{
	    			backgroundColor: '#000',
	    			color: '#fff'
	    		}, 
	    		700,
	    		'easeInSine');
	    	$(this).closest('.order-container1').siblings('.wrapper:first').find('.image-processing').css('height', '2px');
	    	$(this).closest('.order-container1').siblings('.wrapper.wrapper2').find('.ord').addClass('this');
    	}
    });

    $('.order-container2 .next2').on("click", function(){
		if(($('.order-container2').is(':visible'))){
			if(!validateForm2()){
				$(this).closest('.order-container2').toggle(700);
				$('.order-container2').next('.order-container3').toggle(400);
				$('.ord.this').animate(
	    		{
	    			backgroundColor: '#000',
	    			color: '#fff'
	    		}, 
	    		700,
	    		'easeInSine');
	    		$(this).closest('.order-container2').siblings('.wrapper.wrapper2').find('.image-processing').css('height', '2px');
				$(this).closest('.order-container2').siblings('.wrapper.wrapper3').find('.ord').addClass('this');
			}
		}
	});

	$('.order-container3 .show-product>button').on("click", function(){
		if(($('.order-container3').is(':visible'))){
			$('.ord.this').animate(
	    		{
	    			backgroundColor: '#000',
	    			color: '#fff'
	    		}, 
	    		700,
	    		'easeInSine');
    		$(this).closest('.order-container3').siblings('.wrapper.wrapper2').find('.image-processing').css('height', '2px');

		}
	});


	$('#personal .my-address h4.caption').click(function(){
		$('.data-wrapper').toggle(300);
		$(this).toggleClass('ic-down');
	});
});