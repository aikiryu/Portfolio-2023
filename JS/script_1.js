// projects section 에서는 header txt color : #fff

let oft5 = $('.c5').offset().top; 
// oft 5 : aesop project 시작
let oft6 = $('.c6').offset().top;
let oft7 = $('.c7').offset().top;
let oft8 = $('.c8').offset().top;
let oft7_2 = $('.c7_2').offset().top;
let oft7_3 = $('.c7_3').offset().top;
// oft 8 : gallery 


let oft2 = $('.c2').offset().top; //about me
let oft3 = $('.c3').offset().top; //skills
let oft4 = $('.c4').offset().top; //index section

let oft9 = $('.c9').offset().top; //contact

let logo = $('header').find('.logo');
let gnb = $('header').find('.gnb');



// mousewheel > d<0 : header top -10%, 
// mousewheel > d>0 : header top 0,

$('section:not(.c1)').on('mousewheel',function(e,d){
    if(d>0){
        // header top0
        $('header').stop().animate({
            'top' : 0,
        });
    } else if(d<0){
        // header top-10%
        $('header').stop().animate({
            'top' : '-10%',
        });
    }
});

// HEADER logo click > main 

logo.on('click',function(){
    $('html,body').stop().animate({
        'scrollTop' : 0
    });
});




let menuAbout = gnb.find('.1st');
let menuProject = gnb.find('.2nd');
let menuContact = gnb.find('.3rd');

// HEADER About click> about

menuAbout.on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        'scrollTop' : oft2,
    });
});


// HEADER Projects click>index

menuProject.on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        'scrollTop' : oft4,
    });
});

// HEADER Contact click > contact

menuContact.on('click',function(e){
    e.preventDefault();
    $('html,body').stop().animate({
        'scrollTop' : oft9,
    });
});


$('.navi').find('span').on('mouseover',function(){


    $(this).parent('.navBtn').addClass('active');
    $(this).parent().siblings().removeClass('active');


    $(this).siblings().children('h5').animate({
        'right' : 0,
    });

    $(this).parent().siblings().find('h5').animate({
        'right' : '-100%',
    });

});

let aesop = $('.c5').offset().top;
let louis = $('.c6').offset().top;
let react = $('.c7').offset().top;
let mmmg = $('.c7_2').offset().top;
let webApp = $('.c7_3').offset().top;

let Projects = [aesop, louis, react, mmmg, webApp];


$('.navi').find('span').on('click',function(){

    $(this).addClass('active')
    .parent().siblings().children('span').removeClass('active');

    $(this).siblings().children('h5').animate({
        'right' : 0,
    });

    $(this).parent().siblings().find('h5').animate({
        'right' : '-100%',
    });

    let i = $(this).parent().index();
    $('html,body').animate({
        'scrollTop' : Projects[i]});
        
});


// SKILL BAR animation

$(window).scroll(function(){
    let scr = $(window).scrollTop(); 
   
    if(scr >= oft5 && scr <= oft8){
        logo.css({'color' : '#fff'});
        gnb.css({'color' : '#fff'});
    }  else {
        logo.css({'color' : '#385a62'});
        gnb.css({'color' : '#385a62'});
    }


let scrForAnimation = $(window).scrollTop();

if(scrForAnimation >= oft3 && scrForAnimation <= oft4){
    $('.c3').find('.container').addClass('active');
} else{
    $('.c3').find('.container').removeClass('active');
}
});

$(window).scroll(function(){

    let scrForNavi = $(window).scrollTop();

    if(scrForNavi >= oft5 && scrForNavi <= oft8){

        $('.navi').css({
            'opacity' : 1,
        });

        if(scrForNavi >= oft5 && scrForNavi < oft6){

            $('.navi').children('.navBtn').eq(0).addClass('active');
            $('.navi').children('.navBtn').eq(0).siblings().removeClass('active');
    

        } else if (scrForNavi >= oft6 && scrForNavi < oft7){

            $('.navi').children('.navBtn').eq(1).addClass('active');
            $('.navi').children('.navBtn').eq(1).siblings().removeClass('active');

        } else if (scrForNavi >= oft7 && scrForNavi < oft7_2){

            $('.navi').children('.navBtn').eq(2).addClass('active');
            $('.navi').children('.navBtn').eq(2).siblings().removeClass('active');

        } else if (scrForNavi >= oft7_2 && scrForNavi < oft7_3){
            $('.navi').children('.navBtn').eq(3).addClass('active');
            $('.navi').children('.navBtn').eq(3).siblings().removeClass('active');
        } else if (scrForNavi >= oft7_3){
            $('.navi').children('.navBtn').eq(4).addClass('active');
            $('.navi').children('.navBtn').eq(4).siblings().removeClass('active');
        }

    } else if (scrForNavi < oft5 || scrForNavi > oft8){
        $('.navi').css({
            'opacity' : 0,
        });
    }
});

$('.c5').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

$('.c6').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

$('.c7').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

$('.c7_2').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});


$('.c7_3').find('a').on('mouseover',function(){
    $(this).addClass('active');
}).on('mouseleave',function(){
    $(this).removeClass('active');
});

//Gallery img

let galImg = $('.c8').find('.box4');
let viewImg = $('.c8').find('.viewImg');


galImg.on('click',function(e){
    
   viewImg.css({'display' : 'block'});
});

viewImg.on('click',function(){
    viewImg.css({'display' : 'none'});
});

// $('section').on('click',function(){
//     viewImg.css({'display' : 'none'});
// });
