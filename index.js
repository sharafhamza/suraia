/* =====================================================================
   EDIT HERE: all photographs, titles, captions and personal details.
   Put image files in the images/ folders and set "src" to their path.
   Leave "src" empty (or the file missing) and a placeholder is shown.
   ===================================================================== */
const SITE = {
  university: "",      // e.g. "University of Dhaka"  (hidden until filled)
  graduationYear: "",  // e.g. "2024"                 (hidden until filled)
  degree: "English Literature",

  heroPortrait:  { src: "images/sidechick/img1.jpg",   alt: "Portrait of Suraia Sharaf" },
  aboutPortrait: { src: "images/sidechick/img2.jpg", alt: "Suraia Sharaf, relaxed and smiling" },

  // Book covers: add or remove lines freely. Favourite books and authors are built from this list.
  books: [
    { src: "images/books/janeaustin.png", title: "Pride And Prejudice", author: "Jane Austen" },
    { src: "images/books/georgeorwell.png", title: "Animal Farm", author: "George Orwell" },
    { src: "images/books/emfroster.png", title: "A message to India", author: "E.M Froster" },
    { src: "images/books/markmanson.png", title: "Not giving a fuck", author: "Mark Manson" },
    { src: "images/books/hankang.png", title: "The Vegetarian", author: "Han Kang" },
    { src: "images/books/syed.png", title: "Tree Without Roots", author: "Syed Waliullah" }
  ],

  // Drawings: first one is the large featured piece.
  art: [
    { src: "images/art/img6.png", alt: "Featured drawing", title: "Meta Verse in her eyes", caption: "", ratio: "5/4" },
    { src: "images/art/favone.png", alt: "Sketch", title: "One of her favourites", caption: "", ratio: "3/4" },
    { src: "images/art/img3.png", alt: "Sketch", title: "Incomplete LightHouse", caption: "", ratio: "1/1" },
    { src: "images/art/img2.png", alt: "Sketch", title: "Puran Dhaka", caption: "", ratio: "4/5" },
    { src: "images/art/img4.png", alt: "Sketch", title: "Dublin", caption: "", ratio: "2/3" },
    { src: "images/art/img7.png", alt: "Sketch", title: "Inner Soul", caption: "", ratio: "2/3" },
    { src: "images/art/img8.png", alt: "Sketch", title: "A girl", caption: "", ratio: "4/5" }
  ],

  // Nature gallery: laid out as a woodland mosaic, 8 photos fit the pattern best.
  nature: [
    { src: "images/sidechick/tree5.jpg", alt: "Tall trees", caption: "" },
    { src: "images/sidechick/tree3.jpg", alt: "Forest path", caption: "" },
    { src: "images/sidechick/tree1.jpg", alt: "Green leaves", caption: "" },
    { src: "images/sidechick/tree2.jpg", alt: "A single tree", caption: "" },
    { src: "images/sidechick/tree2.jpg", alt: "Light through branches", caption: "" }
  ],
  quotes: [
    { text: "A tree does not hurry, and still it holds the whole sky.", by: "" },
    { text: "Where the leaves are loudest, the heart is quietest.", by: "" },
    { text: "Give her a book, a pencil and a shady branch, and the day is already beautiful.", by: "" }
  ],

  // Random photos: ratio = width/height as "w/h"; style: "polaroid" | "bare" | "tape"; caption optional (handwritten).
  random: [
    { src: "images/random/img1.jpg", alt: "Suraia smiling",          ratio: "4/5", style: "polaroid", caption: "a good day" },
    { src: "images/random/img2.jpg", alt: "A landscape moment",      ratio: "4/3", style: "bare" },
    { src: "images/random/img3.jpg", alt: "A square snapshot",       ratio: "1/1", style: "polaroid tape", caption: "" },
    { src: "images/random/img4.jpg", alt: "A tall portrait photo",   ratio: "2/3", style: "bare", caption: "" },
    { src: "images/random/joy.jpg", alt: "Snapshot with friends",   ratio: "1/1", style: "polaroid", caption: "little joys" },
    { src: "images/random/img6.jpg", alt: "A wide scene",            ratio: "3/2", style: "polaroid tape", caption: "" },
    { src: "images/random/img7.jpg", alt: "A portrait photo",        ratio: "3/4", style: "polaroid", caption: "" },
    { src: "images/random/img8.jpg", alt: "A candid photo",          ratio: "4/5", style: "bare", caption: "remember this" },
    { src: "images/random/img9.jpg", alt: "A square photo",          ratio: "1/1", style: "polaroid", caption: "" },
    { src: "images/random/img10.jpg", alt: "A landscape photo",       ratio: "16/10", style: "polaroid tape", caption: "somewhere green" },
    { src: "images/random/img11.jpg", alt: "A tall photo",            ratio: "3/5", style: "bare", caption: "" },
    { src: "images/random/img12.jpg", alt: "Another snapshot",        ratio: "1/1", style: "polaroid", caption: "" }
  ],

  // About-her facts and personal qualities: edit freely, add or remove.
  interests: ["Reading books", "Drawing & sketching", "Trees & greenery"],
  traits: [
    { title: "Straightforward", text: "Suraia says what she means. She is honest and direct, and people always know where they stand with her." },
    { title: "Understanding",   text: "She listens before she judges, and tries to see a problem the way the other person sees it." },
    { title: "Unselfish",       text: "She has little patience for selfishness. She values people who think of others as well as themselves." }
  ]
};
/* ===================== end of editable content ===================== */


