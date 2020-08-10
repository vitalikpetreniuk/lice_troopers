var $ = jQuery;
let topcarousel = $('.top-product-sl').owlCarousel({
    loop:true,
    dots: false,
    lazyLoad: true,
    nav:false,
    items: 1,
})
let bottomcarousel = $('.bottom-product-sl').owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    responsive:{
        0: {
            items: 3,
        },
        767: {
            items:5
        }
    }
})
topcarousel.on("dragged.owl.carousel", function (event) {
    if(event.relatedTarget['_drag']['direction']=='left'){
        bottomcarousel.trigger('prev.owl.carousel')
    }else {
        bottomcarousel.trigger('next.owl.carousel')
    }
    //console.log('event : ',event.relatedTarget['_drag']['direction'])
});
topcarousel.on('next.owl.carousel', function (e) {
    if (e.item) {
        bottomcarousel.trigger('next.owl.carousel')
    }
});
topcarousel.on('prev.owl.carousel', function (e) {
    if (e.item) {
        bottomcarousel.trigger('prev.owl.carousel')
    }
});
// bottomcarousel.on('changed.owl.carousel', function (e) {
//     if (e.item) {
//         console.log('change bottom');
//         let index = e.item.index - 1;
//         topcarousel.trigger('to.owl.carousel', [index])
//     }
// });
// $('img[data-top-index]').on('click', function () {
//     let index = $(this).attr('data-top-index')-1;
//     bottomcarousel.trigger('to.owl.carousel', [index])
// })
$('img[data-bottom-index]').on('click', function () {
    let index = $(this).attr('data-bottom-index')-1;
    topcarousel.trigger('to.owl.carousel', [index])
})
$('.pr-accordion-single').on('click', function () {
    $(this).find('.pr-accordion-text').slideToggle();
    $(this).toggleClass('open');
})
$('#more_comments').on('click', function (e) {
    e.preventDefault();
    $(this).remove();
    $('.product-comment').removeAttr('style');
    return false
})
var numer = 0;
$(window).on('load resize', function () {
    if (window.matchMedia('(max-width: 1149.98px)').matches) {
        if(numer === 0){
            $('.products-list').removeClass('row').addClass('owl-carousel').owlCarousel({
                margin: 30,
                loop: true,
                nav: false,
                dots: false,
                responsive:{
                    0:{
                        items: 2
                    },
                    576: {
                        items: 2
                    },
                    767:{
                        items: 3
                    }
                }
            });
            numer = 1;
        }
        clickAllowed = true;
    } else {
        if(numer === 1){
            $('.products-list').removeClass('owl-carousel').addClass('row').owlCarousel('destroy');
            numer = 0;
        }
        clickAllowed = false;
    }
});
