$(function(){
    function prev(){
        $('.slide_img li:last').prependTo('.slide_img');
        $('.slide_img').css({marginLeft:-1200}); 
        $('.slide_img').stop().animate({marginLeft:0},800);
        }
    
    
    
    function next() {
        $('.slide_img').stop().animate({ marginLeft: -1200 }, function () {
            $('.slide_img li:first').appendTo('.slide_img');
            $('.slide_img').css({ marginLeft: 0 });
        });
    }
    
    
    function slide() {
        $('.slide_img').stop().animate({ marginLeft: -1200 }, function () {
            $('.slide_img li:first').appendTo('.slide_img');
            $('.slide_img').css({ marginLeft: 0 });
        });
    }
    
    
    
    setInterval(slide, 3000);
    $('.left').click(function () {
        prev();
    }); 
    $('.right').click(function () {
        next();
    });
});