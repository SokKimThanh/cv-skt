import { OwlOptions } from 'ngx-owl-carousel-o';

export const CUSTOMOPTIONS: OwlOptions[] = [{
    /* product package slide*/
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    responsiveRefreshRate: 185,
    mergeFit: true,
    autoWidth: true,
    skip_validateItems: true,
    slideBy: '1',
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 1,
        },
        425: {
            items: 1,
        },
        768: {
            items: 1,
            autoWidth: false,
            loop: false,
            skip_validateItems: true,
            slideBy: '1',
            dots: true,
        },
        1024: {
            items: 1,
            autoWidth: false,
            loop: false,
            skip_validateItems: true,
            slideBy: '1',
            dots: true,
        }
    },
    nav: false
}];
