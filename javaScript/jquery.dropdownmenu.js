;(function($, window, document, undefined){
	"use strict"
	// variables
	var  nav, jn, settings,
		jQueryNav = function(){};
	var timer= 0;

	jQueryNav.prototype = {
		init: function(elem, options){
			nav = $(elem),
			settings = $.extend ({}, $.jQueryNav.defaults, options );
			this.appendtouchblock();
			this.slidenav();
		},
		slidenav: function(){
			if ($(window).width() > settings.responsiveat) {
				$('.has-sub-menu').on(  'mouseenter', function(){
						if(!$(this).hasClass('active')){
							$('.has-sub-menu').removeClass('.active');
							$(this).addClass('active').find('>ul').addClass('show').stop(true, true).hide().slideDown(settings.slidetime);
						}else{
							clearTimeout(timer);
						}
					})
				.on('mouseleave', function(){
						var $this = $(this);
						timer = setTimeout(function(){
								$this.removeClass('active');
								 $this.find('>ul').removeClass('show')//.stop(true, true)
								.delay((nav.find('.show').length)? 1 : settings.holdtime).slideUp((nav.find('.show').length)? 1 : settings.slidetime);
							}, 200);
					});
			}else{
				$('.has-sub-menu').off();
				 $( '.' + settings.arrowclass)
					.on('touchstart mousedown', function(e) {
					  e.preventDefault();
					  e.stopPropagation();
					  return $(this).on('touchmove mousemove', function(e) {
						return $(window).off("touchmove mousemove");
					  });
					})
					.on('touchend mouseup', function(e) {
					  e.preventDefault();
					  e.stopPropagation();
					  var $sub = $(this).closest('.has-sub-menu').addClass('active').find('>ul');
						return $sub.toggleClass('show').slideToggle(settings.slidetime);
					});
			}
			$('.has-sub-menu a').click(function() {
			  $(this).sibling('>ul').toggleClass('show').slideToggle(settings.slidetime);
			  //return $(this).parent('.item-with-ul').find('>ul').addClass("open").show();
			});
		},
		appendtouchblock: function(){
			nav.find('li').each(function(){
				var $this = $(this);
				if($this.find('ul').length){
					$this.addClass('has-sub-menu').append('<span class='+ settings.arrowclass + '>&#9660</span>');
				}
			});
		}
	};
	$.fn.jQueryNav = 	function(options){
			jn = new jQueryNav();
			jn.init(this, options);
			//$.jQueryNav.instance = jn;
			return $(this);
		};
	$.jQueryNav = {
		defaults: {
			'animationSpeed': 'slow',
			'arrowclass': 'touch-block',
			'activeclass': 'active',
			'holdtime' :1000,
			'slidetime' : 100,
			'responsive': true,
			'responsiveat': 500
		}
	};
})(jQuery, window, document);
