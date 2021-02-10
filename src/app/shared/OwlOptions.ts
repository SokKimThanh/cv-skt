import { OwlOptions } from 'ngx-owl-carousel-o';

export const CUSTOMOPTIONS: OwlOptions[] = [{
    /* product package slide*/
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"'],
    mergeFit: true,
    autoWidth: true,
    skip_validateItems: true,
    slideBy: '1',
    items: 1,
    nav: false,
    dotsData: true
}];
