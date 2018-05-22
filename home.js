$(document).ready(function () {

    $("#homeTab").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 400);
    });

    $("#aboutTab").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 400);
    });


    $("#projectsTab").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 400);
    });


    $("#contactTab").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 400);
    });

    $("#openMenu").click(function () {
        $("#navbar").fadeIn();
        $("#openMenu").animate({
            left: '-20%'
        });

    });

    $("#closeMenu").click(function () {
        $("#navbar").fadeOut();
        $("#openMenu").animate({
            left: '0%'
        });
    });

});
