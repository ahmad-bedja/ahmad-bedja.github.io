$(document).ready(function() {

	$('#navbar .navbar-collapse').on('show.bs.collapse', function () {
		$("#apropos").css("padding-top","+="+$("#apropos").height() );
	});
	$('#navbar .navbar-collapse').on('hide.bs.collapse', function () {
		$("#apropos").css("padding-top",0 );
	});

	$('#navbar').affix({
        offset: {
            top: $('.container-header').height()+parseInt($('#navbar').css('margin-top'))
        }
    });

	$("#navbar").on('affix.bs.affix', function(){
		$(".section:first-of-type").css({"margin-top":"98px","transition":"none"});
	});

	$("#navbar").on('affix-top.bs.affix', function(){
		$(".section:first-of-type").css({"margin-top":"0","transition":"none"});
	});

	$('body').scrollspy({ target: '#navbar',offset: $('#navbar').height() });

	$("#navbar ul li a[href^='#']").on('click', function(e) {

		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 300);
	});
});
