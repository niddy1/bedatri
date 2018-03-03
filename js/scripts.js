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
		count = 0;
		$evenArticles = jQuery('a.article:even');
		$oddArticles = jQuery('a.article:odd');
		$thirdArticles = jQuery('a.article:nth-child(3n+3)');
		$initials = jQuery('.initials');

		function createTom(){
			if ( jQuery('.secret-tom').length == 0 ) {
				var $input = jQuery('<input type="button" class="secret-tom" value="TOM MODE" />');
				$input.appendTo(jQuery(".secret"));
				jQuery('.secret-tom').click(function(e){
					e.preventDefault();
					$('.img').css('background-image', 'url(css/images/tom.jpg)');
					$('div').css( 'cursor', 'url(css/images/tom-face.png), auto');
					$('.initials a').text("TOM");
					$('.full-name').text("Tommy Cinema");
				})
			}
		}


		$oddArticles.hover(
		  function() {
		    $initials.addClass( "teal" );
		    count +=1;
		    console.log(count);
		    if (count > 50){
		    	createTom();
		    }
		  }, function() {
		    $initials.removeClass( "teal" );
		  }
		);
		$evenArticles.hover(
		  function() {
		    $initials.addClass( "pink" );
		    count +=1;
		    console.log(count);
		  }, function() {
		    $initials.removeClass( "pink" );
		  }
		);
		$thirdArticles.hover(
		  function() {
		    $initials.addClass( "yellow" );
		    count +=1;
		    console.log(count);
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
	BDC.logoColorChange.init();
});