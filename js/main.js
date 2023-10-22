//faq accordion Effect
$(".accordion__question").click(function (e) {
    e.preventDefault();
    var notthis = $(".active").not(this);
    notthis.toggleClass("active").next(".accordion__answer").slideToggle(300);
    $(this).toggleClass("active").next().slideToggle("fast");
});

// Animated Hamburger Icon
const navToggleBtn = document.querySelector(".navbar-toggler");
const header = document.querySelector(".header");

navToggleBtn.addEventListener("click", () => {
    navToggleBtn.classList.toggle("change");
    header.classList.toggle("mobile-nav");
    document.body.classList.toggle("overflow-hidden");
});
