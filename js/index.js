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
  galleryT();
}
else if(windowW <= 579){
  tNav();
  gallery();
  form();
}
//화면 크기 변경의 reload
$(window).on('resize',function(){
  window.location.reload();
})

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

//gallery
// function gallery(){
//   let figureW = $('#all figure').width();
//   $('#all>figure:last').prependTo('#all');
//   $('#all').css('margin-left','-'+figureW+'px')

//   $('#gallery .prev').on('click',function(){
//     $('#all').animate({marginLeft:'+='+figure+'px'},600,function(){
//       $('#all>figure:last').prependTo('#all');
//       $('#all').css('margin-left','-'+figureW+'px');
//     })
//   })

//     $('#gallery .next').on('click',function(){
//     $('#all').animate({marginLeft:'-='+figure+'px'},600,function(){
//       $('#all>figure:first').appendTo('#all');
//       $('#all').css('margin-left','-'+figureW+'px');
//     })
// })}
function galleryT(){
  const figureH = $('figure').outerHeight(true);
  $('div#all>figure:last').prependTo('div#all');
  $('div#all>figurer').css('margin-top','-'+figureH+'px')

$('section.prev p.prev').on('click',function(){
  $('div#all').animate({marginTop:'+='+figureH+'px'},600,function(){
    $('div#all>figure:last').prependTo('div#all');
    $('div#all').animate({marginTop:'-'+figureH+'px'})
  })
})
$('section.prev p.next').on('click',function(){
  $('div#all').animate({marginTop:'-='+figureH+'px'},600,function(){
    $('div#all>figure:first').appendTo('div#all');
    $('div#all').animate({marginTop:'-'+figureH+'px'})
  })
})}

//form
function form(){
  const $liForm = $('#box05 li>input, #box05 li>textarea')
  $liForm.removeAttr('placeholder');

  $liForm.on('focus',function(){
    $(this).prev('label').fadeOut(400);
  });

  $liForm.on('blur',function(){
    const str = $(this).val();
    if(str === ''){
      $(this).prev('label').fadeIn(400);
    }
  })
}

//객체 만들기

function Modal(title,pic,year,program,url,text){
  this.title = title;
  this.pic = pic;
  this.year = year;
  this.program = program;
  this.url = url;
  this.text = text;
}

Modal.prototype.action = function(){
  document.querySelector('#modal h4').innerHTML = this.title;
  document.querySelector('#modal figure>img').setAttribute('src',this.pic);
  document.querySelector('#modal figure>figcaption').innerHTML = this.title;
  document.querySelector('#modal dl>dd:nth-child(2)').innerHTML = this.year;
  document.querySelector('#modal dl>dd:nth-child(4)').innerHTML = this.program;
  document.querySelector('#modal dl>dd>a').setAttribute('href',this.url);
  document.querySelector('#modal dl>dd>a').innerHTML = this.url;
  document.querySelector('#modal dl>dd:nth-child(8').innerHTML = this.text;
}

let mymodal = [
  new Modal('title01','./design/web_layout1_prev.jpg','2001','프로그램1','http://www.a1.com','text01'),
  new Modal('title02','./design/web_layout1_prev2.jpg','2002','프로그램2','http://www.a2.com','text02'),
  new Modal('title03','./design/web_layout1_prev3.jpg','2003','프로그램3','http://www.a3.com','text03'),
  new Modal('title04','./design/web_layout1_prev4.jpg','2004','프로그램4','http://www.a4.com','text04'),
  new Modal('title05','./design/web_layout1_prev5.jpg','2005','프로그램5','http://www.a5.com','text05'),
  new Modal('title06','./design/web_layout1_prev6.jpg','2006','프로그램6','http://www.a6.com','text06'),
]

const btn = document.querySelectorAll('#box04 #all>figure');
const close = document.querySelector('#modal .close');

btn.forEach(function(item,index){
  item.addEventListener('click',function(){
    document.querySelector('#modal').style.display = 'block';
    mymodal[index].action();
  })
})
close.addEventListener('click',function(){
  document.querySelector('#modal').style.display = 'none';
})