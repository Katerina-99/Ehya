$(document).ready(function() {
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: "false"
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true"
    },
    on: {
      init: function() {
        this.el.addEventListener("mouseenter", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseleave", () => {
          this.autoplay.start();
        });
      }
    }
  });

  var storiesSlider = new Swiper(".stories__slider", {
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: ".stories__slider-button--next",
      prevEl: ".stories__slider-button--prev"
    }

    // breakpoints: {
    //   576: {
    //     direction: "vertical"
    //   }
    // }
  });
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  document
    .querySelector(".header-navbar")
    .classList.toggle("header-navbar--visible");
});

var closeButton = $(".header-navbar__close");
closeButton.on("click", function() {
  $(".header-navbar").removeClass("header-navbar--visible");
});

$(document).keyup(function(event) {
  if (event.which == "27") {
    $(".header-navbar").removeClass("header-navbar--visible");
  }
});

// $(function() {
//   $("#trend-filter").mixItUp({});
// });

// $("#trend-filter").mixItUp();

$(document).ready(function() {
  var trendItem = $(".trend__item");
  var filterItems = $(".filter__items");

  trendItem.on("click", function(event) {
    var activeFilter = $(this).attr("data-target");
    trendItem.removeClass("trend__item--active");
    filterItems.removeClass("filter__items--active");
    $(activeFilter).toggleClass("filter__items--active");
    $(this).addClass("trend__item--active");
  });
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}

$(document).keyup(function(event) {
  if (event.which == "27") {
    $(".modal__overlay").removeClass("modal__overlay--visible");
    $(".modal__dialog").removeClass("modal__dialog--visible");
  }
});

// Обработка форм
$(".form").each(function() {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Пожалуйста введите свой Логин",
        minlength: "Логин должен состоять минимум из 2 букв"
      },
      email: {
        required: "Нам нужен ваш Email чтобы связаться с Вами",
        email:
          "Ваш почтовый адрес должен быть написан в формате name@domain.com"
      },
      password: {
        required: "Пароль обязателен",
        minlength: "Пароль должен состоять минимум из 6 символов"
      }
    }
  });
});
