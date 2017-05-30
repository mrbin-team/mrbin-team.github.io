/*jslint browser:true, devel:true */
/*global $ */
/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

$(document).ready(function(){
	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
    	$('.navbar-toggle:visible').click();
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
    	target: '.navbar-fixed-top'
	});

	$('div.modal').on('show.bs.modal', function() {
		var modal = this;
		var hash = modal.id;
		window.location.hash = hash;
		window.onhashchange = function() {
			if (!location.hash){
				$(modal).modal('hide');
			}
		};
	});


	var hash = document.location.hash;
	var $window = $(window);
	$(hash).modal('show');
	$window.trigger('scroll');
	$window.trigger('resize');
});
