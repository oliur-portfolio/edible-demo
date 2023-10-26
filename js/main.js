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
        320: {
            slidesPerView: 0.9,
            centeredSlides: true,
        },
        400: {
            slidesPerView: 1,
            centeredSlides: true,
        },
        500: {
            slidesPerView: 1.5,
            centeredSlides: true,
        },
        767: {
            slidesPerView: 2.1,
        },
        991: {
            slidesPerView: 2.9,
        },
        1300: {
            slidesPerView: 4,
        },
        1750: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});
