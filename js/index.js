import $ from 'jquery';

$(function(){

// 미디어크기설정
let windowW = $(window).width();
if(windowW > 1300){
  nav();
}
else if(windowW > 980 && windowW <= 1154){
  nav();
}
else if(windowW > 580 && windowW <= 979){
  tNav();
}
else if(windowW <= 579){
  tNav();
}
})

//함수

//pc.ver nav
function nav(){
  $('nav li>a').on('click',function(){
    const navA = $(this).attr('href');
    const aPos = $(navA).offset().top;
    const headerHeight = $('header').height();
    $('html,body').animate({scrollTop: aPos - headerHeight},800);

    return false;
  })
}

//tablet and mobile nav
function tNav(){
  let navW = $('nav').width();
  $('header p.btn').on('click',function(){
    $(this).hide();
    $('nav').animate({left:0},500);
  })
  $('nav li>a').on('click',function(){
    const aHref = $(this).attr('href');
    const aPos = $(aHref).offset().top;
    const headerHeight = $('header').height();
    $('html,body').animate({scrollTop: aPos - headerHeight},800);
    $('nav').css({left:'-'+navW+'px'});
    $('header p.btn').show();
    return false;
  })

  $('nav p.close').on('click',function(){
    const navW = $('nav').width();
    $('nav').css({left:'-'+navW+'px'});
    $('header p.btn').show();
  })


}