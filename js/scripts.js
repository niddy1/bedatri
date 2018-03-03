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

BDC.logoColorChange = {
	init: function () {
		$evenArticles = jQuery('a.article:even');
		$oddArticles = jQuery('a.article:odd');
		$thirdArticles = jQuery('a.article:nth-child(3n+3)');
		$initials = jQuery('.initials');
		console.log($evenArticles.length)
		$evenArticles.hover( function (){
			console.log('hi');
		})
		$oddArticles.hover( function (){
			console.log('good');
		})

		$oddArticles.hover(
		  function() {
		    $initials.addClass( "teal" );
		  }, function() {
		    $initials.removeClass( "teal" );
		  }
		);
		$evenArticles.hover(
		  function() {
		    $initials.addClass( "pink" );
		    console.log('meeeme')
		  }, function() {
		    $initials.removeClass( "pink" );
		  }
		);
		$thirdArticles.hover(
		  function() {
		    $initials.addClass( "yellow" );
		    console.log('yell')
		  }, function() {
		    $initials.removeClass( "yellow" );
		  }
		);
	}
}
// #00C9C1
// #CB356A
// #D09F02

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
	BDC.logoColorChange.init();

});