// Viewpoint Function
var viewpoint = $(window).width();

$(document).ready(function(){
	var display = window.innerWidth;
	var initiate = document.getElementById('pageMenu');
	var contentMenu =document.getElementById('listMenu');
	console.log(display);
	if (display < 768) {
		initiate.classList.add("btn-group");
		contentMenu.classList.add("dropdown-menu", "pull-right");
		contentMenu.style.background = "rgba(175,184,189, .5)";
		contentMenu.style.right = "15px";
		//change styles for children elements in List
		var childrenLi = contentMenu.getElementsByTagName("li");
		for (var i = 0; i < childrenLi.length; i++) {
			childrenLi[i].style.display = "block"
		}
		//create hamburger button and required attributes
		var hamburger = document.createElement('button');
		pageMenu.insertBefore(hamburger, contentMenu);
		hamburger.className ="btn btn-default dropdown-toggle pull-right menuButton";
		hamburger.setAttribute("type", "button");
		hamburger.setAttribute("data-toggle", "dropdown");
		hamburger.setAttribute("aria-haspopup", "true");
		hamburger.setAttribute("aria-expanded", "false");
		hamburger.style.background = "#ffe600";
		hamburger.style.marginRight = "2vw";

		//add 2 child span within button
		var span1 = document.createElement('span');
		hamburger.appendChild(span1);
		span1.classList.add("glyphicon", "glyphicon-menu-hamburger");
		span1.setAttribute('aria-hidden', 'true');
		var span2 = document.createElement('span');
		hamburger.appendChild(span2);
		span2.classList.add('sr-only');
		span2.innerHTML = "Toggle Dropdown";
	}


	// var initiate = document.getElementById('pageMenu');
	// var contentMenu =document.getElementById('listMenu');
	// if (viewpoint < 768) {
	// // statement
	
	// initiate.classList.add("btn-group");
	// contentMenu.classList.add("dropdown-menu", "pull-right");
	// contentMenu.style.background = "rgba(175,184,189, .5)";
	// contentMenu.style.right = "15px";
	// //change styles for children elements in List
	// var childrenLi = contentMenu.getElementsByTagName("li");
	// for (var i = 0; i < childrenLi.length; i++) {
	// 	childrenLi[i].style.display = "block"
	// }
	// //create hamburger button and required attributes
	// var hamburger = document.createElement('button');
	// pageMenu.insertBefore(hamburger, contentMenu);
	// hamburger.className ="btn btn-default dropdown-toggle pull-right";
	// hamburger.setAttribute("type", "button");
	// hamburger.setAttribute("data-toggle", "dropdown");
	// hamburger.setAttribute("aria-haspopup", "true");
	// hamburger.setAttribute("aria-expanded", "false");
	// hamburger.style.background = "#ffe600";
	// //add 2 child span within button
	// var span1 = document.createElement('span');
	// hamburger.appendChild(span1);
	// span1.classList.add("glyphicon", "glyphicon-menu-hamburger");
	// span1.setAttribute('aria-hidden', 'true');
	// var span2 = document.createElement('span');
	// hamburger.appendChild(span2);
	// span2.classList.add('sr-only');
	// span2.innerHTML = "Toggle Dropdown";

});





var Person = function (title, text, fb, twitter) {

this.title = title;
this.text = text;	
// this.fb = link1;
// this.twitter = link2;

this.showDetails = function() {
	document.getElementById("profile").classList.remove("hidden");
	document.getElementById("title").innerHTML = title;
	document.getElementById("text").innerHTML = text;
	// document.getElementsByClassName("fb").innerHTML = link1;
	// document.getElementsByClassName("twtter").innerHTML = link2;
};

}	
var descript1 = "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id <br>\
				dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus <br>\
				convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.";

var descript2 = "ART DIRECTOR bla  nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id <br>\
				dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus <br>\
				convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.";

var descript3 = "WEB DIRECTOR bla nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id <br>\
				dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus <br>\
				convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.";

var descript4 = "PHOTOGRAPHER bla non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id <br>\
				dui posuere blandit. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus <br>\
				convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.";			

var person1 = new Person ("JOHN DOE", descript1);
var person2 = new Person ("JOHN DOE", descript2);
var person3 = new Person ("JOHN DOE", descript3);
var person4 = new Person ("JOHN DOE", descript4);


// remove Person Description

var removeMe = function() {
	document.getElementById("profile").classList.add("hidden");
}

// Header Slider
$(document).ready(function(){
  $('.headSlider').slick({
   	dots: false,
   	arrows: true,
	infinite: true,
	prevArrow: ".arrowLeft",
	nextArrow: ".arrowRight",
	
  });
});
	
// Slick Slider script

$(document).ready(function(){
      $('.slickSlider').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 6,
		  slidesToScroll: 1,
		  prevArrow: ".leftArrow",
		  nextArrow: ".rightArrow",
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		        infinite: true,
		        dots: false
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 375,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
    });

// quotes Slider

$(document).ready(function(){
  $('.quoteSlider').slick({
   	dots: true,
   	arrows: false,
	infinite: true,
	speed: 500,
	fade: true,
	autoplay: true,
	autoplaySpeed: 5000,
	cssEase: 'linear'
  });
});

//Flip the Person Card

// $(document).ready(function(){
//  	$("#card").flip({
//   axis: 'x',
//   back: '.pofileWrapper',
//   trigger: 'hover',
// 	});
// });


// $(document).ready(function(){
// 	$('.flip').hover(function(){
//         $(this).find('.card').toggleClass('flipped');
//     });
// });



// find height for overlay effect


$(window).ready(function($) {
	$('.johnDoe').each(function() {
	 /* iterate through array or object */
	 var overlay = $(this).height();
	$('.flip').hover(function() {
		$('.overlay').css({
	 		bottom: overlay,
	 		height: overlay
	 	});
	 	// $('.overlay:not(:hover)').css({
	 	// 	bottom: '0',
	 	// 	height: '0'
	 	// });
	 }, function() {
	 	/* Stuff to do every *even* time the element is clicked */
	 	$('.overlay').css({
	 		bottom: '0',
	 		height: '0'
	 	});
	});
});
});





