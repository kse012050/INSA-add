$(document).ready(function(){
    // 이력서 등록 메뉴
    subMenu();

    // 기업회원 메인 js
    enterpriseMain();
    // INSA검사
    inspection();
    // 검색 세부 팝업
    searchPopup();
    // 현재 진행 공고2
    progressAnnouncementDetail();
});

function subMenu(){
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
    });

    $('.fileTwoLines, .RRWC_itemArea > li .RRWCI_listArea > ul li input[type="file"] ~ p').click(function(){
        $(this).siblings('input[type="file"]').click();
    });
    $('input[type="file"]').on('change',function(){
        $(this).siblings('p').text($(this).val());
        $(this).siblings('.fileTwoLines').children('p').text($(this).val());
    });
}


function enterpriseMain(){
    $('.enterpriseArea div h2').css('background-image','url(' + $('.enterpriseArea div h2').attr('data-img')+")");

    $('.plusIcon').append('<span class="material-icons">add_circle_outline</span>');
    $('.arrowRight').append('<span class="material-icons">navigate_next</span>');
}


function inspection(){
    $('.I_topArea > div *:not([class]) li').each(function(){
        $(this).css('background-image','url(' + $(this).attr('data-img')+")");
    })
    $('.step01Area > div ul:not([class]) li').click(function(){
        $('.step01Area > div ul:not([class]) li').removeClass('active');
        $(this).addClass('active');
    })

    

    $('.rightBtn').click(function(){
        $('.inspectionProgress li.active').next().addClass('active');
    })

    $('.leftBtn').click(function(){
        $('.inspectionProgress li').each(function(){
            if(!$(this).next().hasClass('active')){
                $(this).removeClass('active');
            }
        })
    })
}


function searchPopup(){
    $('.dutyClick li').click(function(){
        $('.SearchArea .detailsPopup').css({'top':$(this).position().top + $(this).height() + 10, 'display' : 'block'});
        $('.SearchArea .detailsPopup > span').css({'left':$(this).position().left + ($(this).width() / 2 ) - 7});
    });
}

function progressAnnouncementDetail(){
    var abilityGauge = $('.abilityGaugeArea div span');
    abilityGauge.each(function(){
        $(this).css('width',$(this).attr('data-percent') + '%');
    })
}