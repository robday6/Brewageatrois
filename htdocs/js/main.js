// document loaded
$(document).ready(function () {
	setTimeout(function() {
		$('body.hidden').removeClass('hidden');
	},500);
});


// show or hide contact
var $contactTrigger = $('.contact-trigger');
var $wrapper = $('.wrapper');
var $contactWrapper = $('.wrapper-contact');

function showContact (e) {
    e.stopPropagation()
    var wrapperContactHeight = $contactWrapper.outerHeight();
    $wrapper.css('top', wrapperContactHeight);
    $wrapper.on('click', hideContact)
}

function hideContact (e) {
    $wrapper.css('top', 0);
}
$contactTrigger.on('click', showContact);
//


// hide on scroll down
var scrolled;
var lastScrollTop = 20;
var delta = 20;
var navbarHeight = $('.wrapper-contact').outerHeight();

$(window).scroll(function(event){
  scrolled = true;
});

setInterval(function(){
  if (scrolled) {
    hasScrolled();
    scrolled = false;
  }
}, 20);

function hasScrolled(){
  var st = $(this).scrollTop();
  // scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
  return;
  // if they scrolled down and are past the navbar, add class .up.
  if (st > lastScrollTop && st > navbarHeight){
    $('.wrapper').css('top', 0);
  } 
  lastScrollTop = st;
}



// typed.js
$(function(){
	setTimeout(function() {
		$(".trio").typed({
			strings: [
				'<strike>MICRO</strike><br><strike>NANO</strike><br>PICO',
				'BREWING<br>TESTING<br>BOILING',
				'MALT<br>HOPS<br>YEAST',
				'MASH<br>SPARGE<br>BOIL',
				'<strike>SOUTH</strike><br>EAST<br>LONDON',
				'ONE<br>SMALL<br>STEP',
				'ONE<br>GIANT<br>LEAP',
				'CALL<br>YOUR<br>MOTHER',
				'LAGER<br>LAGER<br>LAGER',
				'GREAT<br>WITH<br>CRISPS', 
				],
			typeSpeed: 0,
			startDelay: 0,
			backSpeed: 0,
			backDelay: 2000,
			loop: true,
			loopCount: false,
			showCursor: false,
			cursorChar: "|",
			attr: null,
			contentType: 'html',
			callback: function() {},
			preStringTyped: function() {},
			onStringTyped: function() {},
			resetCallback: function() {}
		});
	},2750);
});