$(document).ready(function(){


    $(window).resize(function() {
        var $windowWidth = window.innerWidth;
        if($windowWidth < 861) {
            $(".sub_link ul").hide();
        } else {
            $(".sub_link ul").show();
            $(".sub_link a.family").removeClass('open');
        }
    }).resize();  



$(".sub_link a.family").click(function(){
    $(this).parent('div').find('ul').slideToggle('fast');
    $(this).toggleClass('open');
});


$(".tabmenu li.on a").attr("title","선택");

$(".tabmenu02 .work li.on a").attr("title","선택");

$("ul#work li").click(function(){
    var tts = $("ul#work").find("li").length;
    var ttst = $(this).attr("class");
    var ttst_target = ttst.length;
    var sdfsdfsd = ttst.substring(5,7);
	
	$(".tabmenu02 .work li.on a").removeAttr("title");

    if(ttst_target<20){
        $("ul#work li").removeClass("on");
        $("div#work_div div.nong").css("display","none");
        $(this).addClass("on");
        $("div#work_div div#bb"+(sdfsdfsd)).css("display","block");

    }else{
        window.open(ttst );
        return false;
		
    }
    $('.slide_img').slick('setPosition');
	$(".tabmenu02 .work li.on a").attr("title","선택");
	
});

    
/* news box */
var $fbanner = $('.banner_list');
	var slideCount = null;
	$fbanner.slick({
		slidesToShow:7,
		slidesToScroll: 1,
		speed: 800,
		arrows: false,
		autoplaySpeed: 1000,
		autoplay:true,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [

			{breakpoint: 1400, settings: {slidesToShow:5}},
			{breakpoint: 740, settings: {slidesToShow:3}}
			
		  ]
	});
	$('.fbanner .controll > .start-slide').hide();
	$('.fbanner .controll > .stop-slide').on('click', function() {
		$('.fbanner .controll > .start-slide').show(); $(this).hide();
		$('.fbanner .controll').find('.start-slide').focus();
		$fbanner.slick('slickPause');
	});

	$('.fbanner .controll > .start-slide').on('click', function() {
		$('.fbanner .controll > .stop-slide').show(); $(this).hide();
		$('.fbanner .controll').find('.stop-slide').focus();

		$fbanner.slick('slickPlay');
	});
	$('.fbanner .controll > .prev-slide').on('click', function() {
		$fbanner.slick('slickPrev');
	});
	$('.fbanner .controll > .next-slide').on('click', function() {
		$fbanner.slick('slickNext');
	});	
/* news box */

    $('.slide_img').not('.slick-initialized').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		speed: 800,
		arrows: true,
		autoplaySpeed: 4000,
		autoplay:false,
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1
			  }
			}
			
		  ]
	});

var familySite = false;
	$('#f-family').find('ul.list').each(function(){
		$(this).find('.mn_f1').click(function () {
			if(familySite = true && $(this).parent('li').hasClass('over')){
				$(this).parent('li').removeClass('over');
				$(this).parent('li').find('.list-wrap').slideUp();
				familySite = false;
			}else{
					$(this).parent('li').addClass('over');
					$(this).parent('li').find('.list-wrap').slideDown();
					$(this).parent('li').siblings('li').removeClass('over');
					$(this).parent('li').siblings('li').find('.list-wrap').slideUp();
					familySite = true;
				
			}
     	});
		 $(this).find('.close').click(function () {
			$(this).parent('div').slideUp();
			$(this).parent('div').parent('li').removeClass('over');
			$(this).parent('div').parent('li').find('.mn_f1').focus();
			familySite = false;
		});
   });

   $(".langbtn").on('click', function() {
    $('.langbox').slideToggle('fast');
    $(this).toggleClass('on');
    });
    $('.langbox').find('li').last().on('focusout', function(){
        $(".langbtn").removeClass('on');
        $(".langbox").css('display','none');
    });

    

});       

function bodyPrint(){
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
	     // ie일 경우
			
			 document.getElementById("content").focus();	       
       window.print();

	}else{
	     // ie가 아닐 경우
			 var initBody = document.body.innerHTML;
			 window.onbeforeprint = function(){
					 document.body.innerHTML = document.getElementById("content").innerHTML;
			 };
			 window.onafterprint = function(){
					 document.body.innerHTML = initBody ;
			 };
			 window.print();
	}
}

window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\/script>');

function getCookie( name )
{
    var nameOfCookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length )
    {
        var y = (x+nameOfCookie.length);
        if ( document.cookie.substring( x, y ) == nameOfCookie ) {
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
                endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) );
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
            break;
    }
    return "";
}
               