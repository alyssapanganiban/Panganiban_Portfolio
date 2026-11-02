(function(){
  var branch='<img src="images/branch.png" width="569" height="690" alt="">';
  var a=document.createElement('div');a.className='branch';a.style.cssText='left:-20px;top:70px;transform:scaleX(-1) rotate(-12deg)';a.innerHTML=branch;
  var b=document.createElement('div');b.className='branch';b.style.cssText='right:-10px;bottom:-10px;transform:rotate(10deg)';b.innerHTML=branch;
  document.body.append(a,b);

  if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
    for(var i=0;i<16;i++){
      var p=document.createElement('span'),s=8+Math.random()*10;
      p.className='petal';
      p.style.cssText='left:'+Math.random()*100+'vw;width:'+s+'px;height:'+s*1.2+'px;animation-duration:'+(14+Math.random()*14)+'s;animation-delay:-'+Math.random()*20+'s;--dx:'+(Math.random()*160-80)+'px';
      document.body.appendChild(p);
    }
  }

  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.fade').forEach(function(el,i){el.style.transitionDelay=(i%4)*.12+'s';io.observe(el)});

  var px=document.querySelectorAll('[data-speed]');
  if(px.length&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
    addEventListener('scroll',function(){
      var y=scrollY;
      px.forEach(function(el){el.style.transform='translateY('+(y*el.dataset.speed)+'px)'});
    },{passive:true});
  }
})();
