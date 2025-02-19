// lenis
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});

gsap.ticker.lagSmoothing(0);

// logo
var animation1 = bodymovin.loadAnimation({
  container: $('#logo')[0],
  path: './assets/js/logo.json', 
  renderer: 'svg', 
  loop: true, 
  autoplay: true,
});

// header scroll
ScrollTrigger.create({
  trigger: '#header', 
  start: "0% 0%", 
  endTrigger: '#footer',
  end: "100% 100%", 
  onUpdate: (scroll) => {
    if (scroll.direction === 1) {
      gsap.to('#header .group-info', { yPercent: -100, duration: 0.5 });
      gsap.to('#header .group-nav', { y: '-3.2rem', duration: 0.5 });
      gsap.to('#header .group-banner', { yPercent: -100, y: '-3.2rem', duration: 0.5 });
    } else if (scroll.direction === -1) {
      gsap.to('#header .group-info', { yPercent: 0, duration: 0.5 });
      gsap.to('#header .group-nav', { y: 0, duration: 0.5 });
      gsap.to('#header .group-banner', { yPercent: 0, y:0, duration: 0.5 });
    }
  }
});
// header hover
$('#header .group-nav .gnb-item').hover(function() {
  if ($(this).find('.gnb-wrapper').length > 0) {
    $(this).toggleClass('active');
  }
});

// sc-kith video play
$('.sc-kith .btn-area .control-btn').on('click', function() {
  if ($(this).hasClass('pause')) {
    $(this).removeClass('pause');
    $('.sc-kith .group-video video').get(0).play();
  } else {
    $(this).addClass('pause');
    $('.sc-kith .group-video video').get(0).pause();
  }
});

// sc-kith group-video 
const kithVideo = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc-kith .sticky-wrapper",
    start: "top top",
    end: "100% 100%",
    scrub: 0,
  }
})
kithVideo
.to('.sc-kith .group-video .scroll-btn',0.5,{
  autoAlpha: 0
},"a")
.to('.sc-kith .group-video .btn-area',0.5,{
  autoAlpha: 0
},"a")
.to('.sc-kith .group-video',0.5,{
  onComplete: function (){
    $('.sc-kith .group-video').removeClass('active');
  },
  onReverseComplete: function (){
    $('.sc-kith .group-video').addClass('active');
  }
},"a")
.to('.sc-kith .group-video .title', 0.4,{
  y:-100,
  autoAlpha: 0
},'b-=0.2')
.to('.sc-kith .group-video .sub-title', 0.4,{
  y:-100,
  autoAlpha: 0
},'b-=0.2')
.to('.sc-kith .group-video .kith-logo', 0.4,{
  y:-100,
  autoAlpha: 0
},'b-=0.2')
.to('.sc-kith .group-video .video-area',{
  'clip-path': function(){
    const sticky = document.querySelector('.sc-kith .sticky-wrapper .sticky');
    const space = document.querySelector('.sc-kith .space');

    const stickyRect = sticky.getBoundingClientRect();
    const spaceRect = space.getBoundingClientRect();

    const relativeTop = spaceRect.top - stickyRect.top;
    const relativeLeft = spaceRect.left - stickyRect.left;
    const relativeBottom = spaceRect.top - space.clientHeight;
    const relativeRight = spaceRect.left;

    return `inset(${relativeTop}px ${relativeLeft}px ${relativeBottom}px ${relativeRight}px )`
  }
},'b')
.to('.sc-kith .group-video .video-area video',{
  scale: 0.55
},'b')
.to('.sc-kith .group-text .txt1',{
  x: 0,
  y: 0
},'b')
.to('.sc-kith .group-text .txt2',{
  x:0
},'b')
.to('.sc-kith .group-text .txt3',{
  x: 0
},'b');

// sc-kith group-product row-scroll
const kithRow = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc-kith .product-inner",
    start: "top top",
    end: "100% 100%",
    scrub: 0,
  }
});
kithRow.to('.sc-kith .group-product .product-list', {
  x:0,
  xPercent:-100,
  ease: 'none',
});

// sc-kith group-product product
textList = document.querySelectorAll('.sc-kith .group-product .text-item');

$('.sc-kith .group-product .product-item').each(function(i, el){

  // product clock
  const kithProd = gsap.timeline({
    scrollTrigger:{
      containerAnimation: kithRow,
      trigger: el,
      start: "left 100%",
      end: "right 0%",
      scrub: 0,
      // markers: true,
    },
  })
  kithProd
  .to(el.querySelector('.product-case'), {
    rotate: 360,
    duration: 12,
  }, 'prod')
  .to(el.querySelector('.product-hours'), {
    rotate: 360,
    duration: 4,
  }, 'prod')
  .to(el.querySelector('.product-minute'), {
    rotate: 360, 
    duration: 8, 
  }, 'prod')
  .to(el.querySelector('.product-second'), {
    rotate: 360, 
    duration: 12, 
  }, 'prod');

  // product info text
  const kithText = gsap.timeline({
    scrollTrigger:{
      containerAnimation: kithRow,
      trigger: el,
      start: "left 65%",
      end: "right 50%",
      scrub: 0,
      // markers: true,
    },
  })
  kithText
  .from(textList[i],{
    y: 30,
    opacity: 0
  })
  .to(textList[i],{
    y: 0,
    opacity: 1
  })
  .to(textList[i],{
    y: -30,
    opacity: 0
  })
});

// .sc-imagine color change
gsap.to(".sc-imagine", {
  scrollTrigger: {
    trigger: ".sc-imagine .group-half",
    start: "30% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
  },
  color: "#ffffff",
  background: 'rgba(20,17,25,1)'
});

// .sc-imagine .group-half scroll
const imagine = gsap.timeline({
  scrollTrigger:{
    trigger: ".sc-imagine .group-half",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true,
    ease: 'none',
  }
});
imagine
.to('.sc-imagine .group-half .text01', 1,{
  x: 34.1721
},'<')
.to('.sc-imagine .group-half .text02', 1,{
  x: -34.1721
},'<')
.to('.sc-imagine .group-half .text03', 1,{
  x: 34.1721
},'<')
.to('.sc-imagine .group-half .content-item:first-child', 1,{
  y: -99.2
},'<')
.fromTo('.sc-imagine .group-half .content-item:first-child img', 1,{
  yPercent: -50
},{
  yPercent: 0
},'<')
.to('.sc-imagine .group-half .content-item:nth-child(2)', 1,{
  y: -99.2
},'<')
.fromTo('.sc-imagine .group-half .content-item:nth-child(2) img', 1,{
  yPercent: -50
},{
  yPercent: 0
},'<')
.fromTo('.sc-imagine .group-half .content-item:nth-child(3) img', 1,{
  yPercent: -50
},{
  yPercent: 0
},'<')

// .sc-imagine .group-circle
gsap.to(".sc-imagine .group-circle .content-area", {
  scrollTrigger: {
    trigger: ".sc-imagine",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true,
  },
  rotate: 70,
});

// .sc-story .group-subscribe
gsap.set('.sc-story .bg-area img',{
  yPercent: -15,
})
gsap.to(".sc-story .bg-area img", {
  scrollTrigger: {
    trigger: ".sc-story .group-subscribe",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
    // markers: true, 
  },
  yPercent: 10,
});

// btn top
$('.btn-top').click(function () { 
  window.scrollTo({ top:0, behavior:"smooth" }) 
});