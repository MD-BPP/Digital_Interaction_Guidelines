//------------------------------------------------------
// HEADER MENU SCRIPTS
//------------------------------------------------------
$(document).ready(function(){
    if ( $('header .sub-nav > ul > li > a').length ) {
        $('header .sub-nav > ul > li > a').parent('li').css('padding', '12px 0');
    }
    
    $('.sub-nav-toggle').click(function(){
        if ( $('.secondary-nav').hasClass('open') ) {
                $('.secondary-nav').removeClass('open');
                $(this).css('background-color', '#111');
            }
        else {
            $('.secondary-nav').addClass('open');
            $(this).css('background-color', '#32353D');
        }
    });
    
    $('.primary-nav li').hover(function(){
        if ( $('.secondary-nav').hasClass('open') ) {
                $('.secondary-nav').removeClass('open');
                $('.sub-nav-toggle').css('background-color', '#111');
            }
    });
    
    $('.primary-sub-nav-left li').click(function(){
        if ( $(this).hasClass('active') ) {
            }
        else {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });
    
    $('li .programmes').click(function() {
        $('.programmes').addClass('open');
        $('.programmes').siblings().removeClass('open');
    });
    
    $('li .disciplines').click(function() {
        $('.disciplines').addClass('open');
        $('.disciplines').siblings().removeClass('open');
    });
})









//------------------------------------------------------
// Footer Menu scripts
//------------------------------------------------------

$(document).ready(function() {
   $("footer nav > ul > li > a").click(function(e){
       
        if( $(this).siblings().size() > 0 ) {
            e.preventDefault();    
        };
        
        $("footer nav").css("margin-left", "0");
       
      if ( $(this).parent("li").hasClass("footOpen") ) {
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "none");
          $(this).parent("li").removeClass("footOpen");
      } 
       else {
          $(this).parent("li").addClass("footOpen");
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "flex");
       }
   });
   $("footer .more").click(function(e){
      e.preventDefault();
       
      var target = $(this);
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
       
      if ( $("footer nav").hasClass("footOpen") ) {
          $("footer nav > ul").css("display", "none");
          $("footer nav").removeClass("footOpen");
          $(this).removeClass("footOpen");
      } 
       else {
          $("footer nav > ul").css("display", "flex");
          $("footer nav").addClass("footOpen");
          $(this).addClass("footOpen");
       }
   });
});







//------------------------------------------------------
// Section Header Menu scripts
//------------------------------------------------------
   $("section header .more").click(function(e){
      e.preventDefault();
       
      if ( $(this).parents(".header-menu").siblings(".more-info").hasClass("open") ) {
          $(this).parents(".header-menu").siblings(".more-info").css("display", "none");
          $(this).parents(".header-menu").siblings(".more-info").removeClass("open");
          $(this).removeClass("open");
      } 
       else {
          $(this).parents(".header-menu").siblings(".more-info").css("display", "block");
          $(this).parents(".header-menu").siblings(".more-info").addClass("open");
          $(this).addClass("open");
       }
   });







//------------------------------------------------------
// Card footer Menu scripts
//------------------------------------------------------
   $(".card footer .card-more").click(function(e){
      e.preventDefault();
       
      if ( $(this).parents(".card-footer-menu").siblings(".card-more-info").hasClass("card-open") ) {
          $(this).parents(".card-footer-menu").siblings(".card-more-info").css("display", "none");
          $(this).parents(".card-footer-menu").siblings(".card-more-info").removeClass("card-open");
          $(this).removeClass("card-open");
      } 
       else {
          $(this).parents(".card-footer-menu").siblings(".card-more-info").css("display", "block");
          $(this).parents(".card-footer-menu").siblings(".card-more-info").addClass("card-open");
          $(this).addClass("card-open");
       }
   });







//------------------------------------------------------
// Unslider scripts
//------------------------------------------------------
jQuery(document).ready(function($) {
			$('.slider').unslider({
				autoplay:false,
				nav: false,
				arrows: true
			});
		});








//------------------------------------------------------
// On page scroll
//------------------------------------------------------

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -80
        }, 1000);
        return false;
      }
    }
  });
});








//------------------------------------------------------
// Task Tab Indexing
//------------------------------------------------------

$(document).ready(function(){
   var start = 999;

    $('.task-nav li').each(function(i){
      $(this).css('z-index', start--);
        var boxes = $(".task-nav li");
        boxes.click(function(event) {
            var el = $(this), 
                max = 0;

            boxes.each(function() {

                //--- If a previous state is found, restore it
                if($(this).data("original-index")){
                    $(this).css("z-index", $(this).data("original-index"));
                }
                var z = parseInt( $( this ).css( "z-index" ), 10 );
                max = Math.max( max, z );
            });

            //--- save the clicked element previous z-index
            el.data("original-index", el.css("z-index"));
            el.css("z-index", max + 1 );
        });
    });
    
    $('.tab-group li a').click(function() {
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });
    
});








//------------------------------------------------------
// Tabbed navigation section change
//------------------------------------------------------

