const QS={
  Arithmetic:[
    {q:"What is 7 × 8?",opts:["54","56","58","62"],ans:"56",hint:"7×7=49, add 7 more",exp:"7×8=56. Think (7×10)−(7×2)=70−14=56."},
    {q:"What is 144 ÷ 12?",opts:["11","12","13","14"],ans:"12",hint:"12×12=144",exp:"144÷12=12 because 12×12=144."},
    {q:"What is 25% of 200?",opts:["25","40","50","60"],ans:"50",hint:"25%=1/4",exp:"200×0.25=50."},
    {q:"3/4 as a decimal?",opts:["0.65","0.70","0.75","0.80"],ans:"0.75",hint:"Divide 3 by 4",exp:"3÷4=0.75"},
    {q:"What is 2³?",opts:["6","8","9","12"],ans:"8",hint:"2×2×2",exp:"2³=2×2×2=8"},
    {q:"Round 3.746 to the nearest tenth.",opts:["3.7","3.74","3.8","4.0"],ans:"3.7",hint:"Look at hundredths digit",exp:"Hundredths=4 (less than 5), round down to 3.7"}
  ],
  Algebra:[
    {q:"Solve: 3x − 7 = 14",opts:["5","6","7","8"],ans:"7",hint:"Add 7 to both sides",exp:"3x=21, so x=7"},
    {q:"If x + 5 = 13, what is x?",opts:["6","7","8","9"],ans:"8",hint:"Subtract 5 from both sides",exp:"x=13−5=8"},
    {q:"Slope of y = 3x + 7?",opts:["7","3","3/7","0"],ans:"3",hint:"In y=mx+b, m is slope",exp:"m=3 in y=3x+7"},
    {q:"Simplify: (x²)(x³)",opts:["x⁵","x⁶","2x⁵","x⁷"],ans:"x⁵",hint:"Add exponents",exp:"x^(2+3)=x⁵"},
    {q:"Roots of x² − 5x + 6 = 0?",opts:["1 and 6","2 and 3","-2 and -3","3 and 4"],ans:"2 and 3",hint:"Factor: two numbers that multiply to 6 and add to −5",exp:"(x−2)(x−3)=0, so x=2 or x=3"},
    {q:"Solve 2^(x+1) = 32",opts:["3","4","5","6"],ans:"4",hint:"32=2⁵",exp:"x+1=5, so x=4"}
  ],
  Geometry:[
    {q:"Triangle angles: 60° and 80°. Third?",opts:["30°","40°","50°","60°"],ans:"40°",hint:"Sum=180°",exp:"180−60−80=40°"},
    {q:"Area of circle, radius 5? (π≈3.14)",opts:["15.7","31.4","78.5","157"],ans:"78.5",hint:"A=πr²",exp:"π×25=78.5"},
    {q:"Hypotenuse with legs 6 and 8?",opts:["9","10","11","12"],ans:"10",hint:"a²+b²=c²",exp:"36+64=100=10²"},
    {q:"Area of 8×5 rectangle?",opts:["30","35","40","45"],ans:"40",hint:"A=l×w",exp:"8×5=40cm²"},
    {q:"Perimeter of square, side 7cm?",opts:["21","28","35","49"],ans:"28",hint:"P=4×side",exp:"4×7=28cm"}
  ],
  Fractions:[
    {q:"2/3 + 3/4 = ?",opts:["5/7","17/12","5/12","7/12"],ans:"17/12",hint:"Common denominator=12",exp:"8/12+9/12=17/12"},
    {q:"3/4 − 1/3 = ?",opts:["5/12","2/3","7/12","1/4"],ans:"5/12",hint:"Common denominator=12",exp:"9/12−4/12=5/12"},
    {q:"Simplify 18/24",opts:["2/3","3/4","5/6","7/8"],ans:"3/4",hint:"GCF=6",exp:"18÷6=3, 24÷6=4, so 3/4"}
  ],
  Statistics:[
    {q:"Median of: 3, 7, 2, 9, 5",opts:["3","5","6","7"],ans:"5",hint:"Sort first",exp:"Sorted: 2,3,5,7,9 — middle=5"},
    {q:"Mean of: 4, 8, 6, 10, 2",opts:["5","6","7","8"],ans:"6",hint:"Sum÷count",exp:"30÷5=6"},
    {q:"Mode of: 4,5,4,6,7,4,5",opts:["4","5","6","7"],ans:"4",hint:"Most frequent",exp:"4 appears 3 times."}
  ],
  Probability:[
    {q:"P(rolling a 6)?",opts:["1/3","1/4","1/5","1/6"],ans:"1/6",hint:"6 equal outcomes",exp:"1 out of 6 = 1/6"},
    {q:"P(two dice sum to 7)?",opts:["1/6","5/36","6/36","7/36"],ans:"6/36",hint:"Count: (1,6)(2,5)(3,4)...",exp:"6 combos out of 36 = 6/36"},
    {q:"P(drawing a red card)?",opts:["1/4","1/3","1/2","2/3"],ans:"1/2",hint:"26 red out of 52",exp:"26/52=1/2"}
  ],
  Calculus:[
    {q:"d/dx [4x³ − 2x + 1]?",opts:["12x² − 2","4x² − 2","12x² + 1","8x − 2"],ans:"12x² − 2",hint:"Power rule: d/dx[xⁿ]=n·xⁿ⁻¹",exp:"12x²−2"},
    {q:"∫2x dx = ?",opts:["2x² + C","x² + C","x + C","2 + C"],ans:"x² + C",hint:"∫xⁿ=xⁿ⁺¹/(n+1)",exp:"x²+C"},
    {q:"log₂(32) = ?",opts:["4","5","6","8"],ans:"5",hint:"2^?=32",exp:"2⁵=32, so log₂(32)=5"}
  ],
  Patterns:[
    {q:"Next: 2, 4, 8, 16, ___",opts:["24","28","32","36"],ans:"32",hint:"×2 each time",exp:"16×2=32"},
    {q:"Next: 1, 4, 9, 16, ___",opts:["20","24","25","36"],ans:"25",hint:"Perfect squares",exp:"5²=25"},
    {q:"Sum of first 10 positive integers?",opts:["45","50","55","60"],ans:"55",hint:"n(n+1)/2",exp:"10×11/2=55"}
  ]
};
const CATS=Object.keys(QS);

