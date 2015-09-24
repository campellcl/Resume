//Run Function when DOM is ready
$(function() {
	//ScrollMagic Instantiation 
	//Initialize Controller and Log Debug Info to Console
	var scrollMagicController = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});
	
	//get all slides
	var slides = document.querySelectorAll("section");
	//create scene for every slide
	for (var i = 0; i < slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i]
		})
		.setPin(slides[i])
		.addIndicators()
		.addTo(scrollMagicController);
	}
});