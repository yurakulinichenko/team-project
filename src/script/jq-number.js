var show = true;
var countbox = ".advantages";
jQuery(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = jQuery(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = jQuery(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = jQuery(window).height(); // Высота окна браузера
    var d_height = jQuery(document).height(); // Высота всего документа
    var e_height = jQuery(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 500 >= e_top ||  w_height + w_top == d_height || e_height + e_top < w_height) {
        jQuery(document).ready(function () {
            jQuery('.advantages__characteristic').css('opacity', '1');
            jQuery('.advantages__characteristic').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
        });
        show = false;
    }
    console.log('DONE!!!!!')
});