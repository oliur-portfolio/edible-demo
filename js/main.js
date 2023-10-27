// Submit email list
const scriptURL =
  "https://script.google.com/macros/s/AKfycbywyHwOoOEmL_Jwzz8thUpUd-1qRGA9nZOCfxa3WEKGA0c8kTAHYf10iY6WpEPLTt3F/exec";
const form = document.forms["emaillist"];
const timestampField = document.getElementById("timestamp");
const emailField = document.querySelector(".input__email");
let loading = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (loading) {
    return;
  }

  if (!emailField.value) {
    alert("Please write your email.");
    return;
  }

  timestampField.value = new Date().toJSON();
  emailField.classList.add("disable");
  loading = true;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you! your email is submitted successfully.");
    })
    .then(() => {
      emailField.classList.remove("disable");
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

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
