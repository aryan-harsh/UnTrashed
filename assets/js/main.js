var settings = {

	banner: {

		// Indicators (= the clickable dots at the bottom).
			indicators: true,

		// Transition speed (in ms)
		// For timing purposes only. It *must* match the transition speed of "#banner > article".
			speed: 1500,

		// Transition delay (in ms)
			delay: 5000,


		// Parallax intensity (between 0 and 1; higher = more intense, lower = less intense; 0 = off)
			parallax: 0.25

	}

};

//GET CURRENT LOCATION

let lat=null;
let lon=null;

/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function showPosition(position) {

 	lat=position.coords.latitude;
  	lon=position.coords.longitude;
  	if(lat && lon){
  	init_map();
  }
 	//alert(lat+" "+lon);

}

function init(){
	if (navigator.geolocation) {
    		//console.log(navigator.geolocation);
  		  navigator.geolocation.getCurrentPosition(showPosition);
  			}
  	    else { 
  		  alert("Geolocation is not supported by this browser.");
  			}

}

function init_map() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

    
    	

  if(lat && lon){
	    		var myLatLng = new google.maps.LatLng(lat, lon);
			}
	   
	    var mapOptions = {
	        zoom: 17,
	        center: myLatLng,
	        disableDefaultUI: false,
	        scrollwheel: true,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: true,
	        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#46bcec'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(25.426338899999998,81.7732228),
        map: map,
		icon: 'images/map-marker.png',
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.430130,81.772047),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.431846,81.770164),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.432193,81.769874),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.432596,81.770173),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.432268,81.770978),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.431653,81.770727),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.431796,81.771326),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.431400,81.771763),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.430117,81.772560),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429722,81.773557),
        map: map,
        icon: 'images/trash.png',
    });



    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429807,81.773167),
        map: map,
        icon: 'images/trash.png',
    });



    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429937,81.774428),
        map: map,
        icon: 'images/trash.png',
    });



    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428718,81.773115),
        map: map,
        icon: 'images/trash.png',
    });



    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428924,81.772565),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.430412,81.770256),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.430951,81.769699),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.430613,81.769487),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.430726,81.768729),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429504,81.770080),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429447,81.770758),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429419,81.771276),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.429282,81.771860),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428916,81.772331),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428871,81.772440),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428699,81.772792),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428780,81.772628),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428697,81.772997),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428551,81.773214),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428273,81.773206),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428386,81.773403),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428059,81.773373),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.427874,81.773573),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.427786,81.774127),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428122,81.774371),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428701,81.773718),
        map: map,
        icon: 'images/trash.png',
    });


    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(25.428703,81.774308),
        map: map,
        icon: 'images/trash.png',
    });
}



(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	/**
	 * Custom banner slider for Slate.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._slider(options);

			return $this;

		}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [], indicators = [],
				$indicators,
				$slides = $this.children('article'),
				intervalId,
				isLocked = false,
				i = 0;

		// Turn off indicators if we only have one slide.
			if ($slides.length == 1)
				options.indicators = false;

		// Functions.
			$this._switchTo = function(x, stop) {

				if (isLocked || pos == x)
					return;

				isLocked = true;

				if (stop)
					window.clearInterval(intervalId);

				// Update positions.
					lastPos = pos;
					pos = x;

				// Hide last slide.
					slides[lastPos].removeClass('top');

					if (options.indicators)
						indicators[lastPos].removeClass('visible');

				// Show new slide.
					slides[pos].addClass('visible').addClass('top');

					if (options.indicators)
						indicators[pos].addClass('visible');

				// Finish hiding last slide after a short delay.
					window.setTimeout(function() {

						slides[lastPos].addClass('instant').removeClass('visible');

						window.setTimeout(function() {

							slides[lastPos].removeClass('instant');
							isLocked = false;

						}, 100);

					}, options.speed);

			};

		// Indicators.
			if (options.indicators)
				$indicators = $('<ul class="indicators"></ul>').appendTo($this);

		// Slides.
			$slides
				.each(function() {

					var $slide = $(this),
						$img = $slide.find('img');

					// Slide.
						$slide
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', ($slide.data('position') ? $slide.data('position') : 'center'));

					// Add to slides.
						slides.push($slide);

					// Indicators.
						if (options.indicators) {

							var $indicator_li = $('<li>' + i + '</li>').appendTo($indicators);

							// Indicator.
								$indicator_li
									.data('index', i)
									.on('click', function() {
										$this._switchTo($(this).data('index'), true);
									});

							// Add to indicators.
								indicators.push($indicator_li);

						}

					i++;

				})
				._parallax(options.parallax);

		// Initial slide.
			slides[pos].addClass('visible').addClass('top');

			if (options.indicators)
				indicators[pos].addClass('visible');

		// Bail if we only have a single slide.
			if (slides.length == 1)
				return;

		// Main loop.
			intervalId = window.setInterval(function() {

				current++;

				if (current >= slides.length)
					current = 0;

				$this._switchTo(current);

			}, options.delay);

	};

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header'),
			$banner 	= $('.banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Banner.
			$banner._slider(settings.banner);

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});

			}

	});

})(jQuery);