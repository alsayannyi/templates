;(function($){
	"use strict";

	$(function(){
	  $('.ba-slider').slick({
	  	dots: true,
	  	arrows: false,
	  	infinite: true,
	  	speed: 500,
	  	fade: true,
	  	slide: "img",
	  	cssEase: 'linear',
	  	// prevArrow: ".ba-slider__arrow1",
	  	// nextArrow: ".ba-slider__arrow2",
  		// slidesToShow: 3,
  		// slidesToScroll: 1
	  });
	})
})(jQuery);