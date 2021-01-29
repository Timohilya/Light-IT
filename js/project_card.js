$(document).ready(function(){
    $(".project__card").on("mouseenter", function(){
        $(this).find(".triangle").css("border-bottom-color", "#2f424d");
    });
    $(".project__card").on("mouseleave", function(){
        $(this).find(".triangle").css("border-bottom-color", "#2a3b45");
    });
    $(".like .defolt").on("mouseenter", function(){
        $(this).attr("src", "./img/like_active.png");
    });
    $(".like .defolt").on("mouseleave", function(){
        $(this).attr("src", "./img/like.png");
    });
    $(".like .defolt").on("click", function(){
        $(this).css("display", "none");
        $(this).next().css("display", "block");
        var p = $(this).next().next();
        p.text(+p.text() + 1);
    });
    $(".like .active").on("click", function(){
        $(this).css("display", "none");
        $(this).prev().css("display", "block");
        var p = $(this).next();
        p.text(+p.text() - 1);
    });
});