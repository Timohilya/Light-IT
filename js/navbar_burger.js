$(document).ready(function(){
    $(".burger").on("click", function(){
        $(".navRow").slideToggle();
        if($(".hamburger").hasClass("is-active")){
            $(".hamburger").removeClass("is-active");
        } else {
            $(".hamburger").addClass("is-active");
        };
    });
});