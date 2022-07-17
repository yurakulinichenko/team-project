var $jq = jQuery.noConflict();
$jq(document).ready(function () {
  $jq('.customer').slick();
  $jq('a').click(function (event) {
    $jq(this).hide();
    event.preventDefault();
  });
});