const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=t=>String(t??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const TONES=["#cfd9d0","#e6cfcb","#e7dcc1","#c5d3cb","#d9c9b5"];
function placeholder(label,i=0,ratio="1/1"){
  const [w,h]=ratio.split("/").map(Number),W=600,H=Math.round(600*h/w),c=TONES[i%TONES.length];
  const svg=`<svg xmlns='http://www.w3.org/2000/svg' width='${W}' height='${H}' viewBox='0 0 ${W} ${H}'><rect width='100%' height='100%' fill='${c}'/><g fill='none' stroke='#173F35' stroke-opacity='.45' stroke-width='2' stroke-linecap='round' transform='translate(${W/2-30} ${H/2-60}) scale(.6)'><path d='M50 158C48 110 52 60 50 6'/><path d='M50 128C30 124 18 108 16 88c22 2 34 18 34 40zM50 100c20-4 32-20 34-40-22 2-34 18-34 40zM50 72C32 68 22 54 20 36c20 2 30 16 30 36z'/></g><text x='50%' y='${H-26}' text-anchor='middle' font-family='Georgia,serif' font-style='italic' font-size='20' fill='#173F35' fill-opacity='.6'>${label.replace(/[<&>']/g,'')}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
/* One image element with graceful fallback. */
/* Optimised copies (made by optimize-images.py) are used when they exist; originals are the fallback. */
const opt=(src,kind)=>src?"optimized/"+kind+"/"+src.replace(/^images\//,"").replace(/\.[^./]+$/,".webp"):"";
function fillPic(el,item,i=0,ratio="1/1"){
  const img=new Image(); img.alt=item.alt||item.title||""; img.loading=item.eager?"eager":"lazy"; img.decoding="async";
  if(item.eager)img.fetchPriority="high";
  const fb=placeholder(item.alt||"Photo to come",i,ratio),tries=[opt(item.src,"thumb"),item.src,fb].filter(Boolean);let k=0;
  img.onload=()=>img.classList.add("ok");
  img.onerror=()=>{if(++k<tries.length)img.src=tries[k];else img.onerror=null};
  img.src=tries[0]; el.appendChild(img);
  el.dataset.i=i;
}
const groups={};
function register(group,items,i){ (groups[group]=groups[group]||[])[i]=items[i]; }
function makePic(tag,group,items,i,ratio,cls=""){
  const b=document.createElement(tag); b.className="pic "+cls; if(tag==="button") b.type="button";
  b.setAttribute("aria-label","Open image: "+(items[i].alt||items[i].title||"photo"));
  if(ratio) b.style.aspectRatio=ratio;
  fillPic(b,items[i],i,ratio||"1/1"); b.dataset.group=group; b.dataset.idx=i; register(group,items,i);
  return b;
}

/* ---------- build ---------- */
const hero=$('[data-slot=hero]'),about=$('[data-slot=about]');
[[hero,SITE.heroPortrait,"hero","Portrait coming soon","3/4"],[about,SITE.aboutPortrait,"about","Portrait coming soon","4/5"]].forEach(([el,it,g,l,r])=>{
  it.alt=it.alt||l; it.eager=(g==="hero"); fillPic(el,it,0,r); el.dataset.group=g; el.dataset.idx=0; register(g,[it],0); el.setAttribute("role","button"); el.tabIndex=0; el.setAttribute("aria-label","Open image: "+it.alt);
});
// facts
{const f=[["Studied",SITE.degree],["University",SITE.university],["Graduated",SITE.graduationYear],["Loves",SITE.interests.join(", ")]];
 $('#facts').innerHTML=f.map(([k,v])=>`<li ${v?"":"hidden"}><b>${k}</b><span>${esc(v)}</span></li>`).join("");}
// books
SITE.books.forEach((b,i)=>{b.eager=true;const d=document.createElement("div");d.className="book";d.setAttribute("role","listitem");
 d.appendChild(makePic("button","books",SITE.books,i,"2/3"));d.insertAdjacentHTML("beforeend",`<h3>${esc(b.title)}</h3><small>${esc(b.author)}</small>`);$('#books').appendChild(d);
 b.alt=`Cover of ${b.title||"a favourite book"}`;b.caption=[b.title,b.author].filter(Boolean).join(", ");
 d.querySelector("img").alt=b.alt;});
{const real=SITE.books.filter(b=>b.title&&!/^book title$/i.test(b.title.trim()));
 $('#favBooks').innerHTML=real.map(b=>`<li>${esc(b.title)}<span>${esc(b.author)}</span></li>`).join("")||"<li>Add titles in the books list</li>";
 const by={};SITE.books.forEach(b=>{const a=(b.author||"").trim();if(a&&!/^author$/i.test(a))(by[a]=by[a]||[]).push(...(real.includes(b)?[b.title]:[]))});
 $('#favAuthors').innerHTML=Object.entries(by).map(([a,t])=>`<li>${esc(a)}<span>${esc(t.join(", "))}</span></li>`).join("")||"<li>Add authors in the books list</li>";}
// book slider
{const sh=$('#books'),pv=$('#slPrev'),nx=$('#slNext'),pg=$('#slPg');
 const per=()=>innerWidth<=820?2:4,pages=()=>Math.max(1,Math.ceil(SITE.books.length/per()));
 const upd=()=>{const w=sh.clientWidth,p=Math.min(pages(),Math.round(sh.scrollLeft/(w+parseFloat(getComputedStyle(sh).columnGap||0)))+1);
  pg.textContent=p+" / "+pages();pv.disabled=sh.scrollLeft<4;nx.disabled=sh.scrollLeft+w>=sh.scrollWidth-4;
  const hide=SITE.books.length<=per();$('.sl-ctl').hidden=hide};
 const go=d=>sh.scrollBy({left:d*(sh.clientWidth+parseFloat(getComputedStyle(sh).columnGap||0)),behavior:"smooth"});
 pv.onclick=()=>go(-1);nx.onclick=()=>go(1);sh.addEventListener("scroll",upd,{passive:true});addEventListener("resize",upd);upd();}
// art
{const [a,...rest]=SITE.art;
 $('#artFeature').appendChild(makePic("button","art",SITE.art,0,a.ratio||"5/4"));
 $('#artFeature').insertAdjacentHTML("beforeend",`<figcaption>${esc(a.title)}<span style="display:block;font:300 .85rem var(--sans);color:var(--gold-d)">${esc(a.caption)}</span></figcaption>`);
 SITE.art.slice(1).forEach((r,k)=>{const i=k+1,f=document.createElement("figure");f.appendChild(makePic("button","art",SITE.art,i,r.ratio));
  f.insertAdjacentHTML("beforeend",`<figcaption>${esc(r.title)}<span>${esc(r.caption)}</span></figcaption>`);$('#artGrid').appendChild(f)});}
// nature
SITE.nature.forEach((n,i)=>{const f=document.createElement("figure");f.appendChild(makePic("button","nature",SITE.nature,i,null));
 if(n.caption)f.insertAdjacentHTML("beforeend",`<figcaption>${esc(n.caption)}</figcaption>`);$('#forest').appendChild(f)});
$('#quotes').innerHTML=SITE.quotes.map(q=>`<blockquote>“${esc(q.text)}”${q.by?`<cite>${esc(q.by)}</cite>`:""}</blockquote>`).join("");
// random
const rot=[-2.2,1.6,-.8,2.4,-1.5,.9,-2.6,1.2];
SITE.random.forEach((p,i)=>{const f=document.createElement("figure");f.className="polaroid "+(p.style||"polaroid");
 f.style.setProperty("--r",rot[i%rot.length]+"deg");f.style.setProperty("--y",(i%3)*4+"px");f.style.setProperty("--ar",p.ratio||"1/1");
 f.appendChild(makePic("button","random",SITE.random,i,p.ratio||"1/1"));
 if(p.caption)f.insertAdjacentHTML("beforeend",`<figcaption>${esc(p.caption)}</figcaption>`);$('#random').appendChild(f)});
// traits
$('#traits').innerHTML=SITE.traits.map(t=>`<div class="trait"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join("");
$('#yr').textContent="© "+new Date().getFullYear();

/* ---------- lightbox (shared by every gallery) ---------- */
const lb=$('#lb'),lbImg=$('img',lb),lbCap=$('figcaption',lb),lbCt=$('.ct',lb);
let cur={g:null,i:0},opener=null,sx=0;
let tok=0;
function show(){const L=groups[cur.g],it=L[cur.i],t=++tok,n=L.length;
 lbCap.textContent=it.caption||it.title||"";lbCt.textContent=(cur.i+1)+" / "+n;
 $('.p',lb).hidden=$('.n',lb).hidden=n<2;
 lbImg.classList.remove("ready");
 const pre=new Image(),fin=()=>{if(t!==tok)return;lbImg.alt=it.alt||it.title||"";lbImg.src=pre.src;lbImg.classList.add("ready")};
 pre.onload=()=>(pre.decode?pre.decode().catch(()=>{}):Promise.resolve()).then(fin);
 const c=[opt(it.src,"full"),it.src,placeholder(it.alt||"Photo",cur.i)].filter(Boolean);let k=0;
 pre.onerror=()=>{if(++k<c.length)pre.src=c[k]};
 pre.src=c[0];
 [1,-1].forEach(d=>{const o=L[(cur.i+d+n)%n];if(o&&o.src)new Image().src=opt(o.src,"full")});}
function open(g,i,from){cur={g,i};opener=from;lb.hidden=false;lb.classList.add("open");document.body.style.overflow="hidden";show();$('.x',lb).focus()}
function close(){lb.classList.remove("open");lb.hidden=true;document.body.style.overflow="";opener&&opener.focus()}
function step(d){const n=groups[cur.g].length;cur.i=(cur.i+d+n)%n;show()}
document.addEventListener("click",e=>{const p=e.target.closest(".pic[data-group]");if(p)open(p.dataset.group,+p.dataset.idx,p)});
document.addEventListener("keydown",e=>{
 if(!lb.classList.contains("open")){const p=e.target.closest&&e.target.closest(".pic[role=button]");if(p&&(e.key==="Enter"||e.key===" ")){e.preventDefault();p.click()}return}
 if(e.key==="Escape")close();else if(e.key==="ArrowLeft")step(-1);else if(e.key==="ArrowRight")step(1)});
$('.x',lb).onclick=close;$('.p',lb).onclick=()=>step(-1);$('.n',lb).onclick=()=>step(1);
lb.addEventListener("click",e=>{if(e.target===lb||e.target.tagName==="FIGURE")close()});
lb.addEventListener("touchstart",e=>{sx=e.changedTouches[0].clientX},{passive:true});
lb.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)step(d>0?-1:1)});

