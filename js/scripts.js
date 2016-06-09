$(document).ready(function() {

	$('.fancybox').fancybox({
		'fitToView': false
	});

	$('.home-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

	$('.home-tv-slider').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.home-radio-slider').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.home-news-slider').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.last-reclam-slider').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.clients-slider').slick({
		autoplay: false,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		variableWidth: true
	});

	$('.vacancies-form__attach-button input').on('change', function() {
		$(this).parents('.vacancies-form__attach').find('.vacancies-form__input').val($(this).val());
	});
});

$(window).bind('load', function() {

	$('.js-gradient').pxgradient({
		step: 2,
		colors: ['#0087d9','#005dbd'],
		dir: 'y'
	});

	$('.js-dotted').dotdotdot();
});