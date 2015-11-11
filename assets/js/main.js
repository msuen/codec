$(document).ready(function(){
    jQuery('#slider').slippry({
    	speed: 3000,
    	pause: 2500,
    	pager: false, 
    	controls: false
    });
});
// init Masonry
var $grid = $('.grid').masonry({
	// set itemSelector so .grid-sizer is not used in layout
	itemSelector: '.grid-item',
	// use element for option
	columnWidth: '.grid-sizer',
	gutter: 20,
	percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});
