// Starfield background
(function(){
  const c=document.getElementById('stars'),x=c.getContext('2d');let w,h,s=[];
  function resize(){w=c.width=innerWidth;h=c.height=innerHeight;s=Array.from({length:Math.floor(w*h/16000)},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.4+.2,v:Math.random()*.3+.05}))}
  function draw(){x.clearRect(0,0,w,h);x.fillStyle='rgba(139,123,255,.7)';for(const p of s){p.y-=p.v;if(p.y<0)p.y=h;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill()}requestAnimationFrame(draw)}
  addEventListener('resize',resize);resize();draw();
})();

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');
  e.target.querySelectorAll('b[data-w]').forEach(b=>b.style.width=b.dataset.w+'%');
  if(e.target.matches('.bar')) e.target.querySelector('b').style.width=e.target.querySelector('b').dataset.w+'%';
  io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Lightbox
const lb=document.getElementById('lb');
if(lb){
document.querySelectorAll('.shot').forEach(f=>f.addEventListener('click',()=>{lb.querySelector('img').src=f.dataset.src;lb.classList.add('on')}));
lb.addEventListener('click',()=>lb.classList.remove('on'));
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});
}
