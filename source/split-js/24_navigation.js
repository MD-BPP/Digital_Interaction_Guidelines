$(function() {
                var header = $('header');

                // Mobile (<768px) specific.
                // ----------------------------------------
                
                // Hamburger
                $('.hamburger button').on('click', function (e) {
                    var el = $(this);

                    if (el.hasClass('active')) {
                        $('html, body').animate({scrollTop: '0px'}, 500);
                        closeSubnav();
                    } else {
                        $('.sub-nav').slideDown(200);
                    }

                    el.toggleClass('active');
                });

                // Sub-nav links
                $('.primary-nav a').on('click', function (e) {
                    if($(window).width() < 768) {
                        var el = $(this);
                        var subnav = el.siblings('div');
                        if(subnav.length) {
                            e.preventDefault();
                            el.toggleClass('active');
                            subnav.slideToggle(500).toggleClass('open');
                            subnav.find('ul').addClass('show');
                        }
                    }
                }); 

                // Desktop (>768px) specific.
                // ----------------------------------------
                
                // Primary nav hover
                $('.primary-nav > li').hoverIntent(function (e) {
                    if($(window).width() >= 768) {
                        var el = $(this);
                        el.find('> a').addClass('hover');
                        var subnav = $(this).find('> a').siblings('div');
                        if(subnav.length && ! subnav.is(':animated')) {
                            $('body').append('<div class="sub-nav-overlay"></div>');
                            $('.sub-nav-overlay').addClass('show');
                            subnav.stop().slideDown(200, function() {
                                el.addClass('open');
                            }).addClass('open');
                        }
                    }
                }, function (e) {
                    if($(window).width() >= 768) {
                        closeSubnav($(this));
                    }
                });

                // Sub-nav links
                $('.primary-sub-nav-l1 li').hoverIntent(function (e) {
                    if($(window).width() >= 768) {
                        var link = $(this).children('a:first-child');
                        var subnav = $(this).children('div');
                    
                        if ( ! link.hasClass('active') && subnav.length) {
                            e.preventDefault();

                            $('.primary-sub-nav-l1 div.open').hide(); // Close open subnavs
                            $('.primary-sub-nav-l1 div.open').find('ul').removeClass('show'); // Close open subnavs
                            $('.primary-sub-nav-l1 a.active').removeClass('active'); // Remove active state from active subnav links

                            link.addClass('active');

                            subnav.show().addClass('open');
                            subnav.parent().parent().css('height', 'auto !important');
                            subnav.parent().parent().css('minHeight', subnav.height());
                            subnav.css('minHeight', subnav.parent().parent().height());

                            subnav.find('ul').addClass('show');
                            
                        }


                    }
                });

                // Title bar (x) close
                $('.primary-sub-nav-header .close').on('click', function (e) {
                    e.preventDefault();
                    $('html, body').animate({scrollTop: '0px'}, 300);
                    closeSubnav($(this).parents('li'));
                });

                // Mobile and desktop
                // Clean up any active nav links and open sub-navs when closing.
                var closeSubnav = function (item) {
                    if($(window).width() >= 768) {
                        item.find('a.hover').removeClass('hover');
                        var subnav = item.find('> a').siblings('div');
                        if(subnav.length && ! subnav.is(':animated')) {
                            subnav.removeClass('open').stop().slideUp(200, function() {
                                item.removeClass('open');
                                item.find('.active').removeClass('active');
                                item.find('div:not(.primary-sub-nav-header)').hide();
                                item.find('ul').css('minHeight', 'auto');
                                item.find('.primary-sub-nav-l2').css('minHeight', 'auto');
                                header.removeClass('fixed-nav-elements');
                            });
                        }
                    } else {
                        $('.sub-nav').slideUp(200, function () {
                            $('.primary-nav .active').removeClass('active');
                            $('.primary-nav div:not(.primary-sub-nav-header)').hide();
                            header.removeClass('fixed-nav-elements');
                        });
                    }
                    $('.sub-nav-overlay').remove();
                }

                // Scrolling...
                var brandBarTopPos = $('.brand-bar').offset().top, // Brand bar position for mobile
                    originalNavTitleTopPos;

                $(window).scroll(function() {
                    // Mobile (<768px) specific scroll actions
                    if($(window).width() < 768) {
                        // Fix the brand bar to top of viewport when necessary.
                        if ($('.sub-nav').css('display') == 'block' && $(window).scrollTop() >= brandBarTopPos) {
                            header.addClass('fixed-nav-elements');
                        }
                        else {
                            header.removeClass('fixed-nav-elements');
                        }
                    }

                    // Desktop (>768px) specific scroll actions
                    if($(window).width() >= 768) {
                        // Starting position of active nav element's heading.
                        // Need to store this at the beginning as it will become 0 after fixing.
                        var titleOffset = $('.primary-nav > li.open .primary-sub-nav-header').offset();
                        if (titleOffset) {
                            var navTitleTopPos = titleOffset.top;
                            if ($(window).scrollTop() >= (originalNavTitleTopPos ? originalNavTitleTopPos : navTitleTopPos)) {
                                if (! originalNavTitleTopPos) originalNavTitleTopPos = navTitleTopPos;
                                header.addClass('fixed-nav-elements');
                            } else {
                                header.removeClass('fixed-nav-elements');
                            }
                        }
                    }
                });
            });