/* ---------- nav + reveal ---------- */
const burger=$('.burger'),links=$('#links');
burger.onclick=()=>{const o=links.classList.toggle("open");burger.setAttribute("aria-expanded",o)};
$$('#links a').forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");burger.setAttribute("aria-expanded",false)}));
const secs=$$("main section[id]"),navA=$$('#links a');
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)navA.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe&&secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)navA.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+s.id))}),{rootMargin:"-45% 0px -50% 0px"}).observe(s));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.01,rootMargin:"0px 0px 12% 0px"});
$$(".reveal").forEach(el=>io.observe(el));
/* staggered entrance for items inside grids */
const stg=(sel,step,mod)=>$$(sel).forEach((el,i)=>{el.classList.add("pop");el.style.setProperty("--d",(i%mod)*step+"ms");io.observe(el)});
$$(".book").forEach((el,i)=>el.style.setProperty("--i",i%4));stg("#artGrid figure",90,3);stg("#forest figure",80,4);stg("#random figure",90,4);stg(".trait",130,3);stg("#quotes blockquote",150,3);
/* scroll progress + nav shadow */
{const bar=$("#bar"),nv=$("nav");let t=false;
 const f=()=>{t=false;const h=document.documentElement,m=h.scrollHeight-h.clientHeight;bar.style.transform="scaleX("+(m>0?h.scrollTop/m:0)+")";nv.classList.toggle("scrolled",h.scrollTop>10)};
 addEventListener("scroll",()=>{if(!t){t=true;requestAnimationFrame(f)}},{passive:true});f();}
