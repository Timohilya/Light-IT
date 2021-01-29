$(document).ready(function(){
    $(".navbarTop .search a").on("click", function(){
        $(".navbarTop .search__block").css("display", "flex");
        //navbar
        $(".navbarTop #dropdownMenuLink").removeClass("active");
        $(".navbarTop img.arrow").removeClass("active");
        $(".navbarTop img.arrow").attr("src", "./img/navbar_dropdown.png");
    });
    $(document).on('click',function (e) {
        var el = '.navbarTop .search a';
        var el2 = '.navbarTop .search__block';
        if (jQuery(e.target).closest(el).length) return;
        if (jQuery(e.target).closest(el2).length) return;
        $(".navbarTop .search__block").css("display", "none");
    });
});