$(document).ready(function(){
    $(".navbarTop #dropdownMenuLink").on("click", function(){
        $(".navbarTop #dropdownMenuLink").removeClass("active");
        $(".navbarTop img.arrow").removeClass("active");
        $(".navbarTop img.arrow").attr("src", "./img/navbar_dropdown.png");
        $(this).addClass("active");
        $(this).find("img").addClass("active");
        $(this).find("img").attr("src", "./img/navbar_dropdown-active.png");
        //search
        $(".navbarTop .search__block").css("display", "none");
    });
    $(document).on('click',function (e) {
        var el = '.navbarTop #dropdownMenuLink';
        if (jQuery(e.target).closest(el).length) return;
        $(".navbarTop #dropdownMenuLink").removeClass("active");
        $(".navbarTop img.arrow").removeClass("active");
        $(".navbarTop img.arrow").attr("src", "./img/navbar_dropdown.png");
    });
});