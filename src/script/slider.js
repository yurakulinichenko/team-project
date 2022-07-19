var $jq = jQuery.noConflict();
$jq(document).ready(function () {
  $jq('.customer').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    dotsClass: 'slider-dots',
  });
  document.getElementsByClassName('slick-active').style.color = 'blue';
});
