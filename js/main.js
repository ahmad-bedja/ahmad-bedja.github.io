$(document).ready(function() {

	// gestion de l'affichage de l'adresse mail affichée en bas de page
	// var $mail = $("#contact-link");
 	// $mail.css({'top':parseInt($(".contact-item").css('height')) });
	// $(".contact-item").hover(function(){
	// 	$mail.slideDown(200);
	// });
	// $("#contact").hover(function(){},function(){
	// 	setTimeout(function(){ $mail.slideUp(200); }, 200);
	// });


	
	$('#navbar').affix({
        offset: {
            top: $('.container-header').height()+parseInt($('#navbar').css('margin-top')+10),
        }
    });
	$("#navbar").on('affix.bs.affix', function(){
		$(".section:first-of-type").css({"margin-top":"98px","transition":"none"});
	});
	$("#navbar").on('affix-top.bs.affix', function(){
		$(".section:first-of-type").css({"margin-top":"0","transition":"none"});
	});

	//ensavoirplus mobile
	$(".show-details").click(function(){
		$details = $("#viewdetails");
		$details.removeClass("hidden-xs");
		$details.collapse({
            toggle: true
        });
	});



	$('body').scrollspy({ target: '#navbar',offset: $('#navbar').height()*1.3  });

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


	//refermer la navbar quand un item est selectioné (mode mobile)
	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') ) {
	        $(this).collapse('hide');
	    }
	});


	$('body').on('activate.bs.scrollspy', function (ev) {
		
		//changements de couleurs en bas de page
		$elems = $('#navbar .navbar-nav, #navbar .navbar-header, #interets');

		if($(ev.target).attr('id') === 'li_contact'){
			$elems.addClass('end-of-page');
		}else {
			if(!$('#li_contact').hasClass('active')){
				$elems.removeClass('end-of-page');
			}
		}

	});

});
