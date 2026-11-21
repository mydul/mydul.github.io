(()=>{const D=document,r=D.body.dataset.root||'';D.querySelectorAll('link[rel~=icon]').forEach(e=>e.remove());[['icon','image/png','favicon-32.png'],['apple-touch-icon','','apple-touch-icon.png']].forEach(([a,t,f])=>{const l=D.createElement('link');l.rel=a;if(t)l.type=t;l.href=r+f;D.head.appendChild(l)});const p=location.pathname,
L=[['Home',''],['Blog','blog/'],['Projects','projects/'],['Tools','tools/'],['Resume','resume/']],
m=L.find(x=>x[1]&&p.includes('/'+x[1]))||L[0],
S=[['https://www.facebook.com/mydul.me','Facebook','bi-facebook'],['https://x.com/mydulii','X','bi-twitter-x'],['https://www.instagram.com/mydul.me/','Instagram','bi-instagram'],['https://www.linkedin.com/in/mydul/','LinkedIn','bi-linkedin'],['https://www.researchgate.net/profile/Md-Mydul-Islam-3','ResearchGate','RG'],['https://ieee-collabratec.ieee.org/app/p/mydul','IEEE Collabratec','IEEE'],['https://scholar.google.com/citations?user=bWTmly8AAAAJ&hl=en','Google Scholar','bi-mortarboard-fill'],['https://github.com/mydul','GitHub','bi-github']];
const CSS=`
.fg{align-items:start}
.fg .soc{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;max-width:480px}
.fg .soc a{width:44px;height:44px;border-radius:50%;background:var(--card);display:flex;align-items:center;justify-content:center;margin:0;font:700 11px var(--sans);color:var(--ink);transition:.2s}
.fg .soc a i{font-size:19px}
.fg .soc a:hover{background:var(--yellow);color:#16162a;transform:translateY(-4px)}
footer{border-top:1px solid var(--line);margin-top:20px}
.cp{margin:8px 0 0;font-size:13px;color:var(--mut)}
.tm{width:40px;height:40px;border-radius:50%;border:0;background:var(--card);color:var(--ink);font-size:17px;cursor:pointer;margin-left:6px;transition:.2s}
.tm:hover{background:var(--yellow);color:#16162a}
#up{position:fixed;right:22px;bottom:64px;width:48px;height:48px;border-radius:50%;border:0;background:var(--yellow);color:#16162a;font:700 22px/1 var(--sans);cursor:pointer;box-shadow:0 10px 26px rgba(22,22,42,.22);opacity:0;pointer-events:none;transform:translateY(10px);transition:.25s;z-index:20}
#up.on{opacity:1;pointer-events:auto;transform:none}#up:hover{background:var(--blue)}
.prose figure,.prose .wp-block-image{margin:28px auto;text-align:center}.prose img{display:block;max-width:100%;height:auto;margin:24px auto;border-radius:12px}.prose figure img{margin:0 auto}.prose figcaption{text-align:center;color:var(--mut);font-size:.9rem;margin-top:8px}
.brand{position:relative;display:inline-block;padding:8px 6px;line-height:1}.brand b{position:relative;z-index:1;font:700 1.75rem/1 var(--serif);letter-spacing:-.8px;color:var(--ink)}.brand svg{position:absolute;left:-8px;top:50%;width:calc(100% + 16px);height:34px;transform:translateY(-50%);z-index:0;overflow:visible;pointer-events:none}.brand svg path{fill:var(--blue);transition:fill .3s}.brand:hover svg path{fill:var(--yellow)}@media(max-width:560px){.brand b{font-size:1.25rem;white-space:nowrap}}
#mn{display:none;width:44px;height:44px;border-radius:50%;border:0;background:var(--card);cursor:pointer;padding:0;position:relative;flex:none}#mn span{position:absolute;left:13px;right:13px;height:2.5px;border-radius:2px;background:var(--ink);transition:.25s}#mn span:nth-child(1){top:16px}#mn span:nth-child(2){top:21px}#mn span:nth-child(3){top:26px}header.open #mn span:nth-child(1){top:21px;transform:rotate(45deg)}header.open #mn span:nth-child(2){opacity:0}header.open #mn span:nth-child(3){top:21px;transform:rotate(-45deg)}
@media(max-width:760px){header>div{position:relative;height:64px}#mn{display:block;margin-left:6px}header>div>.tm{margin-left:auto}header nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:2px;padding:10px 4vw 20px;background:var(--bg);border-bottom:1px solid var(--line);box-shadow:0 24px 30px -22px rgba(22,22,42,.4)}header.open nav{display:flex}header .logo+nav a:not(.pill){font-size:18px;padding:14px 16px;border-radius:14px}header .logo+nav a.pill{margin:10px 0 0;text-align:center;font-size:18px;padding:14px 16px}}
.pn{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:48px;max-width:760px}
.pn .card h3{font:600 1.05rem/1.35 'Hind Siliguri','Fraunces',serif}.pn .nx{text-align:right}
@media(max-width:640px){.pn{grid-template-columns:1fr}}
[data-theme=dark]{color-scheme:dark;--bg:#15141d;--card:#232231;--ink:#f4f0ea;--ink2:#c6c2d2;--mut:#938fa5;--line:#33324a}
[data-theme=dark] header{background:rgba(21,20,29,.92)}
[data-theme=dark] .alt{background:#1b1a27}
[data-theme=dark] .hero:before{background:#1c1b29}
[data-theme=dark] .float,[data-theme=dark] .tag,[data-theme=dark] input,[data-theme=dark] select,[data-theme=dark] .out{background:#2c2b3f;color:var(--ink)}
[data-theme=dark] .btn,[data-theme=dark] nav a.pill,[data-theme=dark] .c2{color:#16162a!important}
[data-theme=dark] .btn.ghost{color:var(--ink)!important}
[data-theme=dark] .btn.ghost:hover{background:var(--ink);color:#16162a!important}
[data-theme=dark] .band{color:#16162a}
[data-theme=dark] .band .btn.dark{background:#16162a;color:#fff!important}
[data-theme=dark] .pg{background:#2c2b3f;color:var(--ink)}
[data-theme=dark] .pg.on{background:var(--yellow);color:#16162a}
`;
D.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"><style>'+CSS+'</style>');
D.body.insertAdjacentHTML('afterbegin',`<header><div><a class="logo brand" href="${r}" aria-label="Mydul Islam — home"><svg viewBox="0 0 200 34" preserveAspectRatio="none" aria-hidden="true"><path d="M0.0 16.8 L3.3 15.0 L6.7 13.4 L10.0 11.9 L13.3 10.5 L16.7 9.2 L20.0 7.9 L23.3 6.7 L26.7 5.6 L30.0 4.7 L33.3 3.8 L36.7 3.1 L40.0 2.5 L43.3 2.0 L46.7 1.7 L50.0 1.5 L53.3 1.5 L56.7 1.5 L60.0 1.8 L63.3 2.1 L66.7 2.6 L70.0 3.2 L73.3 3.9 L76.7 4.8 L80.0 5.7 L83.3 6.7 L86.7 7.8 L90.0 8.9 L93.3 10.1 L96.7 11.3 L100.0 12.6 L103.3 13.9 L106.7 15.1 L110.0 16.3 L113.3 17.5 L116.7 18.7 L120.0 19.8 L123.3 20.8 L126.7 21.8 L130.0 22.6 L133.3 23.4 L136.7 24.0 L140.0 24.6 L143.3 25.0 L146.7 25.3 L150.0 25.5 L153.3 25.6 L156.7 25.5 L160.0 25.3 L163.3 25.0 L166.7 24.6 L170.0 24.1 L173.3 23.5 L176.7 22.8 L180.0 22.0 L183.3 21.2 L186.7 20.3 L190.0 19.4 L193.3 18.4 L196.7 17.5 L200.0 16.8 L200.0 17.2 L196.7 19.0 L193.3 20.6 L190.0 22.1 L186.7 23.5 L183.3 24.8 L180.0 26.1 L176.7 27.3 L173.3 28.4 L170.0 29.3 L166.7 30.2 L163.3 30.9 L160.0 31.5 L156.7 32.0 L153.3 32.3 L150.0 32.5 L146.7 32.5 L143.3 32.5 L140.0 32.2 L136.7 31.9 L133.3 31.4 L130.0 30.8 L126.7 30.1 L123.3 29.2 L120.0 28.3 L116.7 27.3 L113.3 26.2 L110.0 25.1 L106.7 23.9 L103.3 22.7 L100.0 21.4 L96.7 20.1 L93.3 18.9 L90.0 17.7 L86.7 16.5 L83.3 15.3 L80.0 14.2 L76.7 13.2 L73.3 12.2 L70.0 11.4 L66.7 10.6 L63.3 10.0 L60.0 9.4 L56.7 9.0 L53.3 8.7 L50.0 8.5 L46.7 8.4 L43.3 8.5 L40.0 8.7 L36.7 9.0 L33.3 9.4 L30.0 9.9 L26.7 10.5 L23.3 11.2 L20.0 12.0 L16.7 12.8 L13.3 13.7 L10.0 14.6 L6.7 15.6 L3.3 16.5 L0.0 17.2Z"/></svg><b>Mydul Islam</b></a><nav>${L.map(x=>`<a href="${r}${x[1]}"${x===m?' class="on"':''}>${x[0]}</a>`).join('')}<a class="pill" href="${r}card/">Say hello 👋</a><button class="tm" id="tm" type="button"></button></nav></div></header>`);
D.body.insertAdjacentHTML('beforeend',`<footer><div class="fg"><div><a class="logo" href="${r}">Mydul Islam</a><p class="cp">© ${new Date().getFullYear()} Mydul Islam. All rights reserved.</p><div class="soc">${S.map(s=>`<a href="${s[0]}" target="_blank" rel="noopener noreferrer" aria-label="${s[1]}" title="${s[1]}">${s[2].startsWith('bi-')?`<i class="bi ${s[2]}"></i>`:s[2]}</a>`).join('')}</div></div><div><b>Explore</b><a href="${r}blog/">Blog</a><a href="${r}projects/">Projects</a><a href="${r}tools/">Tools</a></div><div><b>About</b><a href="${r}resume/">Resume</a><a href="${r}card/">Digital card</a><a href="${r}impressum/">Impressum</a></div><div><b>Contact</b><a href="mailto:islam@mydul.me">islam@mydul.me</a><a href="${r}card/">Save my contact</a></div></div></footer><button id="up" type="button" aria-label="Back to top">&uarr;</button>`);
/* dark / light mode */
const tm=D.getElementById('tm'),setT=t=>{D.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}tm.innerHTML=t=='dark'?'<i class="bi bi-sun-fill"></i>':'<i class="bi bi-moon-stars-fill"></i>';tm.title=tm.ariaLabel=t=='dark'?'Switch to light mode':'Switch to dark mode'};
let t0;try{t0=localStorage.getItem('theme')}catch(e){}
setT(t0||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
tm.onclick=()=>setT(D.documentElement.dataset.theme=='dark'?'light':'dark');
/* mobile menu */ const hd=D.querySelector('header>div'),nv=hd.querySelector('nav'),mn=D.createElement('button');mn.id='mn';mn.type='button';mn.setAttribute('aria-label','Menu');mn.setAttribute('aria-expanded','false');mn.innerHTML='<span></span><span></span><span></span>';hd.appendChild(mn);const mq=matchMedia('(max-width:760px)'),hdr=D.querySelector('header'),shut=()=>{hdr.classList.remove('open');mn.setAttribute('aria-expanded','false')},place=()=>{if(mq.matches)hd.insertBefore(tm,mn);else{nv.appendChild(tm);shut()}};place();mq.addEventListener?mq.addEventListener('change',place):mq.addListener(place);mn.onclick=()=>{const o=hdr.classList.toggle('open');mn.setAttribute('aria-expanded',o)};nv.addEventListener('click',e=>{if(e.target.closest('a'))shut()});addEventListener('keydown',e=>{if(e.key=='Escape')shut()});D.addEventListener('click',e=>{if(!hdr.contains(e.target))shut()});
/* back to top */
const up=D.getElementById('up');addEventListener('scroll',()=>up.classList.toggle('on',scrollY>400),{passive:true});up.onclick=()=>scrollTo({top:0,behavior:'smooth'});
/* previous / next post under each blog post */
if(D.querySelector('.prose')&&p.includes('/blog/')){const s=D.createElement('script');s.src=r+'blog/posts.js';
s.onload=()=>{const n=x=>x.replace(/\.html$/,''),k=n(p.slice(p.indexOf('/blog/')+6)),i=POSTS.findIndex(x=>n(x.u)===k);if(i<0)return;
const c=(x,l,cl)=>x?`<a class="card ${cl}" href="${r}blog/${x.u}"><span class="meta">${l}</span><h3>${x.t}</h3></a>`:'<span></span>';
D.querySelector('.prose').insertAdjacentHTML('afterend',`<nav class="pn" aria-label="More posts">${c(POSTS[i+1],'← Previous · older','pv')}${c(POSTS[i-1],'Next · newer →','nx')}</nav>`)};D.body.appendChild(s)}
})();
