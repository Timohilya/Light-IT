$(document).ready(function(){
    $(".accordion .item").on("click", function(){
        if($(this).hasClass("active")) {
            $(".accordion .item").removeClass("active");
            $(this).removeClass("active"); 
            $(this).find(".body").slideUp();
            $(".accordion img").attr("src", "./img/accordion_plus.png");
            $(".accordion img").attr("alt", "+");
        } else {
            $(".accordion .item").removeClass("active"); 
            $(this).addClass("active");
            $(".accordion .body").slideUp();
            $(this).find(".body").slideDown();
            $(".accordion img").attr("src", "./img/accordion_plus.png");
            $(".accordion img").attr("alt", "+"); 
            $(this).find("img").attr("src", "./img/accordion_minus.png");
            $(this).find("img").attr("alt", "-"); 
        }
    });
});