let P=JSON.parse(localStorage.getItem('mhP')||'null')||{av:'🦊',xp:0,lvl:1,hi:0,games:0};
let LB=JSON.parse(localStorage.getItem('mhLB')||'[]');
const saveP=()=>localStorage.setItem('mhP',JSON.stringify(P));
const saveLB=()=>localStorage.setItem('mhLB',JSON.stringify(LB));

let sfxOn=true; let actx=null;
const getAC=()=>{if(!actx)actx=new(window.AudioContext||window.webkitAudioContext)();return actx;};
function beep(f,d,t,v){if(!sfxOn)return;try{const ac=getAC(),o=ac.createOscillator(),g=ac.createGain();o.connect(g);g.connect(ac.destination);o.frequency.value=f;o.type=t||'sine';g.gain.setValueAtTime(v||.12,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+d);o.start();o.stop(ac.currentTime+d);}catch(e){}}
const sfxOk=()=>{beep(600,.07);setTimeout(()=>beep(800,.09),75);setTimeout(()=>beep(1000,.13),150);};
const sfxBad=()=>beep(200,.2,'sawtooth',.1);
const sfxTick=()=>beep(440,.04,'square',.04);
const sfxPU=()=>{beep(700,.06);setTimeout(()=>beep(900,.08),55);};
function toggleSound(){sfxOn=!sfxOn;document.getElementById('soundBtn').textContent=sfxOn?'🔊':'🔇';doToast(sfxOn?'🔊 Sound ON':'🔇 Sound OFF');}

