$(document).ready(function() {

	$('#page-header .navbar-collapse').on('show.bs.collapse', function () {
		$("#apropos").css("padding-top","+=220" );
	});
	$('#page-header .navbar-collapse').on('hide.bs.collapse', function () {
		$("#apropos").css("padding-top","-=220" );
	});
});
