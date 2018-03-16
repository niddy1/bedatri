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
		var count = 0;
		var triggered = false;
		$evenArticles = jQuery('a.article:even');
		$oddArticles = jQuery('a.article:odd');
		$thirdArticles = jQuery('a.article:nth-child(3n+3)');
		$initials = jQuery('.initials');

		function createTom(){
			triggered = true;
			if ( jQuery('.secret-tom').length == 0 ) {
				var $input = jQuery('<input type="button" class="secret-tom" value="TOM MODE" />');
				$input.appendTo(jQuery(".secret"));
				jQuery('.secret-tom').click(function(e){
					e.preventDefault();
					$('.img').css('background-image', 'url(css/images/tommy.jpg)');
					$('div').css( 'cursor', 'url(css/images/tom-face.png), auto');
					$('div a').css( 'cursor', 'url(css/images/tom-face.png), auto');
					$('.initials a').text("TOM");
					$('.full-name').text("Tommy Cinema");
					$("a").attr("href", "https://youngnhung.bandcamp.com/releases");
					$('.initials a').attr("href", "/");
					$('.article-title').text('Donate to my Indiegogo');
					$('i').removeClass();
					$('i').addClass('fa fa-money');
					$('.secret-audio').show();
					$('.secret-audio').append('<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3913553568/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://youngnhung.bandcamp.com/album/over-the-hump">Over The Hump by Young N. Hung</a></iframe>');
				})
			}
		}


		$oddArticles.hover(
		  function() {
		    $initials.addClass( "teal" );
		    count +=1;
		    if (count > 200 && !triggered){
		    	console.log('undred undred undred')
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
		  }, function() {
		    $initials.removeClass( "pink" );
		  }
		);
		$thirdArticles.hover(
		  function() {
		    $initials.addClass( "yellow" );
		    count +=1;
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