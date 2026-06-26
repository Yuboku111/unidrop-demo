import{r as i,j as e}from"./react-D2AdLFs5.js";import{e as v,L as A}from"./index-BXnDAY8b.js";const C={primary:"bg-primary text-primary-foreground hover:opacity-95 active:opacity-90",secondary:"bg-transparent text-primary border-[1.5px] border-primary hover:bg-primary/5",ghost:"bg-transparent text-foreground hover:bg-muted"},L={sm:"h-9 px-3.5 text-sm rounded-[10px] gap-1.5",md:"h-11 px-5 text-[15px] rounded-xl gap-2",lg:"h-13 px-7 text-base rounded-[14px] gap-2"},B=i.forwardRef(({variant:r="primary",size:n="md",fullWidth:t=!1,className:s,children:o,...d},p)=>e.jsx("button",{ref:p,className:v("inline-flex items-center justify-center font-semibold","transition-colors disabled:opacity-50 disabled:cursor-not-allowed","focus-visible:outline-none",C[r],L[n],t&&"w-full",s),...d,children:o}));B.displayName="V2Button";const D=i.forwardRef(({href:r,variant:n="primary",size:t="md",fullWidth:s=!1,className:o,children:d,...p},m)=>e.jsx(A,{ref:m,href:r,className:v("inline-flex items-center justify-center font-semibold","transition-colors focus-visible:outline-none",C[n],L[t],s&&"w-full",o),...p,children:d}));D.displayName="V2ButtonLink";const I=i.forwardRef(({bleed:r=!1,className:n,children:t,...s},o)=>e.jsx("div",{ref:o,className:v("rounded-[20px] border border-border bg-card v2-shadow-soft",!r&&"p-5",n),...s,children:t}));I.displayName="V2Card";const T=i.forwardRef(({imageUrl:r,overlay:n=!0,className:t,children:s,...o},d)=>e.jsxs("div",{ref:d,className:v("relative overflow-hidden rounded-[24px] border border-border v2-shadow-hero",r?"bg-muted":"bg-gradient-to-br from-accent via-muted to-primary/15",t),...o,children:[r&&e.jsx("img",{src:r,alt:"",className:"absolute inset-0 h-full w-full object-cover","aria-hidden":!0}),r&&n&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent","aria-hidden":!0}),e.jsx("div",{className:"relative",children:s})]}));T.displayName="V2CardHero";function H({icon:r,title:n,action:t,className:s,children:o,...d}){return e.jsxs("section",{className:v("rounded-[20px] border border-border bg-card v2-shadow-soft p-5",s),...d,children:[e.jsxs("header",{className:"flex items-center justify-between mb-3",children:[e.jsxs("h3",{className:"flex items-center gap-2 text-[15px] font-semibold text-foreground",children:[r&&e.jsx("span",{className:"text-primary",children:r}),n]}),t&&e.jsx("div",{className:"text-sm",children:t})]}),o]})}function N(r){const n=r.replace("#",""),t=n.length===3?n.split("").map(o=>o+o).join(""):n,s=parseInt(t,16);return Number.isNaN(s)?[217,102,24]:[s>>16&255,s>>8&255,s&255]}function x(r,n,t){const s=N(r),o=N(n),d=p=>Math.round(s[p]+(o[p]-s[p])*t).toString(16).padStart(2,"0");return`#${d(0)}${d(1)}${d(2)}`}const G=1350,Z=i.forwardRef(function({size:n=160,color:t="#d96618",autoPlay:s=!0,particleCount:o=14,onLanded:d,onOpened:p,className:m},M){const g=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[R,u]=i.useState(s&&!g?"falling":"idle"),[S,b]=i.useState(!1),[$,X]=i.useState(0),h=i.useRef([]),k=i.useRef(d),y=i.useRef(p);k.current=d,y.current=p;const w=()=>{for(const a of h.current)window.clearTimeout(a);h.current=[]};i.useEffect(()=>w,[]),i.useImperativeHandle(M,()=>({open:()=>{u(a=>{if(a==="opening"||a==="opened")return a;if(g){b(!0);const f=window.setTimeout(()=>y.current?.(),30);return h.current.push(f),"opened"}return h.current.push(window.setTimeout(()=>b(!0),430),window.setTimeout(()=>{u("opened"),y.current?.()},G)),"opening"})},replay:()=>{w(),b(!1),X(a=>a+1),u(g?"idle":"falling")}}));const z=a=>{a.animationName==="env2d-fall"&&u(f=>f!=="falling"?f:(k.current?.(),"idle"))},V=i.useMemo(()=>Array.from({length:o},()=>({left:6+Math.random()*88,size:2+Math.random()*3.5,duration:3.2+Math.random()*3.4,delay:-Math.random()*7,drift:(Math.random()-.5)*18})),[o]),j=a=>`${a/200*n}px`,l=i.useMemo(()=>({base:t,light:x(t,"#ffd9a0",.3),lighter:x(t,"#ffedd0",.55),dark:x(t,"#5a2508",.3),deep:x(t,"#3a1604",.46)}),[t]),E=i.useId().replace(/[^a-zA-Z0-9]/g,""),c=a=>`env2d-${a}-${E}`;return e.jsxs("div",{className:m?`env2d ${m}`:"env2d",style:{width:n,height:n,"--env":t},"data-phase":R,role:"img","aria-label":"金色の封筒が舞い降りるアニメーション",children:[e.jsx("style",{children:Q}),e.jsx("div",{className:"env2d-halo","aria-hidden":!0}),e.jsxs("svg",{className:"env2d-streaks",viewBox:"0 0 200 200",fill:"none","aria-hidden":!0,children:[e.jsx("path",{className:"env2d-streak s1",d:"M138 8 C 120 52, 152 78, 132 122"}),e.jsx("path",{className:"env2d-streak s2",d:"M62 2 C 84 40, 48 70, 66 108"}),e.jsx("path",{className:"env2d-streak s3",d:"M170 36 C 150 66, 176 92, 158 128"}),e.jsx("path",{className:"env2d-streak s4",d:"M30 30 C 46 60, 22 86, 40 118"})]}),e.jsx("div",{className:"env2d-dust","aria-hidden":!0,children:V.map((a,f)=>e.jsx("span",{className:"env2d-mote",style:{left:`${a.left}%`,width:j(a.size),height:j(a.size),animationDuration:`${a.duration}s, ${a.duration*.62}s`,animationDelay:`${a.delay}s, ${a.delay*.8}s`,"--drift":`${a.drift}px`}},f))}),e.jsx("div",{className:"env2d-ground","aria-hidden":!0}),e.jsx("div",{className:"env2d-ring","aria-hidden":!0}),e.jsx("div",{className:"env2d-fall",onAnimationEnd:z,children:e.jsx("div",{className:"env2d-tilt",children:e.jsxs("div",{className:"env2d-envelope","data-flap-behind":S,children:[e.jsxs("svg",{className:"env2d-back",viewBox:"0 0 100 69",preserveAspectRatio:"none","aria-hidden":!0,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:c("bg"),x1:"0",y1:"0",x2:"0.7",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:l.light}),e.jsx("stop",{offset:"0.5",stopColor:l.base}),e.jsx("stop",{offset:"1",stopColor:l.dark})]})}),e.jsx("rect",{x:"0.6",y:"0.6",width:"98.8",height:"67.8",rx:"7",fill:`url(#${c("bg")})`,stroke:"rgba(255,236,210,0.4)",strokeWidth:"0.8"})]}),e.jsxs("div",{className:"env2d-letter",children:[e.jsx("span",{className:"env2d-line w1"}),e.jsx("span",{className:"env2d-line w2"}),e.jsx("span",{className:"env2d-line w3"})]}),e.jsxs("svg",{className:"env2d-pocket",viewBox:"0 0 100 69",preserveAspectRatio:"none","aria-hidden":!0,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:c("pg"),x1:"0.1",y1:"0",x2:"0.8",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:l.light}),e.jsx("stop",{offset:"0.45",stopColor:l.base}),e.jsx("stop",{offset:"1",stopColor:l.dark})]})}),e.jsx("path",{d:`M 3.4 2.4 L 48.6 37.6 Q 50 38.7 51.4 37.6 L 96.6 2.4
                   Q 99.4 4.4 99.4 8 L 99.4 61.4 Q 99.4 68.4 92.4 68.4
                   L 7.6 68.4 Q 0.6 68.4 0.6 61.4 L 0.6 8 Q 0.6 4.4 3.4 2.4 Z`,fill:`url(#${c("pg")})`}),e.jsx("path",{d:"M 3.4 3.6 L 50 39.8 L 96.6 3.6",fill:"none",stroke:"rgba(70,30,5,0.16)",strokeWidth:"1.6",strokeLinecap:"round"}),e.jsx("path",{d:"M 3.4 2.4 L 50 38.7 L 96.6 2.4",fill:"none",stroke:"rgba(255,242,222,0.5)",strokeWidth:"0.9",strokeLinecap:"round"}),e.jsx("path",{d:"M 7 67.2 L 93 67.2",fill:"none",stroke:"rgba(70,30,5,0.2)",strokeWidth:"1",strokeLinecap:"round"})]}),e.jsx("div",{className:"env2d-flap",children:e.jsxs("svg",{viewBox:"0 0 100 43",preserveAspectRatio:"none","aria-hidden":!0,children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:c("fg"),x1:"0.2",y1:"0",x2:"0.7",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:l.lighter}),e.jsx("stop",{offset:"0.55",stopColor:l.light}),e.jsx("stop",{offset:"1",stopColor:l.base})]}),e.jsxs("radialGradient",{id:c("sg"),cx:"0.38",cy:"0.32",r:"0.85",children:[e.jsx("stop",{offset:"0",stopColor:l.light}),e.jsx("stop",{offset:"1",stopColor:l.deep})]})]}),e.jsx("path",{d:"M 5.4 0 L 94.6 0 L 53 37.8 Q 50 40.4 47 37.8 Z",fill:`url(#${c("fg")})`,stroke:"rgba(255,242,222,0.45)",strokeWidth:"0.9"}),e.jsx("circle",{cx:"50",cy:"35.2",r:"4.1",fill:`url(#${c("sg")})`}),e.jsx("ellipse",{cx:"48.5",cy:"33.7",rx:"1.3",ry:"0.9",fill:"rgba(255,255,255,0.5)"})]})}),e.jsx("div",{className:"env2d-sheen"})]})})})]},$)}),Q=`
.env2d {
  position: relative;
  overflow: visible;
  --env-light: color-mix(in srgb, var(--env), #ffd9a0 30%);
  --env-lighter: color-mix(in srgb, var(--env), #ffe9c8 52%);
  --env-dark: color-mix(in srgb, var(--env), #5a2508 28%);
  --env-glow: color-mix(in srgb, var(--env), #ffb45e 55%);
}

/* ─── 後光 ─── */
.env2d-halo {
  position: absolute;
  inset: -12%;
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    color-mix(in srgb, var(--env-glow), transparent 26%),
    color-mix(in srgb, var(--env-glow), transparent 72%) 46%,
    transparent 75%
  );
  opacity: 0;
  animation: env2d-halo-in 2.4s ease-out forwards,
    env2d-halo-pulse 3.6s ease-in-out 2.4s infinite;
}
.env2d[data-phase="opening"] .env2d-halo,
.env2d[data-phase="opened"] .env2d-halo {
  animation: env2d-halo-pulse 2.2s ease-in-out infinite;
  opacity: 0.95;
}
@keyframes env2d-halo-in {
  from { opacity: 0; transform: scale(0.82); }
  to { opacity: 0.8; transform: scale(1); }
}
@keyframes env2d-halo-pulse {
  0%, 100% { opacity: 0.74; transform: scale(0.97); }
  50% { opacity: 0.92; transform: scale(1.04); }
}

/* ─── 流線 ─── */
.env2d-streaks {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.env2d[data-phase="falling"] .env2d-streaks { opacity: 1; }
.env2d-streak {
  stroke: color-mix(in srgb, var(--env-light), transparent 30%);
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-dasharray: 60 200;
  stroke-dashoffset: 60;
  animation: env2d-streak 2.4s cubic-bezier(0.3, 0.6, 0.3, 1) forwards;
}
.env2d-streak.s2 { stroke-width: 1.8; animation-delay: 0.12s; }
.env2d-streak.s3 { stroke-width: 1.6; animation-delay: 0.26s; }
.env2d-streak.s4 { stroke-width: 1.4; animation-delay: 0.4s; }
@keyframes env2d-streak {
  0% { stroke-dashoffset: 60; opacity: 0; }
  18% { opacity: 0.9; }
  62% { opacity: 0.5; }
  100% { stroke-dashoffset: -210; opacity: 0; }
}

/* ─── 金色の塵 ─── */
.env2d-dust { position: absolute; inset: 0; }
.env2d-mote {
  position: absolute;
  bottom: 6%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    #ffe9bd 0%,
    color-mix(in srgb, var(--env-light), transparent 8%) 55%,
    transparent 78%
  );
  opacity: 0;
  animation-name: env2d-rise, env2d-twinkle;
  animation-timing-function: linear, ease-in-out;
  animation-iteration-count: infinite, infinite;
}
@keyframes env2d-rise {
  0% { transform: translate(0, 0); }
  100% { transform: translate(var(--drift, 0px), -130px); }
}
@keyframes env2d-twinkle {
  0%, 100% { opacity: 0; }
  35% { opacity: 0.95; }
  60% { opacity: 0.45; }
}

/* ─── 足元の光だまり ─── */
.env2d-ground {
  position: absolute;
  left: 50%;
  bottom: 9%;
  width: 62%;
  height: 9%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(
    closest-side,
    color-mix(in srgb, var(--env), transparent 55%),
    transparent 78%
  );
  opacity: 0;
  animation: env2d-ground-in 2.4s ease-out forwards,
    env2d-ground-pulse 3.4s ease-in-out 2.4s infinite;
}
@keyframes env2d-ground-in {
  0%, 45% { opacity: 0; transform: translateX(-50%) scaleX(0.6); }
  100% { opacity: 0.65; transform: translateX(-50%) scaleX(1); }
}
@keyframes env2d-ground-pulse {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(0.96); }
  50% { opacity: 0.72; transform: translateX(-50%) scaleX(1.05); }
}

/* ─── 降下と浮遊 ─── */
.env2d-fall {
  position: absolute;
  inset: 0;
  animation: env2d-fall 2.4s cubic-bezier(0.18, 0.72, 0.22, 1) forwards;
}
.env2d[data-phase="idle"] .env2d-fall {
  animation: env2d-bob 3.6s ease-in-out infinite;
}
.env2d[data-phase="opening"] .env2d-fall,
.env2d[data-phase="opened"] .env2d-fall {
  animation: env2d-bob 4.6s ease-in-out infinite;
}
@keyframes env2d-fall {
  0% { transform: translateY(-118%); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes env2d-bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3.5%); }
}

.env2d-tilt {
  position: absolute;
  inset: 0;
  animation: env2d-sway-fall 2.4s cubic-bezier(0.3, 0.55, 0.3, 1) forwards;
}
.env2d[data-phase="idle"] .env2d-tilt,
.env2d[data-phase="opening"] .env2d-tilt,
.env2d[data-phase="opened"] .env2d-tilt {
  animation: env2d-sway-idle 5.2s ease-in-out infinite;
}
@keyframes env2d-sway-fall {
  0% { transform: rotate(-10deg) translateX(-5%); }
  38% { transform: rotate(6deg) translateX(3%); }
  72% { transform: rotate(-3deg) translateX(-1.4%); }
  100% { transform: rotate(0deg) translateX(0); }
}
@keyframes env2d-sway-idle {
  0%, 100% { transform: rotate(-1.6deg); }
  50% { transform: rotate(1.8deg); }
}

/* ─── 封筒本体 (描画はすべて SVG パス: 拡大してもエッジが破綻しない) ─── */
.env2d-envelope {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 58%;
  height: 40%;
  transform: translate(-50%, -54%) rotate(-5deg);
  perspective: 420px;
  filter: drop-shadow(0 10px 18px color-mix(in srgb, var(--env-dark), transparent 58%));
}
.env2d-back,
.env2d-pocket {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.env2d-back { z-index: 1; }
.env2d-pocket { z-index: 3; }

/* 中の手紙: ポケットの後ろからせり上がる */
.env2d-letter {
  position: absolute;
  left: 8%;
  right: 8%;
  top: 5%;
  bottom: 9%;
  border-radius: 8%/11%;
  background: linear-gradient(175deg, #fffdf8, #f6ead9);
  box-shadow: 0 1px 3px rgba(90, 50, 20, 0.2);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 9%;
  padding: 13% 12% 0;
  transform: translateY(4%);
  /* わずかにオーバーシュートしてから収まる */
  transition: transform 1s cubic-bezier(0.22, 1.12, 0.32, 1) 0.32s;
}
.env2d[data-phase="opening"] .env2d-letter,
.env2d[data-phase="opened"] .env2d-letter {
  transform: translateY(-72%);
}
.env2d-line {
  display: block;
  height: 5%;
  min-height: 2px;
  border-radius: 999px;
  background: #e7dccd;
}
.env2d-line.w1 { width: 76%; }
.env2d-line.w2 { width: 90%; }
.env2d-line.w3 { width: 56%; }

/* フラップ: 本体上辺を軸に裏返って開く (中身は SVG) */
.env2d-flap {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 62.3%;
  transform-origin: 50% 0%;
  transform: rotateX(0deg);
  transition: transform 0.95s cubic-bezier(0.34, 1.2, 0.36, 1);
  z-index: 4;
}
.env2d-flap svg {
  display: block;
  width: 100%;
  height: 100%;
}
.env2d-envelope[data-flap-behind="true"] .env2d-flap { z-index: 1; }
.env2d[data-phase="opening"] .env2d-flap,
.env2d[data-phase="opened"] .env2d-flap {
  transform: rotateX(176deg);
}

/* 表面の艶 (静かな光沢を1枚だけ、ごく控えめに) */
.env2d-sheen {
  position: absolute;
  inset: 0;
  border-radius: 9%/13%;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(
    118deg,
    transparent 38%,
    rgba(255, 247, 235, 0.22) 47%,
    rgba(255, 247, 235, 0.05) 55%,
    transparent 62%
  );
}

/* ─── 開封の瞬間の光の輪 ─── */
.env2d-ring {
  position: absolute;
  left: 50%;
  top: 46%;
  width: 66%;
  aspect-ratio: 1;
  margin: -33% 0 0 -33%;
  border-radius: 50%;
  border: 2px solid color-mix(in srgb, var(--env-light), transparent 25%);
  opacity: 0;
  pointer-events: none;
}
.env2d[data-phase="opening"] .env2d-ring {
  animation: env2d-ring 0.9s cubic-bezier(0.2, 0.6, 0.3, 1) forwards;
}
@keyframes env2d-ring {
  0% { opacity: 0.65; transform: scale(0.45); }
  100% { opacity: 0; transform: scale(1.45); }
}

/* ─── reduced motion ─── */
@media (prefers-reduced-motion: reduce) {
  .env2d *, .env2d { animation: none !important; transition: none !important; }
  .env2d .env2d-halo { opacity: 0.8; }
  .env2d .env2d-ground { opacity: 0.6; }
  .env2d .env2d-streaks { opacity: 0; }
  .env2d .env2d-mote { opacity: 0; }
}
`;export{Z as E,D as V,B as a,T as b,I as c,H as d};