let dark=true;
function toggleTheme(){dark=!dark;const r=document.documentElement;r.style.setProperty('--bg',dark?'#050d1a':'#f0f8ff');r.style.setProperty('--s',dark?'#091628':'#ffffff');r.style.setProperty('--s2',dark?'#0d2040':'#e1f0fb');r.style.setProperty('--tx',dark?'#e0f2fe':'#0c1a2e');r.style.setProperty('--mu',dark?'#4a7a9b':'#4a7a9b');document.getElementById('themeBtn').textContent=dark?'🌙':'☀️';}

let tTmr;
function doToast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(tTmr);tTmr=setTimeout(()=>t.classList.remove('show'),2200);}

const xpFor=l=>l*100;
function addXP(a){P.xp+=a;while(P.xp>=xpFor(P.lvl)){P.xp-=xpFor(P.lvl);P.lvl++;doToast(`🎉 LEVEL UP! Now Level ${P.lvl}!`);spawnCenter();}updTopBar();saveP();}
function updTopBar(){const p=Math.min(100,(P.xp/xpFor(P.lvl))*100);document.getElementById('topXp').style.width=p+'%';document.getElementById('topLvl').textContent=`LVL ${P.lvl}`;}
function updProfile(){document.getElementById('avEl').textContent=P.av;document.getElementById('pSub').innerHTML=`XP: ${P.xp} | High Score: ${P.hi} | Games: ${P.games}`;document.getElementById('pLvl').textContent=`LVL ${P.lvl}`;updTopBar();}

function renderLB(){const s=[...LB].sort((a,b)=>b.sc-a.sc).slice(0,5);const ri=['🥇','🥈','🥉','4','5'],rc=['g','s','b','',''];document.getElementById('lbList').innerHTML=s.length?s.map((e,i)=>`<div class="lrow"><span class="lrn ${rc[i]}">${ri[i]}</span><span>${e.av||'🦊'}</span><span class="lname">Math Explorer</span><span class="lbdg">${e.mode}</span><span class="lsc">${e.sc}</span></div>`).join(''):'<p style="color:var(--mu);font-size:.88rem;">No scores yet — be the first!</p>';}

function renderCats(){const ic={Arithmetic:'🔢',Algebra:'📐',Geometry:'📏',Fractions:'🍕',Statistics:'📊',Probability:'🎲',Calculus:'∫',Patterns:'🔷'};document.getElementById('catGrid').innerHTML=CATS.map(c=>`<div class="cc" onclick="pickCat('${c}')"><span class="cci">${ic[c]||'📚'}</span><div class="ccn">${c.toUpperCase()}</div><div class="ccc">${QS[c].length} questions</div></div>`).join('');}
function pickCat(c){G.cat=c;startGame();}

let G={mode:'classic',diff:'easy',qs:[],qi:0,sc:0,str:0,bStr:0,cor:0,hints:0,ans:false,tv:30,ti:null,frz:false,lives:3,dbl:false,cat:null,pu:{freeze:2,'5050':2,skip:1,double:1},log:[],totT:0,qSt:0};

function pickMode(el){document.querySelectorAll('.mc').forEach(c=>c.classList.remove('active'));el.classList.add('active');G.mode=el.dataset.mode;}
function pickDiff(el){document.querySelectorAll('.sb[data-diff]').forEach(b=>b.classList.remove('active'));el.classList.add('active');G.diff=el.dataset.diff;}
function pickAv(el,e){document.querySelectorAll('#avPicker .sb').forEach(b=>b.classList.remove('active'));el.classList.add('active');P.av=e;document.getElementById('avEl').textContent=e;saveP();}
function handlePlay(){if(G.mode==='category'){renderCats();show('catScreen');}else{G.cat=null;startGame();}}

function buildQs(){let pool=[];if(G.cat){pool=QS[G.cat].map(q=>({...q,cat:G.cat}));}else{CATS.forEach(c=>QS[c].forEach(q=>pool.push({...q,cat:c})));}for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}return pool.slice(0,G.mode==='survival'?30:10);}

