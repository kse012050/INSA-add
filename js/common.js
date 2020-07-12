$(document).ready(function(){
    var browserW;
    var tabMunuW;
    var tabClickStart;
    var tabClickMove;
    var tabMove;
    var tabLeft;
    var tabMoveLeft;

    $(".subMenu nav").on("touchstart",function(e){
        browserW = $(window).width();
        tabMunuW = $(".subMenu nav").width();
        tabClickStart = e.originalEvent.touches[0].pageX;
        tabLeft = parseInt($(".subMenu nav").css('left'));
    });

    $(".subMenu nav").on("touchmove",function(e){
        tabClickMove = e.originalEvent.touches[0].pageX;
        tabMoveLeft = parseInt($(".subMenu nav").css('left'));
        if(tabMoveLeft <= 0){
            tabMove = tabClickMove - tabClickStart;
            if(tabMoveLeft >= -(tabMunuW - browserW)){
                $(".subMenu nav").css({'left':tabLeft + tabMove});
            }
        }
    });

    $(".subMenu nav").on("touchend",function(e){
        if(tabMoveLeft > 0){
            $(".subMenu nav").animate({left:0});
        }else if(tabMoveLeft <= -(tabMunuW - browserW)){
            $(".subMenu nav").animate({left:-(tabMunuW - browserW)});
        }
    });

    
    var graduation;
    $('.RRW_contentsArea .RRWC_titleArea select').change(function(e){
        graduation = $('.RRW_contentsArea .RRWC_titleArea select option:selected').attr('data-graduation');
        $('#elementarySchool,#middleSchool,#University').css({'display':'none'});
        $('#'+graduation).css({'display':'block'});
    })
});