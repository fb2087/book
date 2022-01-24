function prev() {
    $('.slide li:last').prependTo('.slide_img');
    $('.slide').css('margin-left', -1200); // $('.slide').css({marginLeft:-1000});
    $('.slide').stop().animate({ marginLeft: 0 }, 800);
}



function next() {
    $('.slide').stop().animate({ marginLeft: -1200 }, function () {
        $('.slide li:first').appendTo('.slide_img');
        $('.slide').css({ marginLeft: 0 });
    });
}


function slide() {
    $('.slide').stop().animate({ marginLeft: -1200 }, function () {
        $('.slide li:first').appendTo('.slide_img');
        $('.slide').css({ marginLeft: 0 });
    });
}



setInterval(slide, 3000);
$('.left').click(function () {
    prev();
});
$('.right').click(function () {
    next();
});
