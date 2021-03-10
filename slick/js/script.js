$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 600,
				settings: {
					slidesToShow:1
				}
			},
			
		]
	});


	$('.slider-three-section').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
	});

	$('.slider-five-section').slick({
		arrows: true,
		dots: false,
		slidesToShow: 2,
		// slidesPerRow: 1,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			},
		]
	});

});

