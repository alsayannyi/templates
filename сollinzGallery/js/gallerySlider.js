$(document).ready(function (){

	  $('.slider').slick({
	  	dots: false,
	  	infinite: true,
	  	prevArrow: ".ba-slider__arrow1",
	  	nextArrow: ".ba-slider__arrow2",
	  	slide: "img",
	  	speed: 500,
  		fade: true,
  		cssEase: 'linear'
  		// slidesToShow: 3,
  		// slidesToScroll: 1
	  });
});