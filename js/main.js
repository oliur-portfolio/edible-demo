//faq accordion Effect
$(".accordion__question").click(function (e) {
    e.preventDefault();
    var notthis = $(".active").not(this);
    notthis.toggleClass("active").next(".accordion__answer").slideToggle(300);
    $(this).toggleClass("active").next().slideToggle("fast");
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 0.5,
            spaceBetween: 50,
            centeredSlides: true,
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true,
        },
        767: {
            slidesPerView: 1.35,
            spaceBetween: 50,
        },
        991: {
            slidesPerView: 1.9,
            spaceBetween: 50,
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 2.7,
            spaceBetween: 50,
        },
        // when window width is >= 640px
        1750: {
            slidesPerView: 4,
        },
    },
});