function startGame(){G.qs=buildQs();G.qi=0;G.sc=0;G.str=0;G.bStr=0;G.cor=0;G.hints=0;G.lives=3;G.pu={freeze:2,'5050':2,skip:1,double:1};G.dbl=false;G.log=[];G.totT=0;const mn={classic:'📚 CLASSIC',survival:'❤️ SURVIVAL',speed:'⚡ SPEED',category:'🗂️ '+(G.cat||'TOPIC')};document.getElementById('mlEl').textContent=mn[G.mode]||'🧮';document.getElementById('moBdg').textContent=G.mode.toUpperCase();document.getElementById('livChip').style.display=G.mode==='survival'?'flex':'none';rendLives();updPU();show('gameScreen');loadQ();}

function rendLives(){document.getElementById('livEl').innerHTML=[0,1,2].map(i=>`<span class="ht${i>=G.lives?' dead':''}">❤️</span>`).join('');}

function loadQ(){const q=G.qs[G.qi];G.ans=false;G.dbl=false;G.qSt=Date.now();const tot=G.mode==='survival'?'∞':'10';document.getElementById('qCnt').textContent=`Q ${G.qi+1}/${tot}`;document.getElementById('qLvl').textContent=`LEVEL ${G.qi+1}`;document.getElementById('lvBdg').textContent=`L${G.qi+1}`;document.getElementById('ctBdg').textContent=(q.cat||'MATH').toUpperCase();document.getElementById('pfEl').style.width=G.mode!=='survival'?`${(G.qi/10)*100}%`:'0%';document.getElementById('qText').innerHTML=`<span style="display:inline-block;animation:si .45s cubic-bezier(.34,1.56,.64,1)">${q.q}</span>`;document.getElementById('qHint').textContent=q.hint||'';document.getElementById('qHint').classList.remove('vis');document.getElementById('qCard').className='qcard';document.getElementById('fbEl').className='fback';document.getElementById('expBox').style.display='none';document.getElementById('nextBtn').className='bnext';document.getElementById('hintBtn').disabled=false;document.getElementById('pu_double').classList.remove('spent');const opts=[...q.opts];for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}const L=['A','B','C','D'];document.getElementById('optsEl').innerHTML=`<div class="opts">${opts.map((o,i)=>`<button class="ob" id="op${i}" onclick="pick(this,'${o.replace(/'/g,"\\'")}')"><span class="ol">${L[i]}</span><span>${o}</span></button>`).join('')}</div>`;updSc();startTimer();updPU();}

const tLim=()=>G.mode==='speed'?5:G.diff==='easy'?30:G.diff==='medium'?22:15;
function startTimer(){clearInterval(G.ti);G.frz=false;const max=tLim();G.tv=max;tiUI(max,max);G.ti=setInterval(()=>{if(G.frz)return;G.tv--;tiUI(G.tv,max);if(G.tv===8)sfxTick();if(G.tv<=0){clearInterval(G.ti);if(!G.ans)timeUp();}},1000);}
function tiUI(v,max){const c=119.4,off=c*(1-v/max);document.getElementById('rfEl').style.strokeDashoffset=off;document.getElementById('tmrNum').textContent=v;document.getElementById('tsf').style.width=`${(v/max)*100}%`;const r=document.getElementById('tmrRing');if(v<=5){r.classList.add('warn');if(G.mode==='speed')document.getElementById('qCard').classList.add('urgent');}else{r.classList.remove('warn');document.getElementById('qCard').classList.remove('urgent');}}

