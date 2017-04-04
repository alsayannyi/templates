$('#isotope-content').isotope({
	itemSelector: "div[class*='slideIzo']",
	layoutMode: 'masonry'
});

$('.isotope-filter ul li').click(function(){
	$('.isotope-filter ul li').removeClass('active');
	$(this).addClass('active');

	var trigger = $(this).attr('data-filter');
	$('#isotope-content').isotope({
		filter: trigger
	});
});	