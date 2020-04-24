(function ($) {
	'use strict';


	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//now when the validation is done we check if the error variable is false (no errors)
		if (error === false) {
			$.post($('#contact-form').serialize(), function (result) {
				//and after the ajax request ends we check the text returned
				if (result === 'sent') {
					//and show the mail success div with fadeIn
					$('#mail-success').fadeIn(500);
				} 
			});
		}
	});

})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();