function pick(btn,val){if(G.ans)return;clearInterval(G.ti);G.ans=true;const el=Math.round((Date.now()-G.qSt)/1000);G.totT+=el;const q=G.qs[G.qi],ok=val===q.ans;const max=tLim(),tB=ok?Math.floor(G.tv/max*20):0;let pts=ok?(10+tB+(G.str>=3?5:0))*(G.dbl?2:1):0;document.querySelectorAll('.ob').forEach(b=>{b.disabled=true;const t=b.querySelector('span:last-child').textContent;if(t===q.ans)b.classList.add('right');else if(b===btn&&!ok)b.classList.add('wrong');});G.log.push({q:q.q,cat:q.cat,ok,your:val,right:q.ans});if(ok){G.sc+=pts;G.str++;G.cor++;G.bStr=Math.max(G.bStr,G.str);document.getElementById('qCard').classList.add('ok');showFB(true,`+${pts} pts${tB?` ⏱+${tB}`:''}${G.dbl?' ✨2×':''}${G.str>1?` 🔥×${G.str}`:''}`);sfxOk();spawnP(btn);}else{G.str=0;document.getElementById('qCard').classList.add('bad');const c=document.getElementById('qCard');c.classList.add('shake');setTimeout(()=>c.classList.remove('shake'),400);showFB(false,`Correct: ${q.ans}`);sfxBad();if(G.mode==='survival'){G.lives--;rendLives();if(G.lives<=0){setTimeout(()=>endGame(true),1200);return;}}}if(q.exp){document.getElementById('expTxt').textContent=q.exp;document.getElementById('expBox').style.display='block';}updSc();showNext();}

function timeUp(){if(G.ans)return;G.ans=true;G.str=0;const q=G.qs[G.qi];G.log.push({q:q.q,cat:q.cat,ok:false,your:'(time)',right:q.ans});document.querySelectorAll('.ob').forEach(b=>{b.disabled=true;if(b.querySelector('span:last-child').textContent===q.ans)b.classList.add('right');});document.getElementById('qCard').classList.add('bad');showFB(false,`⏰ Time's up! Answer: ${q.ans}`);sfxBad();if(G.mode==='survival'){G.lives--;rendLives();if(G.lives<=0){setTimeout(()=>endGame(true),1200);return;}}if(G.qs[G.qi].exp){document.getElementById('expTxt').textContent=G.qs[G.qi].exp;document.getElementById('expBox').style.display='block';}updSc();showNext();}

function showFB(ok,t){const f=document.getElementById('fbEl');document.getElementById('fbIco').textContent=ok?'✅':'❌';document.getElementById('fbTxt').textContent=t;f.className=`fback ${ok?'ok':'bad'} show`;}
function showNext(){const nb=document.getElementById('nextBtn');const last=G.mode!=='survival'&&G.qi>=9;nb.textContent=last?'FINISH 🏁':'NEXT →';nb.classList.add('show');document.getElementById('hintBtn').disabled=true;}
function updSc(){document.getElementById('scoreEl').textContent=G.sc;document.getElementById('strkEl').textContent=`🔥${G.str}`;}
function nextQ(){const last=G.mode!=='survival'&&G.qi>=9;if(last){endGame(false);return;}if(G.mode==='survival'&&G.qi>=G.qs.length-1){endGame(false);return;}G.qi++;loadQ();}

function usePU(t){if(G.ans||G.pu[t]<=0)return;G.pu[t]--;updPU();sfxPU();if(t==='freeze'){G.frz=true;doToast('🧊 Frozen 10s!');setTimeout(()=>{G.frz=false;doToast('⏱ Time resumed!');},10000);}if(t==='5050'){const q=G.qs[G.qi];const wr=[...document.querySelectorAll('.ob')].filter(b=>b.querySelector('span:last-child').textContent!==q.ans);let h=0;wr.forEach(b=>{if(h<2){b.classList.add('gone');h++;}});doToast('✂️ Two wrong answers removed!');}if(t==='skip'){doToast('⏭️ Skipped!');G.log.push({q:G.qs[G.qi].q,cat:G.qs[G.qi].cat,ok:false,your:'(skip)',right:G.qs[G.qi].ans});clearInterval(G.ti);G.ans=true;nextQ();return;}if(t==='double'){G.dbl=true;document.getElementById('pu_double').classList.add('spent');doToast('✨ DOUBLE POINTS active!');}}
function updPU(){Object.keys(G.pu).forEach(k=>{const c=G.pu[k];document.getElementById(`c_${k}`).textContent=`×${c}`;document.getElementById(`pu_${k}`).disabled=c<=0||G.ans;});}
function doHint(){document.getElementById('qHint').classList.add('vis');G.sc=Math.max(0,G.sc-5);G.hints++;document.getElementById('hintBtn').disabled=true;updSc();doToast('💡 Hint shown! −5 pts');}

