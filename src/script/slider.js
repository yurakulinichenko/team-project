// var $jq = jQuery.noConflict();
// $jq(document).ready(function () {
//   $jq('a').click(function (event) {
//     $jq(this).hide();
//     event.preventDefault();
//   });
// });

// $(document).ready(function () {
//   $('.customer').slick();
// });

// function initSlider() {
//   if ($.fn.slick) {
//     $('.customer').slick();
//   } else {
//     setTimeout(function () {
//       initSlider();
//     }, 500);
//   }
// }

// const a = () => {
//   document.getElementsByClassName('customer').slick();
// };
// a();

document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});
