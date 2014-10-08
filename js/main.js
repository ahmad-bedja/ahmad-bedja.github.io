$(document).ready(function() {

	var $container = $('#projects-grid');
	// init
	$container.isotope({
		// options
		itemSelector: '.iso-item',
		layoutMode: 'masonry'
	});
});
