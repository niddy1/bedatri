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

BDC.bandcamp = {
	
	init: function(){
		$bandcamp = jQuery('.sample-audio');

		var self = this;
		
		focus();
		var listener = window.addEventListener('blur', function() {
		    if (document.activeElement === document.getElementById('bc')) {
		        // clicked
		        $('.img').css('background-image', 'url(js/images/tommy-dance.gif)');
		        $('.img').css('height', '450px');
		    }
		    window.removeEventListener('blur', listener);
		});
	}
}

// BDC.catLinks = {
// 	init: function() {
// 		$( ".preview-text:contains('Frame')" ).css( "text-decoration", "underline" );

// 	}
// }

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
				$input.appendTo(jQuery(".sample"));
				jQuery('.secret-tom').click(function(e){
					e.preventDefault();
					$('.img').css('background-image', 'url(js/images/tommy.jpg)');
					$('div').css( 'cursor', 'url(js/images/tom-face.png), pointer');
					$('div a').css( 'cursor', 'url(js/images/tom-face.png), pointer');
					$('.initials a').text("TOM");
					$('.full-name').text("Tommy Cinema");
					$("a").attr("href", "https://youngnhung.bandcamp.com/releases");
					$('.initials a').attr("href", "/");
					$('.article-title').text('Donate to my Indiegogo');
					$('i').removeClass();
					$('i').addClass('fa fa-money');
					$('.slide').css('background-image', 'url(js/images/wheelchair.png)');
					$('.sample-audio').show();
					$('.sample-audio').append('<iframe id="bc" class="bandcamp" style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3913553568/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://youngnhung.bandcamp.com/album/over-the-hump">Over The Hump by Young N. Hung</a></iframe>');
				})
			}
		}


		$oddArticles.hover(
		  function() {
		    $initials.addClass( "teal" );
		    count +=1;
		    if (count > 100 && !triggered){
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
var rp = '';
$(window).scroll(function() {
	rp= $(window).scrollTop() - 400;
	$('.slide').css('right', rp);
});

$(window).load(function(){
	
});
$(document).ready(function() {
	BDC.aboutLinkAction.init();
	BDC.logoColorChange.init();
	//BDC.catLinks.init();
	BDC.bandcamp.init();
});