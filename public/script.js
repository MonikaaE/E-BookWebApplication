$("#sec-1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#Reviews").offset().top-66
    }, 1000);
 return false;
});

$("#sec-2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#Books").offset().top-112
    }, 1000);
 return false;
});

$("#sec-3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#About").offset().top-112
    }, 1000);
 return false;
});

$("#sec-4").click(function() {
 $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#Home").offset().top-112
    }, 1000);
 return false;
});
