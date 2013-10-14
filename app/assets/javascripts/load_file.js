
//= require k2-lazyload
//= require k4-spin
//= require k5-lightbox
//= require k6-main
//= require k7-jquery.history
//= require k8-hashchange
//= require k9-html5shiv




$(function () {
    jQuery.history.listen()
    $('.nav .scroll').click(function () {
        $.history.push($(this).attr('href'));
    });
});



setTimeout(function () {
    $("#flash_notice").fadeOut().empty();
}, 2000);



$(function () {
    $("#locations_search input").keyup(function () {
        $.get($("#locations_search").attr("action"), $("#locations_search").serialize(), null, "script");
        return false;
    });
    $(".location").click(function () {
        $(".location").not(this).removeClass('location-clicked h4');
        $(this).toggleClass('location-clicked h4');
    });
});
