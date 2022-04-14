var swiper = new Swiper('.swiper', {
    // Optional parameters

    direction: 'horizontal',
    spaceBetween: 30,
    loop: false,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        depth: 100,
        stretch: 0,
        slideShadows: true,
        modifier: 2,
    },


});