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

	$(".modal").on("hidden.bs.modal", function()  { // any time a modal is hidden
    	var urlReplace = window.location.toString().split('#', 1)[0];
    	history.pushState(null, null, urlReplace); // push url without the hash as new history item
	});

	// remove modal on ESC
	$('body').keyup(function(ev) {
    	var urlSplit = window.location.toString().split(/#/),
    		urlHash = '#' + urlSplit[1];
		
		if (ev.keyCode === 27) { // ESC key 
			$(urlHash).modal('hide');
		} 
    	// history.pushState(null, null, urlReplace); // push url without the hash as new history item
	});

	$('.modal').on('show.bs.modal', function() {
		var modal = this;
		var modalHash = '#' + modal.id;

		// save new state in browser history
  		history.pushState(null, null, modalHash);

  		// hide modal if the hash changes
		window.onhashchange = function() {
			if (!location.hash){
				$(modal).modal('hide');
			}
		};

		// set the focus on the modal
		setTimeout(function() {
			$(document).focus();
		}, 500);

	});


	var hash = document.location.hash;
	var $window = $(window);
	$(hash).modal('show');
	$window.trigger('scroll');
	$window.trigger('resize');
});
