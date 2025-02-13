slide2 = gsap.to('.sc-collabo .group-slide .slide-item', {
  duration: 10,
  xPercent: 100,
  ease: 'none',
   overwrite: 'all',
   paused:true,
  repeat: -1,
  onReverseComplete:function(){
    slide1.restart();
  }
});
slide1 = gsap.to('.sc-collabo .group-slide .slide-item', {
  duration: 10,
  xPercent: -100,
  ease: 'none',
   overwrite: 'all',
  repeat: -1,
  onReverseComplete:function(){
    slide2.restart();
  }
});

let up = false;
let firstLeftFlag = false;
let firstRightFlag = false;

ScrollTrigger.create({
trigger: '.area',
start: '0% 50%',
end: '100% 50%',
// markers:true,

onUpdate:function(self){

if(self.direction === 1 && firstLeftFlag === false){
if(slide1.isActive()){
  slide1.reverse();
}
else{
  slide2.play();
}

firstLeftFlag = true;
firstRightFlag = false;

}else if(self.direction === -1 && firstRightFlag === false){

if(slide2.isActive()){
  slide2.reverse();
}else{ 
  slide1.play();
}

firstLeftFlag = false;
firstRightFlag = true;
}

}
})