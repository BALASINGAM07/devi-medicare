(function(){
document.documentElement.classList.add('js');
var P=200,q=1,N='919361143045',$=function(i){return document.getElementById(i)};
try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)})}catch(x){document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
var pc=$('pc');
if(window.matchMedia('(hover:hover)').matches){pc.addEventListener('mousemove',function(e){var r=pc.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;pc.style.transform='perspective(700px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg)'});pc.addEventListener('mouseleave',function(){pc.style.transform=''})}
function up(){$('c').textContent=q;$('t').textContent='\u20B9'+(q*P)}
$('mi').onclick=function(){if(q>1){q--;up()}};
$('pl').onclick=function(){if(q<50){q++;up()}};
function msg(){var n=$('n').value.trim(),a=$('a').value.trim();
if(!n||!a){$('e').textContent='Please enter your name and address.';return null}
$('e').textContent='';
return 'Hello! I would like to order VALORA Vali Thailam (100 ml):\nName: '+n+'\nAddress: '+a+'\nQuantity: '+q+'\nTotal: \u20B9'+(q*P)}
$('wa').onclick=function(){var m=msg();if(m)window.open('https://wa.me/'+N+'?text='+encodeURIComponent(m),'_blank')};
$('sm').onclick=function(){var m=msg();if(m)location.href='sms:+'+N+'?body='+encodeURIComponent(m)};
$('n').oninput=$('a').oninput=function(){$('e').textContent=''};
})();