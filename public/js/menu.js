$(document).ready(function () {
    $("#touch-menu").click(function () {
        $("#menu").toggle();
    });
    $(".btn-close").click(function () {
        $("#menu").hide();
    });
});