$(document).ready(function() { 
    
    $(".section-wrapper > div").css("display", "none");
    $(".section-wrapper > div:first-child").css("display", "block");
    
    $(".section-nav li a, .task-nav li a").click(function(event) {
        var  sectionIndex = $(this).parent().index();
        event.preventDefault();
        
        $(this).closest("div").children(".section-wrapper").children("div:nth-child(" + (sectionIndex+1) + ")").css("display", "block").siblings().css("display", "none");
    });
});







//------------------------------------------------------
// Validation
//------------------------------------------------------


//jQuery Validation Boot
$(document).ready(function() {
    $(".form-container").validate();
	jQuery.validator.addClassRules("telPhoneNum", {
  		required: true,
  		minlength: 3
	});
    $("#phone").intlTelInput({
        preferredCountries: ["gb"],
        utilsScript: "https://s3-eu-west-1.amazonaws.com/bppassets/public/assets/js/utils.js",
        customPlaceholder: "Telephone Number"
    }),
    $("form").submit(function() {
        $("#hidden-phone").val($("#phone").intlTelInput("getNumber"))
    })
    $(".telPhoneNum, .selected-flag").focus(function(){
        $(".intl-tel-input").siblings("label").css({"max-height":"18px", "color":"#4a4a4a"})
    })
    $(".telPhoneNum, .selected-flag").focusout(function(){
        $(".intl-tel-input").siblings("label").css({"max-height":"0", "color":"transparent"})
    })
});











//------------------------------------------------------
// International Phone Numbers
//------------------------------------------------------


$(document).ready(function(){
  $("#phone").intlTelInput({
    preferredCountries: ["gb"],
    utilsScript: "https://s3-eu-west-1.amazonaws.com/bppassets/public/assets/js/utils.js",
  });
  $("form").submit(function() {
    $("#hidden-phone").val($("#phone").intlTelInput("getNumber"));
  });
});











//------------------------------------------------------
// Carousel redaction on mobile
//------------------------------------------------------


$(window).resize(function() {
    var window_size = window.matchMedia('(max-width: 991px)');
    if (window.matchMedia('(max-width: 991px)').matches){
        $('.card-carousel div[role="listbox"]').removeClass("carousel-inner");
    }
    else {
        $('.card-carousel div[role="listbox"]').addClass("carousel-inner");
    }
})


$(document).ready(function() {
    var window_size = window.matchMedia('(max-width: 991px)');
    if (window.matchMedia('(max-width: 991px)').matches){
        $('.card-carousel div[role="listbox"]').removeClass("carousel-inner");
    }
});











//------------------------------------------------------
// INT Phone Number form Styling
//------------------------------------------------------
$(document).ready(function() {
    $(".telPhoneNum, .selected-flag").focus(function(){
        $(".intl-tel-input").siblings("label").css({"max-height":"18px", "color":"#4a4a4a"})
    })
    $(".telPhoneNum, .selected-flag").focusout(function(){
        $(".intl-tel-input").siblings("label").css({"max-height":"0", "color":"transparent"})
    })
});







//------------------------------------------------------
// Auto Elipses
//------------------------------------------------------

$(document).ready(function() {
	$(".course-card-grid > a").dotdotdot();
});
$(window).resize(function() {
	$(".course-card-grid > a").dotdotdot();
});







//------------------------------------------------------
// Flexbox Slider
//------------------------------------------------------
function gridCarousel() {
    
    /* Loop Carousels */
    jQuery( '.carousel-grid-wrapper' ).each(function() {

        /* Get Carousel */
        var show = 0;
        var index = 0;
        
        /* Get Elements */
        var carousel = jQuery( this );
        var len  = carousel.find( '.carousel-grid' ).children().length;
        var next = carousel.find( 'a.next' );
        var prev = carousel.find( 'a.prev' );
        var slide = carousel.find( '.carousel-grid > a' );
        
        /* Breakpoints */
        if ( window.matchMedia('(min-width: 991px)').matches ) {
            show = 4;
        } else if ( window.matchMedia('(max-width: 992px)').matches && window.matchMedia('(min-width: 768px)').matches ) {
            show = 3;
        } else {
            show = 1;
        }
        
        /* Select Rows */
        function selectRows( start , end ) {
            carousel.find( '.carousel-grid' ).children().hide();
            carousel.find( '.carousel-grid' ).children().slice( start , end ).show();
        }
        selectRows( index , index + show );
    
        /* Next Button */
        next.off( 'click' ).on( 'click' , function( event ){
            event.preventDefault();
            if ( index < len - show ) {
                index = index + show;
            } else {
                index = 0;
            }
            selectRows( index , index + show );
        });
        
        /* Prev Button */
        prev.off( 'click' ).on( 'click' , function( event ){
            event.preventDefault();
            if ( index - show >= 0 ) {
                index = index - show;
            } else {
                index = ( Math.floor( ( len - 1 ) / show ) * show );
            }
            selectRows( index , index + show );
        });
    
        /* Next Slide */
        slide.on( 'swiperight' , function( event ){
            event.preventDefault();
            if ( index < len - show ) {
                index = index + show;
            } else {
                index = 0;
            }
            selectRows( index , index + show );
        });
        
        /* Prev Slide */
        slide.on( 'swipeleft' , function( event ){
            event.preventDefault();
            if ( index - show >= 0 ) {
                index = index - show;
            } else {
                index = ( Math.floor( ( len - 1 ) / show ) * show );
            }
            selectRows( index , index + show );
        });
    
    });

}
jQuery(document).ready( gridCarousel );
jQuery(window).resize( gridCarousel );








