$(document).ready(function() {


    var url = document.location.href;
    var query = window.location.search;
    var param = new URLSearchParams(query);
    var menuCd = param.get('menuCd');
    console.log(menuCd);
    var subtopImg = document.querySelector('.subtop_visual');

    if (menuCd.indexOf('DOM_000000101') === 0 ) {
        subtopImg.className += ' sub01';
    } else if (menuCd.indexOf('DOM_000000102') === 0 ) {
        subtopImg.className += ' sub02';
    } else if (menuCd.indexOf('DOM_000000103') === 0 ) {
        subtopImg.className += ' sub03';
    } else if (menuCd.indexOf('DOM_000000104') === 0 ) {
        subtopImg.className += ' sub04';
    } else if (menuCd.indexOf('DOM_000000105') === 0 ) {
        subtopImg.className += ' sub05';
    } else if (menuCd.indexOf('DOM_000000106') === 0 ) {
        subtopImg.className += ' sub06';
    } else {
        subtopImg.className += ' sub01';
    }




    var subnav = $('.subnav');    
    $(window).scroll(function() {
        var scrollHeight = $(window).scrollTop();
        if(scrollHeight > 290) {
            subnav.addClass('on');
        } else {
            subnav.removeClass('on');
        }
    });

    $('.tablink').click(function(tabtt){
        $(this).parent('div').addClass('active').siblings().removeClass('active');
        $('.piclist > ul').slick('setPosition');
        $('.piclist1 > ul').slick('setPosition');
        tabtt.preventDefault();
    });

/* 이미지 슬라이드 */
    var $piclist = $('.piclist');
    var $slide = $piclist.find('ul');
    
    $slide.slick({
        slidesToShow:1,
        pauseOnHover: false,
        speed: 1000,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay:true,
        fade: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.piclist .prev-slide').on('click', function() {
        $slide.slick('slickPrev');
    });
    $('.piclist .next-slide').on('click', function() {
        $slide.slick('slickNext');
    }); 
    
    $slide.on('init', function(event, slick){
        slideCount = slick.slideCount;            
        setCurrentSlideNumber(slick.currentSlide);
    });
    $slide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setCurrentSlideNumber(nextSlide);
    });        
       
    function setCurrentSlideNumber(currentSlide) {
        var $el = $piclist.find('.count').find('.current');        
        if(currentSlide < 9){
            $el.text("0" + (currentSlide + 1));
        }else{
            $el.text(currentSlide + 1);
        }        
    }
    var slideP = document.querySelector(".piclist > ul");
    var slideTotal = document.querySelector(".piclist .total");
    if(slideP !== null){
        if(slideP.slick.slideCount < 9){
            slideTotal.innerHTML = "0" + slideP.slick.slideCount;
        }else{
            slideTotal.innerHTML = slideP.slick.slideCount;
        }
    }

    
/* 이미지 슬라이드 */



    var $piclist1 = $('.piclist1');
    var $slide1 = $piclist1.find('ul');

    $slide1.slick({
        slidesToShow:1,
        pauseOnHover: false,
        speed: 1000,
        arrows: false,
        autoplaySpeed: 1500,
        autoplay:true,
        fade: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.piclist1 .prev-slide').on('click', function() {
        $slide1.slick('slickPrev');
    });
    $('.piclist1 .next-slide').on('click', function() {
        $slide1.slick('slickNext');
    }); 

    $slide1.on('init', function(event, slick){
        slideCount = slick.slideCount;            
        setCurrentSlideNumber1(slick.currentSlide);
    });
    $slide1.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setCurrentSlideNumber1(nextSlide);
    });        
    
    function setCurrentSlideNumber1(currentSlide) {
        var $el1 = $piclist1.find('.count').find('.current');        
        if(currentSlide < 9){
            $el1.text("0" + (currentSlide + 1));
        }else{
            $el1.text(currentSlide + 1);
        }        
    }

    var slide1 = document.querySelector(".piclist1 > ul");
    var slideTotal1 = document.querySelector(".piclist1 .total");
    if(slide1 !== null){
        if(slide1.slick.slideCount < 9){
            slideTotal1.innerHTML = "0" + slide1.slick.slideCount;
        }else{
            slideTotal1.innerHTML = slide1.slick.slideCount;
        }
    }
    
    /* 거점시설 이미지 롤링 */
    var $sliderFor = $('.slider-for');
    $sliderFor.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.geojum_img .start-slide').hide();
    $('.geojum_img .stop-slide').on('click', function() {
        $('.geojum_img .start-slide').show(); 
        $(this).hide();
        $sliderFor.slick('slickPause');
    });
    $('.geojum_img .start-slide').on('click', function() {
        $('.geojum_img .stop-slide').show(); 
        $(this).hide();
        $sliderFor.slick('slickPlay');
    });
    $('.geojum_img .prev-slide').on('click', function() {
        $sliderFor.slick('slickPrev');
    });
    $('.geojum_img .next-slide').on('click', function() {
        $sliderFor.slick('slickNext');
    });

    $sliderFor.on('init', function(event, slick){
        slideCount = slick.slideCount;            
        sliderForNum(slick.currentSlide);
    });
    $sliderFor.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        sliderForNum(nextSlide);
    });        
    
    function sliderForNum(currentSlide) {
        var $el = $('.geojum_img').find('.current');        
        if(currentSlide < 9){
            $el.text("0" + (currentSlide + 1));
        }else{
            $el.text(currentSlide + 1);
        }        
    }
    var sliderFor = document.querySelector(".slider-for");
    var sliderForTotal = document.querySelector(".geojum_img .total");
    if(sliderFor !== null){
        if(sliderFor.slick.slideCount < 9){
            sliderForTotal.innerHTML = "0" + sliderFor.slick.slideCount;
        }else{
            sliderForTotal.innerHTML = sliderFor.slick.slideCount;
        }
    }

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        asNavFor: '.slider-for',
        centerMode: false,
        arrows: false,
        focusOnSelect: true
    });

    var $floorNum = $('#tabProduct > li').length;
    $('#tabProduct').addClass('tab' + $floorNum);

    $('#tabProduct a').click(function(tabtt){
        var oTarget = $(this).attr('href');
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        $('#tabProduct a').each(function(){
            var oSiblings = $(this).attr('href');
            if (oTarget != oSiblings) {
                $(oSiblings).hide();
            } else {
                $(oTarget).show();
            }
        });
        tabtt.preventDefault();
    });


    $('.hisslick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: true
    });

    $('.hisnewMiddle_list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        dots:true,
        responsive: [    
            {
                breakpoint:768, 
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint:580, 
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});


