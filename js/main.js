$(document).ready(function() {

	var cpt = 0;
	$('.frise-item').viewportChecker({
		classToAdd: 'front', // Class to add to the elements when they are visible
		offset: 200, 
		repeat: true, // Add the possibility to remove the class if the elements are not visible
		// callbackFunction: function(elem, action){
		// 	var index = $(elem).index();
		// 	$(elem).css("z-index",index);
		// 	$(elem).prev().css("z-index",cpt++);
		// 	$(elem).prev().css("background-color",red);
		// }
	});
});
