console.log('we good');
var BDC ={};

BDC.aboutLinkAction = {
	

	init: function(){
		$aboutLink = jQuery('.about-link');
		$aboutContainer = jQuery('.about-container');
		$articleContainer = jQuery('.article-container');

		var self = this;
		
		$aboutLink.click(function(e){
			e.preventDefault();
			$aboutContainer.toggle();
			$articleContainer.toggle();
		})
	}
}


$(window).scroll(function() {

});

$(window).load(function(){
	
});
$(document).ready(function() {
	BDC.aboutLinkAction.init();
	// jQuery('.about-link').click(function(e){
	// 			e.preventDefault();
	// 			alert('hiii');

	// 		})

});