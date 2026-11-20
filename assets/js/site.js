(()=>{const D=document,r=D.body.dataset.root||'',p=location.pathname,
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
.fine{border-top:1px solid var(--line);padding-top:22px}
.tm{width:40px;height:40px;border-radius:50%;border:0;background:var(--card);color:var(--ink);font-size:17px;cursor:pointer;margin-left:6px;transition:.2s}
.tm:hover{background:var(--yellow);color:#16162a}
#up{position:fixed;right:22px;bottom:22px;width:48px;height:48px;border-radius:50%;border:0;background:var(--yellow);color:#16162a;font:700 22px/1 var(--sans);cursor:pointer;box-shadow:0 10px 26px rgba(22,22,42,.22);opacity:0;pointer-events:none;transform:translateY(10px);transition:.25s;z-index:20}
#up.on{opacity:1;pointer-events:auto;transform:none}#up:hover{background:var(--blue)}
.prose figure,.prose .wp-block-image{margin:28px auto;text-align:center}.prose img{display:block;max-width:100%;height:auto;margin:24px auto;border-radius:12px}.prose figure img{margin:0 auto}.prose figcaption{text-align:center;color:var(--mut);font-size:.9rem;margin-top:8px}
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
D.body.insertAdjacentHTML('afterbegin',`<header><div><a class="logo" href="${r}">Mydul Islam</a><nav>${L.map(x=>`<a href="${r}${x[1]}"${x===m?' class="on"':''}>${x[0]}</a>`).join('')}<a class="pill" href="${r}card/">Say hello 👋</a><button class="tm" id="tm" type="button"></button></nav></div></header>`);
D.body.insertAdjacentHTML('beforeend',`<footer><div class="fg"><div><a class="logo" href="${r}">Mydul Islam</a><div class="soc">${S.map(s=>`<a href="${s[0]}" target="_blank" rel="noopener noreferrer" aria-label="${s[1]}" title="${s[1]}">${s[2].startsWith('bi-')?`<i class="bi ${s[2]}"></i>`:s[2]}</a>`).join('')}</div></div><div><b>Explore</b><a href="${r}blog/">Blog</a><a href="${r}projects/">Projects</a><a href="${r}tools/">Tools</a></div><div><b>About</b><a href="${r}resume/">Resume</a><a href="${r}card/">Digital card</a><a href="${r}impressum/">Impressum</a></div><div><b>Contact</b><a href="mailto:islam@mydul.me">islam@mydul.me</a><a href="${r}card/">Save my contact</a></div></div><p class="fine">© ${new Date().getFullYear()} Mydul Islam. All rights reserved.</p></footer><button id="up" type="button" aria-label="Back to top">&uarr;</button>`);
/* dark / light mode */
const tm=D.getElementById('tm'),setT=t=>{D.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}tm.innerHTML=t=='dark'?'<i class="bi bi-sun-fill"></i>':'<i class="bi bi-moon-stars-fill"></i>';tm.title=tm.ariaLabel=t=='dark'?'Switch to light mode':'Switch to dark mode'};
let t0;try{t0=localStorage.getItem('theme')}catch(e){}
setT(t0||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
tm.onclick=()=>setT(D.documentElement.dataset.theme=='dark'?'light':'dark');
/* back to top */
const up=D.getElementById('up');addEventListener('scroll',()=>up.classList.toggle('on',scrollY>400),{passive:true});up.onclick=()=>scrollTo({top:0,behavior:'smooth'});
/* previous / next post under each blog post */
if(D.querySelector('.prose')&&p.includes('/blog/')){const s=D.createElement('script');s.src=r+'blog/posts.js';
s.onload=()=>{const n=x=>x.replace(/\.html$/,''),k=n(p.slice(p.indexOf('/blog/')+6)),i=POSTS.findIndex(x=>n(x.u)===k);if(i<0)return;
const c=(x,l,cl)=>x?`<a class="card ${cl}" href="${r}blog/${x.u}"><span class="meta">${l}</span><h3>${x.t}</h3></a>`:'<span></span>';
D.querySelector('.prose').insertAdjacentHTML('afterend',`<nav class="pn" aria-label="More posts">${c(POSTS[i+1],'← Previous · older','pv')}${c(POSTS[i-1],'Next · newer →','nx')}</nav>`)};D.body.appendChild(s)}
})();
