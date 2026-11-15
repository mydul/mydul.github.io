(()=>{const r=document.body.dataset.root||'',p=location.pathname,
L=[['Home',''],['Blog','blog/'],['Projects','projects/'],['Tools','tools/'],['Card','card/'],['Resume','resume/']],
m=L.find(x=>x[1]&&p.includes('/'+x[1]))||L[0];
document.body.insertAdjacentHTML('afterbegin',`<header><div><a class="logo" href="${r}">Mydul Islam</a><nav>${L.map(x=>`<a href="${r}${x[1]}"${x===m?' class="on"':''}>${x[0]}</a>`).join('')}</nav></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><a href="https://www.linkedin.com/in/mydul/">LinkedIn</a><a href="https://github.com/mydul">GitHub</a><a href="https://scholar.google.com/citations?user=bWTmly8AAAAJ">Scholar</a><a href="mailto:islam@mydul.me">Email</a><p style="margin-top:10px">© ${new Date().getFullYear()} Mydul Islam · <a href="${r}impressum/">Impressum</a></p></footer>`);})();
