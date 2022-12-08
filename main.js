window.onload = function () {
    setTimeout(function () {    
    scrollTo(0,0);
    }, 100);
};

$(document).ready(function() {
    
    var mHtml = $("html");
    var page = 1;
    var scrollCurrent = $('.section_wrap .section_controll'); 
    mHtml.animate({scrollTop : '0'},10);
    var $windowWidth = window.innerWidth;
    
    $(window).on("wheel", function(e) {
        
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
            $buttonMove();
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
            $buttonMove();
        }
        $loadF(); 
    });


    // 버튼이동
    $buttonClick = function () {
        scrollCurrent.children('a').on('click', function(btf) {  
            var currentIndex = $(this).index() + 1;          
            page = currentIndex;
            $loadF();
            $buttonMove();
            btf.preventDefault();
        });
    };
    $buttonClick();

    // 페이지이동
    $loadF = function () {
        if(window.innerWidth > 1281) {
        var posTop =(page-1) * $(window).height();        
        mHtml.animate({scrollTop : posTop}); 
        console.log(page);
        }
    };
    
    // 버튼 모양
    $buttonMove = function () {                   
        if (page == 1) {
            scrollCurrent.children('a.pp01').addClass('on').siblings().removeClass('on');
        } else if (page == 2) {
            scrollCurrent.children('a.pp02').addClass('on').siblings().removeClass('on');
        } else if (page == 3) {
            scrollCurrent.children('a.pp03').addClass('on').siblings().removeClass('on');
        } else if (page == 4) {
            scrollCurrent.children('a.pp04').addClass('on').siblings().removeClass('on');
        }
    };

    

    
    
    $('#geojum a').click(function(tabtt){
        var oTarget = $(this).attr('href');
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        $('#geojum a').each(function(){
            var oSiblings = $(this).attr('href');
            if (oTarget != oSiblings) {
                $(oSiblings).hide();
            } else {
                $(oTarget).show();
            }
        });
        tabtt.preventDefault();
        $('.geojum_slidebig').slick('setPosition');
    });  
    
    $('.geojum_slidebig').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [    
            {
                breakpoint:768, 
                settings: {
                    centerMode: true,
                    variableWidth: true
                }
            }
        ]            
    });

    const geojumTab = $ ('#geojum');
    geojumTab.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        responsive: [    
            {
                breakpoint:768, 
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.geojum_controll .start-slide').hide();
    $('.geojum_controll .stop-slide').on('click', function() {
        $('.geojum_controll .start-slide').show(); 
        $(this).hide();
        geojumTab.slick('slickPause');
    });
    $('.geojum_controll .start-slide').on('click', function() {
        $('.geojum_controll .stop-slide').show(); 
        $(this).hide();
        geojumTab.slick('slickPlay');
    });
    $('.geojum_controll .prev-slide').on('click', function() {
        geojumTab.slick('slickPrev');
    });
    $('.geojum_controll .next-slide').on('click', function() {
        geojumTab.slick('slickNext');
    });

    const coures_slide = $ ('.coures_slide');
    coures_slide.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" role="button"><span>PREV</span></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" role="button"><span>NEXT</span></button>'
    });

    //const sec3slide = $('.sec3slide');


 var sec3slide = $('.sec3slide');
  var $nav = $('.nav').find('li');
  var enableNav = true; //클릭하여 내비게이션 이동 허용 여부(슬라이드 동작 중 클릭되는 것을 방지)
  var speed = 1000;//슬라이드 속도

  sec3slide.on('init reInit', function (event, slick) {//페이징이니셜
    if(!slick.$dots) return;
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ //슬라이드 변경 시 내비 및 페이징 변경
    //내비 변경
    if(enableNav){
      $nav.removeClass("on");
      $nav.eq(nextSlide).addClass("on");
      //navStatus();
    }
    //페이징 변경
    if(!slick.$dots) return;
    var i = (nextSlide ? nextSlide : 0) + 1;
    //$("#slide_paging").find(".page").text(i);
  });

  function navStatus(){ //슬라이드 동작 중 내비클릭 방지
    enableNav = false;
    setTimeout(function() {
      enableNav = true;
    }, speed);
  }

  $nav.on("click", function(){ //내비 클릭시 해당 인덱스로 이동
    if(enableNav){
      var slideNo = $(this).index();
      sec3slide.slick('slickGoTo', slideNo);
      $nav.removeClass("on");
      $(this).addClass("on");
      //$("#slide_paging").find(".page").text(slideNo +1);
      //navStatus();
    }
  });


    sec3slide.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        dots: false,
        arrows: false
    });
    $('.nncontroll .start-slide').hide();
    $('.nncontroll .stop-slide').on('click', function() {
        $('.nncontroll .start-slide').show(); 
        $(this).hide();
        sec3slide.slick('slickPause');
    });
    $('.nncontroll .start-slide').on('click', function() {
        $('.nncontroll .stop-slide').show(); 
        $(this).hide();
        sec3slide.slick('slickPlay');
    });
    $('.nncontroll .prev-slide').on('click', function() {
        sec3slide.slick('slickPrev');
    });
    $('.nncontroll .next-slide').on('click', function() {
        sec3slide.slick('slickNext');
    });

    var popupzone = $('.popuplist');
    popupzone.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        //variableWidth: true,
        dots: false,
        arrows: false
    });
    $('.popupzone-controll .start-slide').hide();
    $('.popupzone-controll .stop-slide').on('click', function() {
        $('.popupzone-controll .start-slide').show(); 
        $(this).hide();
        popupzone.slick('slickPause');
    });
    $('.popupzone-controll .start-slide').on('click', function() {
        $('.popupzone-controll .stop-slide').show(); 
        $(this).hide();
        popupzone.slick('slickPlay');
    });
    $('.popupzone-controll .prev-slide').on('click', function() {
        popupzone.slick('slickPrev');
    });
    $('.popupzone-controll .next-slide').on('click', function() {
        popupzone.slick('slickNext');
    });
    

});   