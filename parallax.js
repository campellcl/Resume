$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	//console.log(wScroll);
	
	//parallax background
	$('.background').css({
		/* move the background slower than the midground, but in the same direction as mid. */
		'transform': 'translate(0px, ' + wScroll/4 + '%)'
	});
	
	//paralax midground
	$('.midground').css({
		/* move the text down at 1/2 the scroll pace */
		'transform': 'translate(0px, ' + wScroll/2 + '%)'
	});

	//paralax foreground
	$('.foreground').css({
		/* move the foreground faster than the midground, and in opposite direction as mid. */
		'transform': 'translate(0px, -' + wScroll / 45 + '%)'
	});
	/*
	//parallax phone screen
	$('.phone').css({
		'transform': 'translate(0px,-' + wScroll/20 + '%)'
	});
	/*
	//window cutout opacity
	if(wScroll > $('.large-window').offset().top) {
		$('.large-window').fadeOut('800', function() {
			//do something
		});
	}
	*/
});