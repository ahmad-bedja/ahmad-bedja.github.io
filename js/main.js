$(document).ready(function() {

	// gestion de l'affichage de l'adresse mail affichée en bas de page
	var $mail = $(".mail-col");
	$mail.css({'top':parseInt($(".contact-item").css('height')) });
	$(".contact-item").hover(function(){
		$mail.slideDown(200);
	});
	$("#contact ").hover(function(){},function(){
		setTimeout(function(){ $mail.slideUp(200); }, 200);
	});


	// NAVBAR Affix
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

	//scroll to anchor
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

//cacher la navbar quand un item est selectioné (mode mobile)
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});