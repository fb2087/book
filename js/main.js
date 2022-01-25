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

$(function(){
    $('.left2').click(function(){
        $('.book1_2 li:last').prependTo('.book1_2');
        $('.book1_2').css('margin-left',-180);
        $('.book1_2').stop().animate({marginLeft:0},800);
    });
    $('.right2').click(function(){
        $('.book1_2').stop().animate({marginLeft:-180},800,function(){
            $('.book1_2 li:first').appendTo('.book1_2');
            $('.book1_2').css({marginLeft:0});
        });
        
    });
});