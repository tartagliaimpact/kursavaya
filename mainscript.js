$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#gt').fadeIn();
    } else {
    $('#gt').fadeOut();
    }
});
    $('#gt').click(function() {
    $('body,html').animate({scrollTop:0},700);
});
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

