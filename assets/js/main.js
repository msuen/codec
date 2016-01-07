// var $grid = $('.grid').masonry({
//     // set itemSelector so .grid-sizer is not used in layout
//     itemSelector: '.grid-item',
//     // use element for option
//     columnWidth: '.grid-sizer',
//     gutter: 20,
//     percentPosition: true
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });

$(document).ready(function() {

    $('#slider').slippry({
        speed: 3000,
        pause: 2500,
        pager: false, 
        controls: false
    });

    $('.nav__home').click(function(e) {
        e.preventDefault();
        $('nav a').removeClass('is-active');
        $('#ajax').load('index.html #ajax > *');
        $.ajax({
            success: function() {
                $('#slider').slippry({
                    speed: 3000,
                    pause: 2500,
                    pager: false, 
                    controls: false
                });
            }
        });
    });

    $('nav a').click(function(e) {
        e.preventDefault();
        var navLink = $(this).attr('href');
        $('nav a').removeClass('is-active');
        $('#ajax').load(navLink + ' #ajax > *');
        $(this).addClass('is-active');
        $.ajax({
            success: function() {
                $(".content__navigation-load .load").animate({
                    width: "100%"
                }, 100 );
            },
            complete: function() {
                $('.accordion__section--title').click(function() {
                    var currentAttrValue = $(this).attr('href');
                    if($(this).is('.active')) {
                        $(this).removeClass('active');
                        $(this).addClass('inactive');
                        $('.accordion ' + currentAttrValue).hide().removeClass('open');
                    } else {
                        $(this).addClass('active');
                        $(this).removeClass('inactive');
                        $('.accordion ' + currentAttrValue).show().addClass('open'); 
                    }
                    if ($(".accordion__section--title.active").length === $(".accordion__section--title").length) {
                        $(".accordion__expand").addClass('expanded');
                        $(".accordion__expand").text("Collapse All");
                    }
                    if ($(".accordion__section--title.inactive").length === $(".accordion__section--title").length) {
                        $(".accordion__expand").removeClass('expanded');
                        $(".accordion__expand").text("Expand All");
                    }
                });

                $('.accordion__expand').click(function() {
                    if($(this).is('.expanded')) {
                        $(this).removeClass('expanded');
                        $(this).text("Expand All");
                        $('.accordion .accordion__section--title').removeClass('active');
                        $('.accordion .accordion__content').hide().removeClass('open');
                    } else {
                        $(this).addClass('expanded');
                        $(this).text("Collapse All");
                        $('.accordion .accordion__section--title').addClass('active');
                        $('.accordion .accordion__content').show().addClass('open');
                    }
                });
            }
        });
    });

    $('#nav__quicklook').click(function() {
        $.ajax({
            success: function() {
                var $grid = $('.grid').masonry({
                    // set itemSelector so .grid-sizer is not used in layout
                    itemSelector: '.grid-item',
                    // use element for option
                    columnWidth: '.grid-sizer',
                    gutter: 20,
                    percentPosition: true
                });
                $grid.imagesLoaded().done( function() {
                    $grid.masonry('reloadItems');
                    $grid.masonry('layout');
                });
            }
        });
    });
});