function endGame(noL=false){clearInterval(G.ti);const tot=G.mode==='survival'?G.cor:10,pct=(G.cor/Math.max(1,tot))*100;let grade,label;if(noL){grade='💀';label='Out of Lives!';}else if(pct>=90){grade='S';label='PERFECT! Math Genius!';}else if(pct>=80){grade='A';label='Excellent!';}else if(pct>=70){grade='B';label='Great Work!';}else if(pct>=60){grade='C';label='Good Effort!';}else{grade='D';label='Keep Practicing!';}document.getElementById('resGrade').textContent=grade;document.getElementById('resLbl').textContent=label;document.getElementById('rSc').textContent=G.sc;document.getElementById('rCo').textContent=G.cor;document.getElementById('rSt').textContent=G.bStr;const avg=G.log.length?Math.round(G.totT/G.log.length):0;document.getElementById('rTm').textContent=`${avg}s`;const xp=Math.floor(G.sc*.5+G.bStr*5);document.getElementById('xpAmt').textContent=xp;addXP(xp);P.hi=Math.max(P.hi,G.sc);P.games++;saveP();LB.push({av:P.av,sc:G.sc,mode:G.mode});LB.sort((a,b)=>b.sc-a.sc);if(LB.length>20)LB.length=20;saveLB();const ach=[];if(!noL&&G.cor===10)ach.push({i:'🏆',l:'Perfect Score'});if(G.bStr>=5)ach.push({i:'🔥',l:'On Fire'});if(G.hints===0)ach.push({i:'🧠',l:'No Hints'});if(G.sc>=150)ach.push({i:'⭐',l:'High Scorer'});if(G.diff==='hard')ach.push({i:'⚡',l:'Hard Mode'});if(G.mode==='survival')ach.push({i:'❤️',l:'Survivor'});if(G.mode==='speed')ach.push({i:'💨',l:'Speed Demon'});if(!ach.length)ach.push({i:'💪',l:'Perseverance!'});document.getElementById('achList').innerHTML=ach.map((a,i)=>`<div class="ap" style="animation-delay:${i*.11}s">${a.i} ${a.l}</div>`).join('');document.getElementById('revList').innerHTML=G.log.map(r=>`<div class="ri"><span class="ric">${r.ok?'✅':'❌'}</span><div class="riq"><div>${r.q}</div><div class="ria ${r.ok?'ok':'bad'}">${r.ok?'Correct: '+r.right:'Your: '+r.your+' → '+r.right}</div></div></div>`).join('');show('resScreen');if(pct>=70)setTimeout(spawnCenter,350);}

function spawnP(btn){if(!btn)return;const em=['✨','⭐','🎉','💫','🌟'],r=btn.getBoundingClientRect();for(let i=0;i<7;i++){const el=document.createElement('div');el.className='part';el.textContent=em[Math.floor(Math.random()*em.length)];el.style.left=`${r.left+r.width/2+(Math.random()-.5)*70}px`;el.style.top=`${r.top+r.height/2}px`;el.style.animationDelay=`${Math.random()*.3}s`;document.body.appendChild(el);setTimeout(()=>el.remove(),1800);}}
function spawnCenter(){const em=['🎉','✨','⭐','🌟','💫','🎊'];for(let i=0;i<24;i++){setTimeout(()=>{const el=document.createElement('div');el.className='part';el.textContent=em[Math.floor(Math.random()*em.length)];el.style.left=`${Math.random()*100}vw`;el.style.top=`${window.innerHeight*.3}px`;el.style.animationDuration=`${1.4+Math.random()}s`;document.body.appendChild(el);setTimeout(()=>el.remove(),2400);},i*85);}}

function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}

updProfile();renderLB();