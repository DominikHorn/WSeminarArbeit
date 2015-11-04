/*************************** iPhone/iPad Styling ***************************/

if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod'){
	jQuery(document).ready(function(){	
		jQuery("#footer-bottom-outer").css("padding", "0px 32px 0px 32px");
	});
};

/*************************** List Styling ***************************/

jQuery(document).ready(function(){	
	jQuery("ul li:first-child").addClass("li-first");
	jQuery("ul li:last-child").addClass("li-last");		
});


/*************************** Slider ***************************/

jQuery(document).ready(function(){	
	jQuery(".slider-wrapper, .slider").addClass("display");
});


/*************************** Flash/Dropdown Menu Fix ***************************/

jQuery(document).ready(function () {
   fix_flash();    
});


/*************************** Navigation Menus ***************************/

jQuery(document).ready(function(){	

	//cache nav
	var nav = jQuery("#nav");

	//add indicators and hovers to submenu parents
	nav.find("li").each(function() {
		if (jQuery(this).find("ul").length > 0) {

			jQuery("<span/>").html("&#9660;").appendTo(jQuery(this).children(":first"));

			//show subnav on hover
			jQuery(this).mouseenter(function() {
				jQuery(this).find("ul:first").filter(':not(:animated)').slideDown(600);
			});

			//hide submenus on exit
			jQuery(this).mouseleave(function() {
				jQuery(this).find("ul:first").slideUp(100);
			});
			
		}
	});
	
});


/*************************** Lightbox ***************************/

jQuery(document).ready(function(){

	jQuery("div.gallery-item .gallery-icon a").prepend('<span class="hover-image"></span>');
	jQuery("div.gallery-item .gallery-icon a").attr("rel", "prettyPhoto[gallery]");
	var galleryimgWidth = jQuery("div.gallery-item .gallery-icon img").width();
	var galleryimgHeight = jQuery("div.gallery-item .gallery-icon img").height();
	jQuery("div.gallery-item .gallery-icon .hover-image").css({"width": galleryimgWidth, "height": galleryimgHeight});
	jQuery("div.gallery-item .gallery-icon a").css({"width": galleryimgWidth});

	
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'light_square',
		animationSpeed: 'fast'
	});
});


/*************************** Image Hover ***************************/

jQuery(document).ready(function(){

	jQuery('.hover-image, .hover-video').css({'opacity':'0'});
	jQuery('.sc-image, .post-thumbnail, .portfolio-thumbnail, .slide, div.gallery-item .gallery-icon').hover(
		function() {
			jQuery(this).find('.hover-image, .hover-video').stop().fadeTo(750, 1);
			jQuery(this).find("a[rel^='prettyPhoto'] .image, a[rel^='prettyPhoto'] .reflected, a[rel^='prettyPhoto'] .slider-image, a[rel^='prettyPhoto'] .attachment-thumbnail").stop().fadeTo(750, 0.5);
		},
		function() {
			jQuery(this).find('.hover-image, .hover-video').stop().fadeTo(750, 0);
			jQuery(this).find("a[rel^='prettyPhoto'] .image, a[rel^='prettyPhoto'] .reflected, a[rel^='prettyPhoto'] .slider-image, a[rel^='prettyPhoto'] .attachment-thumbnail").stop().fadeTo(750, 1);
		})

});


/*************************** Image Preloader ***************************/

jQuery(function () {
	jQuery('.preload').hide();
});

var i = 0;
var int=0;
jQuery(window).bind("load", function() {
	var int = setInterval("doThis(i)",100);
});

function doThis() {
	var images = jQuery('.preload').length;
	if (i >= images) {
		clearInterval(int);
	}
	jQuery('.preload:hidden').eq(0).fadeIn(400);
	i++;
}


/*************************** Accordion ***************************/

jQuery(document).ready(function(){
	jQuery(".accordion").accordion({ header: "h3.accordion-title" });
	jQuery("h3.accordion-title").toggle(function(){
		jQuery(this).addClass("active");
		}, function () {
		jQuery(this).removeClass("active");
	});	
});


/*************************** Tabs ***************************/

jQuery(document).ready(function(){
	jQuery(".sc-tabs").tabs({
		fx: {
			height:'toggle',
			duration:'fast'
		}
	});	
});


/*************************** Toggle Content ***************************/

jQuery(document).ready(function(){
jQuery(".toggle-box").hide(); 

jQuery(".toggle").toggle(function(){
	jQuery(this).addClass("toggle-active");
	}, function () {
	jQuery(this).removeClass("toggle-active");
});

jQuery(".toggle").click(function(){
	jQuery(this).next(".toggle-box").slideToggle();
});
});


/*************************** Contact Form ***************************/

jQuery(document).ready(function(){
	
	jQuery('#contact-form').submit(function() {

		jQuery('.contact-error').remove();
		var hasError = false;
		jQuery('.requiredFieldContact').each(function() {
			if(jQuery.trim(jQuery(this).val()) == '') {
				jQuery(this).addClass('input-error');
				hasError = true;
			} else if(jQuery(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim(jQuery(this).val()))) {
					jQuery(this).addClass('input-error');
					hasError = true;
				}
			}
		});
	
	});
				
	jQuery('#contact-form .contact-submit').click(function() {
		jQuery('.loader').css({display:"block"});
	});	

});