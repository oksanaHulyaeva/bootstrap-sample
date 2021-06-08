// MODAL

const modal = document.getElementById('exampleModal');
const inputName = document.getElementById('input-name');

modal.addEventListener('shown.bs.modal', function () {
  inputName.focus()
});

// SLICK

//$('.slider-container').slick();

$(document).ready(function () {
  $(".slider-container ").slick({
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="arrow-prev"></button>',
    nextArrow: '<button type="button" class="arrow-next"></button>',
  });
});