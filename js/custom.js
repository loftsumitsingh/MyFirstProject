// Sticky Header jQuery

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("heade.site-header").addClass("fixedheader");
    } else {
        $("heade.site-header").removeClass("fixedheader");
    }
});



// Header Responsive jQuery


jQuery("#nav-toggle").click(function(event){
	event.stopPropagation();
	jQuery(this).toggleClass("open");
	jQuery(".navigation-outer").toggleClass("open-menu");
	jQuery(".html-overlay").toggleClass("active");
	jQuery("body").toggleClass("overflow-hidden");
});

jQuery(".navigation-outer").click(function(event){
	event.stopPropagation();
});

jQuery(".html-overlay").click(function(event){
	event.stopPropagation();
	jQuery(this).removeClass("active");
	jQuery("#nav-toggle").removeClass("open");
	jQuery(".navigation-outer").removeClass("open-menu");
	jQuery("body").removeClass("overflow-hidden");
});



// Match Height jQuery

jQuery(function($){
	$('.matchheight').matchHeight();			
});	



// Testimonial Slider jQuery


$(".testimonial-carousel").owlCarousel({
	loop:true,
	nav: true,
	dots: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout:6000,
	items:1
});// Sticky Header jQuery

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 150) {
        $("heade.site-header").addClass("fixedheader");
    } else {
        $("heade.site-header").removeClass("fixedheader");
    }
});



// Header Responsive jQuery


jQuery("#nav-toggle").click(function(event){
	event.stopPropagation();
	jQuery(this).toggleClass("open");
	jQuery(".navigation-outer").toggleClass("open-menu");
	jQuery(".html-overlay").toggleClass("active");
	jQuery("body").toggleClass("overflow-hidden");
});

jQuery(".navigation-outer").click(function(event){
	event.stopPropagation();
});

jQuery(".html-overlay").click(function(event){
	event.stopPropagation();
	jQuery(this).removeClass("active");
	jQuery("#nav-toggle").removeClass("open");
	jQuery(".navigation-outer").removeClass("open-menu");
	jQuery("body").removeClass("overflow-hidden");
});



// Match Height jQuery

jQuery(function($){
	$('.matchheight').matchHeight();			
});	



// Testimonial Slider jQuery


$(".testimonial-carousel").owlCarousel({
	loop:true,
	nav: true,
	dots: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout:6000,
	items:1
});