//------------------------------------------------------
// Accordions
//------------------------------------------------------

$('.accordion-slide div:first-child').click(function(e) {
	e.stopPropagation();
    $(this).toggleClass('open');
	$(this).next('div').not(".accordion-slide").slideToggle();
});








//------------------------------------------------------
// Card Indexing
//------------------------------------------------------

$(document).ready(function(){
   var start = 999;

    $('.card.paper').each(function(i){
      $(this).css('z-index', start--);
        var boxes = $(".card.paper");
        boxes.hover(function(event) {
            var el = $(this), 
                max = 0;

            boxes.each(function() {

                //--- If a previous state is found, restore it
                if($(this).data("original-index")){
                    $(this).css("z-index", $(this).data("original-index"));
                }
                var z = parseInt( $( this ).css( "z-index" ), 10 );
                max = Math.max( max, z );
            });

            //--- save the clicked element previous z-index
            el.data("original-index", el.css("z-index"));
            el.css("z-index", max + 1 );
        });
    });
    
});







//------------------------------------------------------
// Pause Background vid on play button click
//------------------------------------------------------
if ( $( "#bgvid" ).length ) {
    $('.play-button').click(function(){
        if ( $('.modal:visible')) {
            $('#bgvid').get(0).pause();
        }
    });

    $('#video-modal').click(function(){
        setTimeout(function(){
            if ( $('.modal:hidden') ) {
                $('#bgvid').get(0).play();
            }
        },100)
    });
}







//------------------------------------------------------
// Pause Background vid on tab focus change
//------------------------------------------------------
if ( $( "#bgvid" ).length ) {
    // Set the name of the hidden property and the change event for visibility
    var hidden, visibilityChange; 
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }

    var videoElement = document.getElementById("bgvid");

    // If the page is hidden, pause the video;
    // if the page is shown, play the video
    function handleVisibilityChange() {
      if (document[hidden]) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
    }

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
      console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
      // Handle page visibility change   
      document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }

}








//------------------------------------------------------
// JWplayer Customisation
//------------------------------------------------------
if ( $( "#videoContainer" ).length ) {
    var playerInstance = jwplayer("videoContainer");
    playerInstance.setup({
        "playlist": [{
            "sources": [{
                "file": "http://content.jwplatform.com/videos/KfesJtoE-QvRPEyBT.mp4",
                "label": "1080"
            },{
                "file": "http://content.jwplatform.com/videos/KfesJtoE-AvS7WmVE.mp4",
                "label": "720"
            },{
                "file": "http://content.jwplatform.com/videos/KfesJtoE-NTcuR6cx.mp4",
                "label": "406"
            },{
                "file": "http://content.jwplatform.com/videos/KfesJtoE-Y87f8Il8.mp4",
                "label": "270"
            },{
                "file": "http://content.jwplatform.com/videos/KfesJtoE-Z6t3rVFE.mp4",
                "label": "180"
            }],
            //"tracks": [{ 
                //"file": "https://content.jwplatform.com/tracks/5L9rVmF2.vtt", 
                //"label": "English",
                //"kind": "captions",
                //"default": "true" 
            //}]
        }],
        "autostart": false,
        "width": "100%",
        "aspectratio": "16:9",
        "stretching": "uniform",
        "captions": "true"
    });

    jwplayer().setCaptions({
        "color": "#ffffff",
        "fontFamily": "Open Sans",
        "windowColor": "#000",
        "windowOpacity": "0.8",
        "fontSize": "12"
    });

    $('.play-button').click(function(){
        if ( $('.modal:visible')) {
            jwplayer().play(true)
        }
        event.preventDefault();
    });

    $('#video-modal').click(function(){
        setTimeout(function(){
            if ( $('.modal:hidden') ) {
                jwplayer().play(false)
            }
        },100)
    }).children().click(function(e) {
        if ($(".close").is(":focus")) {

        }
        else {
            return false;
        }
    });

    $('.close').click(function(){
        setTimeout(function(){
            if ( $('.modal:hidden') ) {
                jwplayer().play(false);
                $('#bgvid').get(0).play();
            }
        },100)
    });
 
}






//------------------------------------------------------
// Waypoints
//------------------------------------------------------
if ( $( ".sticky-nav" ).length ) {

    var waypoint = new Waypoint({
      element: document.getElementsByClassName('sticky-nav'), //Select element
      handler: function(direction) {
          if (direction === 'down') {
            $(".on-page-nav").css("position", "fixed");
          }
          else if (direction === 'up') {
            $(".on-page-nav").css("position", "absolute")
          }
    }
    });
 
}