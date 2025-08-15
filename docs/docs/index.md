<div align="center">
  <h1>AnimeChain Documentation</h1>
  <p><strong>Layer 3 Blockchain Built on Arbitrum Orbital</strong></p>
  <p>Get funds immediately via the faucet</p>
</div>

<div class="faucet-button-container">
  <a href="networks/testnet/faucet" class="faucet-btn">
    <span class="btn-icon">🚰</span>
    Testnet Faucet
  </a>
</div>

---

<div class="main-actions">
  <button class="main-action-btn" onclick="showDevelopSection()">
    <img src="assets/images/dev.png" alt="Develop on AnimeChain" class="btn-image" />
    <span class="btn-text">Develop on AnimeChain</span>
    <span class="btn-subtitle">Build applications and smart contracts</span>
  </button>
  
  <a href="use-animechain" class="main-action-btn">
    <img src="assets/images/user.png" alt="Use AnimeChain" class="btn-image" />
    <span class="btn-text">Use AnimeChain</span>
    <span class="btn-subtitle">Add network, check balances, and manage tokens</span>
  </a>
</div>

<div id="develop-section" class="develop-section hidden">
  <h2>🛠️ Development Environment</h2>
  <p>Choose your preferred development network:</p>
  
  <div class="develop-options">
    <a href="networks/testnet/getting-started" class="develop-btn">
      <div class="btn-icon">🧪</div>
      <div class="btn-text">Testnet</div>
      <div class="btn-subtitle">Safe testing environment with free tokens</div>
    </a>
    
    <a href="networks/mainnet/getting-started" class="develop-btn">
      <div class="btn-icon">🟢</div>
      <div class="btn-text">Mainnet</div>
      <div class="btn-subtitle">Production-ready network for live applications</div>
    </a>
  </div>
</div>

<script>
function showDevelopSection() {
  const developSection = document.getElementById('develop-section');
  developSection.classList.remove('hidden');
  developSection.classList.add('visible');
  
  // Smooth scroll to the develop section
  setTimeout(() => {
    developSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}
</script>

---

# Architecture Overview

AnimeChain is built as a **Layer 3 blockchain** using Arbitrum Orbital technology:

```mermaid
graph TB
    L1[Ethereum L1<br/>🏦 Animecoin Origin]
    L2[Arbitrum L2<br/>🌉 Wrapped ANIME]
    L3[AnimeChain L3<br/>🎌 Native ANIME]
    
    L1 -->|Bridge| L2
    L2 -->|Bridge| L3
    
    L1_DESC[Original ANIME token<br/>Ethereum mainnet]
    L2_DESC[Wrapped ANIME<br/>Lower fees, faster tx]
    L3_DESC[Native gas token<br/>Anime-focused ecosystem]
    
    L1 --- L1_DESC
    L2 --- L2_DESC
    L3 --- L3_DESC
    
    style L3 fill:#ff6b9d,stroke:#333,stroke-width:3px
    style L2 fill:#4ecdc4,stroke:#333,stroke-width:2px
    style L1 fill:#45b7d1,stroke:#333,stroke-width:2px
```

### Key Benefits

- **Rollup-of-a-rollup cost savings**: AnimeChain is an L3 rollup that batches on Arbitrum (which itself batches on Ethereum), further reducing per‑transaction cost versus using Arbitrum directly.
- **Native ANIME for everything**: **ANIME** is the base gas and settlement currency chain‑wide, minimizing ERC‑20 overhead and enabling consistently fast throughput.
- **Larger contracts (≈45 KB)**: Deploy feature‑rich contracts up to ~45 KB, avoiding the ~20–25 KB limits common on L1/L2 and reducing the need for proxies or contract splits.
- **Fast inbound bridging (L1 → L2 → L3)**: Funding AnimeChain from Ethereum or Arbitrum propagates quickly via canonical bridges. See the [Bridging guide](animecoin/bridging.md).
- **Longer native exits (L3 → L2 → L1)**: Withdrawing back to Arbitrum follows optimistic rollup timing similar to withdrawals on `bridge.arbitrum.io` from Arbitrum to Ethereum; use liquidity bridges when available for faster exits.
- **Security inheritance**: Benefits from Arbitrum and Ethereum security guarantees.

#### Rollup-of-a-rollup (visual)

<div class="rollup-canvas-wrap" style="margin: 1rem 0;">
  <canvas id="chainCanvas" width="1000" height="1050" aria-label="Chains visualization" style="max-width:100%; width:100%; height:1050px; display:block; border-radius:8px; background: radial-gradient(ellipse at top left, rgba(255,255,255,0.06), rgba(0,0,0,0.02));"></canvas>
</div>

<script>
(function(){
  const canvas = document.getElementById('chainCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let cssW = canvas.clientWidth, cssH = canvas.clientHeight, dpr = window.devicePixelRatio || 1;
  function resize(){ cssW = canvas.clientWidth; cssH = canvas.clientHeight; dpr = window.devicePixelRatio||1; canvas.width = Math.floor(cssW*dpr); canvas.height = Math.floor(cssH*dpr); ctx.setTransform(dpr,0,0,dpr,0,0); }
  resize();
  window.addEventListener('resize', resize);

  function loadImg(src){ const img=new Image(); let ok=false; img.onload=()=>ok=true; img.src=src; return {img,isLoaded:()=>ok}; }
  const logos = {
    l3: loadImg('assets/images/animecoin.webp'),
    l2: loadImg('assets/images/arbitrum.webp'),
    l1: loadImg('assets/images/eth.webp')
  };

  function layout(){
    const width = cssW, height = cssH; const third = height/3;
    return {
      width, height, third,
      l3: { y0: 0, y1: third, cy: third*0.5 },
      l2: { y0: third, y1: third*2, cy: third*1.5 },
      l1: { y0: third*2, y1: height, cy: third*2.5 }
    };
  }

  // Per-lane horizontal shift settings
  // Options: 'left' (-100px), 'none' (0px), 'right' (+100px)
  const LANE_SHIFT = { l3: 'none', l2: 'left', l1: 'right' };
  const SHIFT_PX = { left: -75, none: 0, right: 75 };
  function laneOffsetPx(layer){ return SHIFT_PX[LANE_SHIFT[layer]] || 0; }

  // Header styling and metrics
  const HEADER_ICON = 32;
  const HEADER_FONT_SIZE = 20;
  const HEADER_PAD_X = 12;
  const HEADER_PAD_Y = 10;
  const HEADER_GAP = 10;
  const HEADER_BOX_HEIGHT = HEADER_ICON + HEADER_PAD_Y * 1.5; // approximate box height used for vertical offset

  function drawHeader(cx, y, label, logo, bg){
    const icon=HEADER_ICON, gap=HEADER_GAP, padX=HEADER_PAD_X, padY=HEADER_PAD_Y; ctx.save();
    ctx.font=`bold ${HEADER_FONT_SIZE}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`;
    const tw=ctx.measureText(label).width; const w=icon+gap+tw+padX*2; const x=cx-w/2; const h=icon+padY*1.5; const r=12; const yTop=y - icon + 8 - padY/2;
    ctx.fillStyle=bg; ctx.beginPath(); ctx.moveTo(x+r,yTop); ctx.lineTo(x+w-r,yTop); ctx.quadraticCurveTo(x+w,yTop,x+w,yTop+r); ctx.lineTo(x+w,yTop+h-r); ctx.quadraticCurveTo(x+w,yTop+h,x+w-r,yTop+h); ctx.lineTo(x+r,yTop+h); ctx.quadraticCurveTo(x,yTop+h,x,yTop+h-r); ctx.lineTo(x,yTop+r); ctx.quadraticCurveTo(x,yTop,x+r,yTop); ctx.closePath(); ctx.fill();
    if(logo && logo.isLoaded()) ctx.drawImage(logo.img, x+padX, y-icon+12, icon, icon); else { ctx.fillStyle='rgba(0,0,0,0.35)'; ctx.beginPath(); ctx.arc(x+padX+icon/2,y-icon/2+12,icon/2,0,Math.PI*2); ctx.fill(); }
    ctx.fillStyle='#111'; ctx.textBaseline='alphabetic'; ctx.fillText(label, x+padX+icon+gap, y+6); ctx.restore();
  }

  function drawBackgrounds(){ const L=layout(); ctx.save();
    ctx.fillStyle='rgba(255,214,10,0.12)'; ctx.fillRect(0,L.l3.y0,L.width,L.l3.y1-L.l3.y0);
    ctx.fillStyle='rgba(78,205,196,0.12)'; ctx.fillRect(0,L.l2.y0,L.width,L.l2.y1-L.l2.y0);
    ctx.fillStyle='rgba(69,183,209,0.12)'; ctx.fillRect(0,L.l1.y0,L.width,L.l1.y1-L.l1.y0);
    ctx.restore();
    const titleX = L.width * 0.25;
    drawHeader(titleX, L.l3.y0 + 18 + HEADER_BOX_HEIGHT, 'AnimeChain (L3)', logos.l3, 'rgba(255,247,200,0.96)');
    drawHeader(titleX, L.l2.y0 + 18 + HEADER_BOX_HEIGHT, 'Arbitrum (L2)', logos.l2, 'rgba(224,255,250,0.96)');
    drawHeader(titleX, L.l1.y0 + 18 + HEADER_BOX_HEIGHT, 'Ethereum (L1)', logos.l1, 'rgba(224,243,255,0.96)');
  }

  function drawRoundedRect(x,y,w,h,r){ const rr=Math.min(r,w*0.5,h*0.5); ctx.beginPath(); ctx.moveTo(x+rr,y); ctx.lineTo(x+w-rr,y); ctx.quadraticCurveTo(x+w,y,x+w,y+rr); ctx.lineTo(x+w,y+h-rr); ctx.quadraticCurveTo(x+w,y+h,x+w-rr,y+h); ctx.lineTo(x+rr,y+h); ctx.quadraticCurveTo(x,y+h,x,y+h-rr); ctx.lineTo(x,y+rr); ctx.quadraticCurveTo(x,y,x+rr,y); ctx.closePath(); }

  function drawProjectedCube2D(cx, cy, size, faceFillColor = 'rgba(255,214,10,1)'){
    const s = size * (2/3);
    const half = s/2; const off = s/4;
    const fx0 = cx - half, fy0 = cy - half, fx1 = cx + half, fy1 = cy + half; // front square (on top)
    const bx0 = fx0 - off, by0 = fy0 - off, bx1 = fx1 - off, by1 = fy1 - off; // back square
    ctx.save();
    ctx.lineWidth = 1.6;
    // back square (opaque) – fill, then stroke edges individually
    ctx.fillStyle = faceFillColor;
    ctx.beginPath(); ctx.rect(bx0, by0, bx1 - bx0, by1 - by0); ctx.fill();
    // top edge (black)
    ctx.strokeStyle = '#111';
    ctx.beginPath(); ctx.moveTo(bx0, by0); ctx.lineTo(bx1, by0); ctx.stroke();
    // left edge (black)
    ctx.beginPath(); ctx.moveTo(bx0, by0); ctx.lineTo(bx0, by1); ctx.stroke();
    // bottom edge (black)
    ctx.beginPath(); ctx.moveTo(bx0, by1); ctx.lineTo(bx1, by1); ctx.stroke();
    // right edge (yellow to hide)
    ctx.strokeStyle = faceFillColor;
    ctx.beginPath(); ctx.moveTo(bx1, by0); ctx.lineTo(bx1, by1); ctx.stroke();
    // side faces (parallelograms) fully filled
    ctx.fillStyle = faceFillColor; ctx.strokeStyle = '#111';
    // top face between back top edge and front top edge
    ctx.beginPath();
    ctx.moveTo(bx0, by0); ctx.lineTo(bx1, by0); ctx.lineTo(fx1, fy0); ctx.lineTo(fx0, fy0); ctx.closePath();
    ctx.fill(); ctx.stroke();
    // right face
    ctx.beginPath();
    ctx.moveTo(bx1, by0); ctx.lineTo(bx1, by1); ctx.lineTo(fx1, fy1); ctx.lineTo(fx1, fy0); ctx.closePath();
    ctx.fill(); ctx.stroke();
    // bottom face
    ctx.beginPath();
    ctx.moveTo(bx0, by1); ctx.lineTo(bx1, by1); ctx.lineTo(fx1, fy1); ctx.lineTo(fx0, fy1); ctx.closePath();
    ctx.fill(); ctx.stroke();
    // left face
    ctx.beginPath();
    ctx.moveTo(bx0, by0); ctx.lineTo(bx0, by1); ctx.lineTo(fx0, fy1); ctx.lineTo(fx0, fy0); ctx.closePath();
    ctx.fill(); ctx.stroke();
    // front square (opaque, on top)
    ctx.fillStyle = faceFillColor;
    ctx.beginPath(); ctx.rect(fx0, fy0, fx1 - fx0, fy1 - fy0); ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  // Lane colors
  const COLOR_L3 = 'rgba(255,214,10,1)';
  const COLOR_L2 = 'rgba(30,136,229,1)';
  const COLOR_L1 = 'rgba(120,120,120,1)';
  const TX_FILL_L3 = 'rgba(255,214,10,0.18)';
  const TX_FILL_L2 = 'rgba(30,136,229,0.18)';
  const TX_FILL_L1 = 'rgba(120,120,120,0.18)';
  // Distinct color for rollup egress/reinsertion to visually link them across lanes
  const ROLLUP_TX_FILL = 'rgba(255,140,0,0.4)';
  const LABEL_HOLD_MS = Math.floor(700 * 2.5); // 2.5x longer than highlight duration before fading
  const LABEL_FADE_MS = 600;
  const activeLabels = [];
  const pendingRollupToL2 = [];

  const txs=[]; let nextSpawn = performance.now();
  const txsL1=[]; let nextSpawnL1 = performance.now();
  const txsL2=[]; let nextSpawnL2 = performance.now();
  function randSpawn(){ return 200 + Math.random()*1600; }
  // Mining controller to synchronize pauses and block movement
  const miningCtrl = { state:'idle', inputActive:false, pauseStart:0, stackMoveStart:0, stackDelta:0 };
  const miningCtrl1 = { state:'idle', inputActive:false, pauseStart:0, stackMoveStart:0, stackDelta:0 };
  const miningCtrl2 = { state:'idle', inputActive:false, pauseStart:0, stackMoveStart:0, stackDelta:0 };

  // Cube move animation state
  const cubeMoveDuration = 900; // ms
  const cubeFadeDuration = 700; // ms
  // Per-lane move durations: L3 faster (3x), L1 slower (2x)
  const cubeMoveDurationL3 = Math.max(100, Math.floor(cubeMoveDuration / 3));
  const cubeMoveDurationL2 = cubeMoveDuration;
  const cubeMoveDurationL1 = cubeMoveDuration * 2;
  const cubeAnim = { active: false, start: 0, fadeStart: 0, recorded:false };
  const cubeAnim1 = { active: false, start: 0, fadeStart: 0, recorded:false };
  const cubeAnim2 = { active: false, start: 0, fadeStart: 0, recorded:false };
  let movedCubes = []; // persisted moved cubes {cx, cy, s, moves}
  let movedCubes1 = [];
  let movedCubes2 = [];
  let cyclesCount = 0;
  let cyclesCount2 = 0;
  // L3 rollup of two blocks into an egress transaction
  const rollupL3 = { active:false, phase:'idle', start:0, morphStart:0, emitted:false, bounds:null, target:null };
  const egressTxsL3 = []; // { x, y, size, v, endX, last }
  // L2 rollup visuals
  const rollupL2 = { active:false, phase:'idle', start:0, morphStart:0, emitted:false, bounds:null, target:null };
  const egressTxsL2 = [];
  const highlightDuration = 700; // ms
  const morphDuration = 500; // ms
  function triggerCubeMove(){ if(!cubeAnim.active && cubeAnim.fadeStart===0){ cubeAnim.active = true; cubeAnim.start = performance.now(); cubeAnim.fadeStart = 0; } }
  function triggerCubeMoveL1(){ if(!cubeAnim1.active && cubeAnim1.fadeStart===0){ cubeAnim1.active = true; cubeAnim1.start = performance.now(); cubeAnim1.fadeStart = 0; } }
  function triggerCubeMoveL2(){ if(!cubeAnim2.active && cubeAnim2.fadeStart===0){ cubeAnim2.active = true; cubeAnim2.start = performance.now(); cubeAnim2.fadeStart = 0; } }
  // Expose for manual triggering of a full mining cycle
  window.triggerMiningCycle = function(){
    if(miningCtrl.state==='idle'){
      miningCtrl.inputActive = true; // pause inflow
      miningCtrl.pauseStart = performance.now();
      miningCtrl.state = 'pausing';
      // apply stop-at-wait to in-flight txs
      for(let k=0;k<txs.length;k++){
        const txx = txs[k];
        txx.stopAtWait = txx.x < txx.waitX;
      }
    }
  };
  window.triggerMiningCycleL1 = function(){
    if(miningCtrl1.state==='idle'){
      miningCtrl1.inputActive = true;
      miningCtrl1.pauseStart = performance.now();
      miningCtrl1.state = 'pausing';
      for(let k=0;k<txsL1.length;k++){
        const txx = txsL1[k];
        txx.stopAtWait = txx.x < txx.waitX;
      }
    }
  };
  window.triggerMiningCycleL2 = function(){
    if(miningCtrl2.state==='idle'){
      miningCtrl2.inputActive = true;
      miningCtrl2.pauseStart = performance.now();
      miningCtrl2.state = 'pausing';
      for(let k=0;k<txsL2.length;k++){
        const txx = txsL2[k];
        txx.stopAtWait = txx.x < txx.waitX;
      }
    }
  };
  // auto trigger every few seconds (3.5–6s)
  let nextAutoMine = performance.now() + (3500 + Math.random()*2500);
  let nextAutoMineL1 = performance.now() + (3500 + Math.random()*2500);
  let nextAutoMineL2 = performance.now() + (3500 + Math.random()*2500);
  function spawnTxn(){
    const L=layout();
    const size=Math.max(16, Math.min(24, L.width*0.02));
    const yShift = L.third * 0.2;
    const centerY=L.l3.cy + yShift; const offset=(Math.random()*2-1)*8;
    const offsetX = laneOffsetPx('l3');
    const startX=-size-20 + offsetX; const xShift = L.width * 0.25; const baseEndX=L.width-24 - xShift + offsetX;
    const rawTotal = baseEndX - startX;
    const finalDist = rawTotal * 0.90; // end 10% earlier than before
    const endX = startX + finalDist;
    const duration=2200+Math.random()*1600; const v = finalDist / duration; // px per ms
    const waitX = startX + finalDist*0.85;
    const nowTs = performance.now();
    txs.push({ size, y:centerY+offset, startX, endX, x:startX, v, waitX, stopAtWait: miningCtrl.inputActive, paused:false, last: nowTs });
  }

  function spawnTxnL1(){
    const L=layout();
    const size=Math.max(16, Math.min(24, L.width*0.02));
    const yShift = L.third * 0.2;
    const centerY=L.l1.cy + yShift; const offset=(Math.random()*2-1)*8;
    const offsetX = laneOffsetPx('l1');
    const startX=-size-20 + offsetX; const xShift = L.width * 0.25; const baseEndX=L.width-24 - xShift + offsetX;
    const rawTotal = baseEndX - startX;
    const finalDist = rawTotal * 0.90;
    const endX = startX + finalDist;
    const duration=2200+Math.random()*1600; const v = finalDist / duration;
    const waitX = startX + finalDist*0.85;
    const nowTs = performance.now();
    txsL1.push({ size, y:centerY+offset, startX, endX, x:startX, v, waitX, stopAtWait: miningCtrl1.inputActive, paused:false, last: nowTs });
  }

  function spawnTxnL2(){
    const L=layout();
    const size=Math.max(16, Math.min(24, L.width*0.02));
    const yShift = L.third * 0.2;
    const centerY=L.l2.cy + yShift; const offset=(Math.random()*2-1)*8;
    const offsetX = laneOffsetPx('l2');
    const startX=-size-20 + offsetX; const xShift = L.width * 0.25; const baseEndX=L.width-24 - xShift + offsetX;
    const rawTotal = baseEndX - startX;
    const finalDist = rawTotal * 0.90;
    const endX = startX + finalDist;
    const duration=2200+Math.random()*1600; const v = finalDist / duration;
    const waitX = startX + finalDist*0.85;
    const nowTs = performance.now();
    txsL2.push({ size, y:centerY+offset, startX, endX, x:startX, v, waitX, stopAtWait: miningCtrl2.inputActive, paused:false, last: nowTs });
  }

  function drawTxnColored(tx, fill){ ctx.save(); ctx.fillStyle=fill; ctx.strokeStyle='#111'; ctx.lineWidth=1.2; drawRoundedRect(tx.x-tx.size/2, tx.y-tx.size/2, tx.size, tx.size, 5); ctx.fill(); ctx.stroke(); ctx.restore(); }

  function frame(now){ const L=layout(); ctx.clearRect(0,0,L.width,L.height); drawBackgrounds();
    // subtle grid
    ctx.save(); ctx.strokeStyle='rgba(0,0,0,0.04)'; ctx.lineWidth=1; const grid=20; for(let x=0;x<L.width;x+=grid){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,L.height); ctx.stroke(); } for(let y=0;y<L.height;y+=grid){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(L.width,y); ctx.stroke(); } ctx.restore();
    // spawning
    if(now>=nextSpawn){ spawnTxn(); nextSpawn = now + randSpawn(); }
    if(now>=nextSpawnL2){ spawnTxnL2(); nextSpawnL2 = now + randSpawn(); }
    if(now>=nextSpawnL1){ spawnTxnL1(); nextSpawnL1 = now + randSpawn(); }
    // auto mining trigger
    if(now>=nextAutoMine){ window.triggerMiningCycle(); nextAutoMine = now + (3500 + Math.random()*2500); }
    if(now>=nextAutoMineL2){ window.triggerMiningCycleL2(); nextAutoMineL2 = now + (3500 + Math.random()*2500); }
    if(now>=nextAutoMineL1){ window.triggerMiningCycleL1(); nextAutoMineL1 = now + (3500 + Math.random()*2500); }
    // Single line per frame: animate with cubes; from top to current cube center
    ctx.save(); ctx.strokeStyle = '#111'; ctx.lineWidth = 2;
    {
      const Ltmp = layout();
      const baseS = Math.min(Ltmp.third * 0.5, 100);
      const sNow = baseS * 0.7;
      const xShift = Ltmp.width * 0.25; const cxNow = Ltmp.width - 24 - sNow/2 - xShift + laneOffsetPx('l3');
      const yShift = Ltmp.third * 0.2;
      const baseCYNow = Ltmp.l3.cy + yShift;
      let cyNow = baseCYNow;
      if(cubeAnim.active){
        const t = Math.min(1, (now - cubeAnim.start) / cubeMoveDurationL3);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        const targetCYNow = baseCYNow - 1.2 * sNow;
        cyNow = baseCYNow + (targetCYNow - baseCYNow) * p;
      }
      ctx.beginPath(); ctx.moveTo(cxNow, Ltmp.l3.y0); ctx.lineTo(cxNow, cyNow); ctx.stroke();
    }
    ctx.restore();
    // L2: Single line per frame from top to current cube center in L2 lane
    ctx.save(); ctx.strokeStyle = '#111'; ctx.lineWidth = 2;
    {
      const Ltmp = layout();
      const baseS = Math.min(Ltmp.third * 0.5, 100);
      const sNow = baseS * 0.7;
      const xShift = Ltmp.width * 0.25; const cxNow = Ltmp.width - 24 - sNow/2 - xShift + laneOffsetPx('l2');
      const yShift = Ltmp.third * 0.2;
      const baseCYNow = Ltmp.l2.cy + yShift;
      let cyNow = baseCYNow;
      if(cubeAnim2.active){
        const t = Math.min(1, (now - cubeAnim2.start) / cubeMoveDurationL2);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        const targetCYNow = baseCYNow - 1.2 * sNow;
        cyNow = baseCYNow + (targetCYNow - baseCYNow) * p;
      }
      ctx.beginPath(); ctx.moveTo(cxNow, Ltmp.l2.y0); ctx.lineTo(cxNow, cyNow); ctx.stroke();
    }
    ctx.restore();
    // L1: Single line per frame from top to current cube center in L1 lane
    ctx.save(); ctx.strokeStyle = '#111'; ctx.lineWidth = 2;
    {
      const Ltmp = layout();
      const baseS = Math.min(Ltmp.third * 0.5, 100);
      const sNow = baseS * 0.7;
      const xShift = Ltmp.width * 0.25; const cxNow = Ltmp.width - 24 - sNow/2 - xShift + laneOffsetPx('l1');
      const yShift = Ltmp.third * 0.2;
      const baseCYNow = Ltmp.l1.cy + yShift;
      let cyNow = baseCYNow;
      if(cubeAnim1.active){
        const t = Math.min(1, (now - cubeAnim1.start) / cubeMoveDurationL1);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        const targetCYNow = baseCYNow - 1.2 * sNow;
        cyNow = baseCYNow + (targetCYNow - baseCYNow) * p;
      }
      ctx.beginPath(); ctx.moveTo(cxNow, Ltmp.l1.y0); ctx.lineTo(cxNow, cyNow); ctx.stroke();
    }
    ctx.restore();
    // draw previously moved cubes (persist for up to 4 cycles)
    for(let i=0;i<movedCubes.length;i++){
      const mc = movedCubes[i];
      let drawY = mc.cy;
      if(cubeAnim.active && miningCtrl.state==='moving' && mc.animFromY !== undefined){
        const t = Math.min(1, (now - miningCtrl.stackMoveStart) / cubeMoveDurationL3);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        drawY = mc.animFromY + (mc.animToY - mc.animFromY) * p;
      }
      drawProjectedCube2D(mc.cx, drawY, mc.s, COLOR_L3);
    }
    // L2 moved cubes
    for(let i=0;i<movedCubes2.length;i++){
      const mc = movedCubes2[i];
      let drawY = mc.cy;
      if(cubeAnim2.active && miningCtrl2.state==='moving' && mc.animFromY !== undefined){
        const t = Math.min(1, (now - miningCtrl2.stackMoveStart) / cubeMoveDurationL2);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        drawY = mc.animFromY + (mc.animToY - mc.animFromY) * p;
      }
      drawProjectedCube2D(mc.cx, drawY, mc.s, COLOR_L2);
    }
    // L1 moved cubes
    for(let i=0;i<movedCubes1.length;i++){
      const mc = movedCubes1[i];
      let drawY = mc.cy;
      if(cubeAnim1.active && miningCtrl1.state==='moving' && mc.animFromY !== undefined){
        const t = Math.min(1, (now - miningCtrl1.stackMoveStart) / cubeMoveDurationL1);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        drawY = mc.animFromY + (mc.animToY - mc.animFromY) * p;
      }
      drawProjectedCube2D(mc.cx, drawY, mc.s, COLOR_L1);
    }
    // draw cube at far right end of L3 lane with vertical move + connector + fade-in replacement
    const Lnow = layout();
    const baseS = Math.min(Lnow.third * 0.5, 100);
    const s = baseS * 0.7; // scale blocks by 70%
    const xShift = Lnow.width * 0.25; const cx = Lnow.width - 24 - s/2 - xShift + laneOffsetPx('l3');
    const yShift = Lnow.third * 0.2;
    const baseCY = Lnow.l3.cy + yShift;
    const targetCY = baseCY - 1.2 * s;
    let drawCY = baseCY;
    if(cubeAnim.active){
      const t = Math.min(1, (now - cubeAnim.start) / cubeMoveDurationL3);
      const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
      drawCY = baseCY + (targetCY - baseCY) * p;
      drawProjectedCube2D(cx, drawCY, s, COLOR_L3);
      if(t >= 1){
        if(!cubeAnim.recorded){
          // finalize moved cubes animation: set new cy and increment moves
          for(let i=0;i<movedCubes.length;i++){
            if(movedCubes[i].animToY !== undefined){ movedCubes[i].cy = movedCubes[i].animToY; }
            movedCubes[i].moves = (movedCubes[i].moves||0) + 1;
            delete movedCubes[i].animFromY; delete movedCubes[i].animToY;
          }
          // drop cubes that have moved up 2 times
          movedCubes = movedCubes.filter(c => (c.moves||0) < 2);
          // record new moved cube at target
          movedCubes.push({ cx, cy: targetCY, s, moves: 0 });
          cubeAnim.recorded = true; cyclesCount += 1;
          // every 2 block loops: highlight last two cubes and emit egress txn to the right
          if(cyclesCount % 2 === 0 && movedCubes.length >= 2){
            const a = movedCubes[movedCubes.length-1];
            const b = movedCubes[movedCubes.length-2];
            const pad = Math.max(a.s, b.s) * 0.15;
            const minX = Math.min(a.cx - a.s*0.6, b.cx - b.s*0.6) - pad;
            const maxX = Math.max(a.cx + a.s*0.6, b.cx + b.s*0.6) + pad;
            const minY = Math.min(a.cy - a.s*0.6, b.cy - b.s*0.6) - pad;
            const maxY = Math.max(a.cy + a.s*0.6, b.cy + b.s*0.6) + pad;
            rollupL3.active = true; rollupL3.phase = 'highlight'; rollupL3.start = now; rollupL3.morphStart = 0; rollupL3.emitted = false; rollupL3.bounds = { minX, maxX, minY, maxY }; rollupL3.target = null;
          }
        }
        if(cubeAnim.fadeStart === 0) cubeAnim.fadeStart = now;
        // allow resume after full animation completes
        if(miningCtrl.state==='moving'){ miningCtrl.state='fading'; }
      }
    } else {
      drawProjectedCube2D(cx, baseCY, s, COLOR_L3);
    }
    // L3: highlight then morph into txn square and continue off-page
    if(rollupL3.active && rollupL3.bounds){
      const Ltmp = layout();
      const b = rollupL3.bounds;
      if(rollupL3.phase === 'highlight'){
        const elapsed = now - rollupL3.start;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - (elapsed / highlightDuration) * 0.2);
        ctx.fillStyle = 'rgba(255,214,10,0.18)';
        ctx.strokeStyle = 'rgba(17,17,17,0.6)';
        ctx.lineWidth = 2;
        const bw = (b.maxX - b.minX);
        const bh = (b.maxY - b.minY);
        const bhAdj = bh * 0.9; // reduce bottom by ~10%
        drawRoundedRect(b.minX, b.minY, bw, bhAdj, 10);
        ctx.fill(); ctx.stroke();
        ctx.restore();
        if(elapsed >= highlightDuration){
          const bw2 = (b.maxX - b.minX);
          const bh2 = (b.maxY - b.minY);
          const bhAdj2 = bh2 * 0.9;
          const yCenter = b.minY + bhAdj2 / 2;
          const startX = b.maxX + 10;
          const targetSize = Math.min(Ltmp.third * 0.16, 22);
          const targetRect = { x: startX - targetSize/2, y: yCenter - targetSize/2, w: targetSize, h: targetSize };
          rollupL3.phase = 'morph'; rollupL3.morphStart = now; rollupL3.target = targetRect;
        }
      } else if(rollupL3.phase === 'morph' && rollupL3.target){
        const t = Math.min(1, (now - rollupL3.morphStart) / morphDuration);
        const sx = b.minX, sy = b.minY, sw = (b.maxX - b.minX), sh = (b.maxY - b.minY) * 0.9; // start from adjusted highlight height
        const tx = rollupL3.target.x, ty = rollupL3.target.y, tw = rollupL3.target.w, th = rollupL3.target.h;
        const ix = sx + (tx - sx)*t;
        const iy = sy + (ty - sy)*t;
        const iw = sw + (tw - sw)*t;
        const ih = sh + (th - sh)*t;
        ctx.save();
        // blend color from yellow to blue across morph
        const alpha = 0.18;
        const mix = t;
        const r = Math.round((255*(1-mix) + 30*mix));
        const g = Math.round((214*(1-mix) + 136*mix));
        const bcol = Math.round((10*(1-mix) + 229*mix));
        ctx.fillStyle = `rgba(${r},${g},${bcol},${alpha})`;
        ctx.strokeStyle = 'rgba(17,17,17,0.7)';
        ctx.lineWidth = 2;
        drawRoundedRect(ix, iy, iw, ih, 10 * (1 - t) + 5 * t);
        ctx.fill(); ctx.stroke();
        // Draw label to the right of the rectangle, above the txn square being created (target)
        // queue label to display with extended hold and fade
        activeLabels.push({ text: 'Rollup Transaction', x: tx + tw - 31, y: ty - 6, start: now, holdMs: LABEL_HOLD_MS, fadeMs: LABEL_FADE_MS });
        ctx.restore();
        if(t >= 1 && !rollupL3.emitted){
          const startXCenter = tx + tw/2;
          const yCenter = ty + th/2;
          const endX = Ltmp.width + 50;
          const duration = 1500;
          const v = (endX - startXCenter) / duration;
          const size = tw; // same as target
          // Track this rollup egress with a special color and id so L2 can mirror it after exit
          const rollId = now; // simple unique id per emission
          egressTxsL3.push({ x:startXCenter, y:yCenter, size, v, endX, last: now, fill: ROLLUP_TX_FILL, rollId });
          rollupL3.emitted = true; rollupL3.active = false; rollupL3.bounds = null; rollupL3.target = null; rollupL3.phase = 'idle';
        }
      }
    }
    if(cubeAnim.fadeStart > 0){
      const ft = Math.min(1, (now - cubeAnim.fadeStart) / cubeFadeDuration);
      ctx.save(); ctx.globalAlpha = ft; drawProjectedCube2D(cx, baseCY, s, COLOR_L3); ctx.restore();
      if(ft >= 1){
        cubeAnim.active = false;
        cubeAnim.recorded = false;
        cubeAnim.fadeStart = 0;
        // resume tx flow
        if(miningCtrl.state==='fading'){
          miningCtrl.inputActive=false; miningCtrl.state='idle';
          // immediately resume all txs
          for(let k=0;k<txs.length;k++){
            txs[k].paused=false; txs[k].stopAtWait=false; txs[k].last = now;
          }
        }
      }
    }
    // L1 active cube
    // L2 active cube
    {
      const Lnow2 = layout();
      const baseS2 = Math.min(Lnow2.third * 0.5, 100);
      const s2 = baseS2 * 0.7;
      const xShift2 = Lnow2.width * 0.25; const cx2 = Lnow2.width - 24 - s2/2 - xShift2 + laneOffsetPx('l2');
      const yShift2 = Lnow2.third * 0.2;
      const baseCY2 = Lnow2.l2.cy + yShift2;
      const targetCY2 = baseCY2 - 1.2 * s2;
      let drawCY2 = baseCY2;
      if(cubeAnim2.active){
        const t = Math.min(1, (now - cubeAnim2.start) / cubeMoveDurationL2);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        drawCY2 = baseCY2 + (targetCY2 - baseCY2) * p;
        drawProjectedCube2D(cx2, drawCY2, s2, COLOR_L2);
        if(t >= 1){
          if(!cubeAnim2.recorded){
            for(let i=0;i<movedCubes2.length;i++){
              if(movedCubes2[i].animToY !== undefined){ movedCubes2[i].cy = movedCubes2[i].animToY; }
              movedCubes2[i].moves = (movedCubes2[i].moves||0) + 1;
              delete movedCubes2[i].animFromY; delete movedCubes2[i].animToY;
            }
            movedCubes2 = movedCubes2.filter(c => (c.moves||0) < 2);
            movedCubes2.push({ cx: cx2, cy: targetCY2, s: s2, moves: 0 });
            cubeAnim2.recorded = true; cyclesCount2 += 1;
            // every 2 block loops on L2: highlight last two cubes and emit egress txn to the right
            if(cyclesCount2 % 2 === 0 && movedCubes2.length >= 2){
              const a2 = movedCubes2[movedCubes2.length-1];
              const b2 = movedCubes2[movedCubes2.length-2];
              const pad2 = Math.max(a2.s, b2.s) * 0.15;
              const minX2 = Math.min(a2.cx - a2.s*0.6, b2.cx - b2.s*0.6) - pad2;
              const maxX2 = Math.max(a2.cx + a2.s*0.6, b2.cx + b2.s*0.6) + pad2;
              const minY2 = Math.min(a2.cy - a2.s*0.6, b2.cy - b2.s*0.6) - pad2;
              const maxY2 = Math.max(a2.cy + a2.s*0.6, b2.cy + b2.s*0.6) + pad2;
              rollupL2.active = true; rollupL2.phase = 'highlight'; rollupL2.start = now; rollupL2.morphStart = 0; rollupL2.emitted = false; rollupL2.bounds = { minX: minX2, maxX: maxX2, minY: minY2, maxY: maxY2 }; rollupL2.target = null;
            }
          }
          if(cubeAnim2.fadeStart === 0) cubeAnim2.fadeStart = now;
          if(miningCtrl2.state==='moving'){ miningCtrl2.state='fading'; }
        }
      } else {
        drawProjectedCube2D(cx2, baseCY2, s2, COLOR_L2);
      }
      if(cubeAnim2.fadeStart > 0){
        const ft = Math.min(1, (now - cubeAnim2.fadeStart) / cubeFadeDuration);
        ctx.save(); ctx.globalAlpha = ft; drawProjectedCube2D(cx2, baseCY2, s2, COLOR_L2); ctx.restore();
        if(ft >= 1){
          cubeAnim2.active = false;
          cubeAnim2.recorded = false;
          cubeAnim2.fadeStart = 0;
          if(miningCtrl2.state==='fading'){
            miningCtrl2.inputActive=false; miningCtrl2.state='idle';
            for(let k=0;k<txsL2.length;k++){
              txsL2[k].paused=false; txsL2[k].stopAtWait=false; txsL2[k].last = now;
            }
          }
        }
      }
    }
    // L2: highlight then morph into txn square and continue off-page
    if(rollupL2.active && rollupL2.bounds){
      const Ltmp = layout();
      const b2 = rollupL2.bounds;
      if(rollupL2.phase === 'highlight'){
        const elapsed2 = now - rollupL2.start;
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - (elapsed2 / highlightDuration) * 0.2);
        ctx.fillStyle = 'rgba(255,214,10,0.18)';
        ctx.strokeStyle = 'rgba(17,17,17,0.6)';
        ctx.lineWidth = 2;
        const bw2 = (b2.maxX - b2.minX);
        const bh2 = (b2.maxY - b2.minY);
        const bhAdj2 = bh2 * 0.9; // reduce bottom by ~10%
        drawRoundedRect(b2.minX, b2.minY, bw2, bhAdj2, 10);
        ctx.fill(); ctx.stroke();
        ctx.restore();
        if(elapsed2 >= highlightDuration){
          const yCenter2 = b2.minY + bhAdj2 / 2;
          const startX2 = b2.maxX + 10;
          const targetSize2 = Math.min(Ltmp.third * 0.16, 22);
          const targetRect2 = { x: startX2 - targetSize2/2, y: yCenter2 - targetSize2/2, w: targetSize2, h: targetSize2 };
          rollupL2.phase = 'morph'; rollupL2.morphStart = now; rollupL2.target = targetRect2;
        }
      } else if(rollupL2.phase === 'morph' && rollupL2.target){
        const t2 = Math.min(1, (now - rollupL2.morphStart) / morphDuration);
        const sx2 = b2.minX, sy2 = b2.minY, sw2 = (b2.maxX - b2.minX), sh2 = (b2.maxY - b2.minY) * 0.9;
        const tx2 = rollupL2.target.x, ty2 = rollupL2.target.y, tw2 = rollupL2.target.w, th2 = rollupL2.target.h;
        const ix2 = sx2 + (tx2 - sx2)*t2;
        const iy2 = sy2 + (ty2 - sy2)*t2;
        const iw2 = sw2 + (tw2 - sw2)*t2;
        const ih2 = sh2 + (th2 - sh2)*t2;
        ctx.save();
        const alpha2 = 0.18;
        const mix2 = t2;
        const r2 = Math.round((255*(1-mix2) + 30*mix2));
        const g2 = Math.round((214*(1-mix2) + 136*mix2));
        const bcol2 = Math.round((10*(1-mix2) + 229*mix2));
        ctx.fillStyle = `rgba(${r2},${g2},${bcol2},${alpha2})`;
        ctx.strokeStyle = 'rgba(17,17,17,0.7)';
        ctx.lineWidth = 2;
        drawRoundedRect(ix2, iy2, iw2, ih2, 10 * (1 - t2) + 5 * t2);
        ctx.fill(); ctx.stroke();
        // Label for L2 rollup
        // queue label for L2 as well
        activeLabels.push({ text: 'Rollup Transaction', x: tx2 + tw2 - 15, y: ty2 - 6, start: now, holdMs: LABEL_HOLD_MS, fadeMs: LABEL_FADE_MS });
        ctx.restore();
        if(t2 >= 1 && !rollupL2.emitted){
          const startXCenter2 = tx2 + tw2/2;
          const yCenter2 = ty2 + th2/2;
          const endX2 = Ltmp.width + 50;
          const duration2 = 1500;
          const v2 = (endX2 - startXCenter2) / duration2;
          const size2 = tw2;
          egressTxsL2.push({ x:startXCenter2, y:yCenter2, size: size2, v: v2, endX: endX2, last: now });
          rollupL2.emitted = true; rollupL2.active = false; rollupL2.bounds = null; rollupL2.target = null; rollupL2.phase = 'idle';
        }
      }
    }
    // L1 active cube
    {
      const Lnow1 = layout();
      const baseS1 = Math.min(Lnow1.third * 0.5, 100);
      const s1 = baseS1 * 0.7; // scale blocks by 70%
      const xShift1 = Lnow1.width * 0.25; const cx1 = Lnow1.width - 24 - s1/2 - xShift1 + laneOffsetPx('l1');
      const yShift1 = Lnow1.third * 0.2;
      const baseCY1 = Lnow1.l1.cy + yShift1;
      const targetCY1 = baseCY1 - 1.2 * s1;
      let drawCY1 = baseCY1;
      if(cubeAnim1.active){
        const t = Math.min(1, (now - cubeAnim1.start) / cubeMoveDurationL1);
        const p = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2;
        drawCY1 = baseCY1 + (targetCY1 - baseCY1) * p;
        drawProjectedCube2D(cx1, drawCY1, s1, COLOR_L1);
        if(t >= 1){
          if(!cubeAnim1.recorded){
            for(let i=0;i<movedCubes1.length;i++){
              if(movedCubes1[i].animToY !== undefined){ movedCubes1[i].cy = movedCubes1[i].animToY; }
              movedCubes1[i].moves = (movedCubes1[i].moves||0) + 1;
              delete movedCubes1[i].animFromY; delete movedCubes1[i].animToY;
            }
            movedCubes1 = movedCubes1.filter(c => (c.moves||0) < 2);
            movedCubes1.push({ cx: cx1, cy: targetCY1, s: s1, moves: 0 });
            cubeAnim1.recorded = true;
          }
          if(cubeAnim1.fadeStart === 0) cubeAnim1.fadeStart = now;
          if(miningCtrl1.state==='moving'){ miningCtrl1.state='fading'; }
        }
      } else {
        drawProjectedCube2D(cx1, baseCY1, s1, COLOR_L1);
      }
      if(cubeAnim1.fadeStart > 0){
        const ft = Math.min(1, (now - cubeAnim1.fadeStart) / cubeFadeDuration);
        ctx.save(); ctx.globalAlpha = ft; drawProjectedCube2D(cx1, baseCY1, s1, COLOR_L1); ctx.restore();
        if(ft >= 1){
          cubeAnim1.active = false;
          cubeAnim1.recorded = false;
          cubeAnim1.fadeStart = 0;
          if(miningCtrl1.state==='fading'){
            miningCtrl1.inputActive=false; miningCtrl1.state='idle';
            for(let k=0;k<txsL1.length;k++){
              txsL1[k].paused=false; txsL1[k].stopAtWait=false; txsL1[k].last = now;
            }
          }
        }
      }
    }
    // mining state machine: pause -> move block -> fade new -> resume
    if(miningCtrl.state==='pausing'){
      if(now - miningCtrl.pauseStart >= 400){
        // compute stack delta for this move and prime animations for existing cubes
        const Ltmp = layout();
        const baseS = Math.min(Ltmp.third * 0.5, 100);
        const sNow = baseS * 0.7;
        miningCtrl.stackDelta = -1.2 * sNow;
        miningCtrl.stackMoveStart = now;
        for(let i=0;i<movedCubes.length;i++){
          movedCubes[i].animFromY = movedCubes[i].cy;
          movedCubes[i].animToY = movedCubes[i].cy + miningCtrl.stackDelta;
        }
        triggerCubeMove();
        miningCtrl.state='moving';
      }
    }
    if(miningCtrl2.state==='pausing'){
      if(now - miningCtrl2.pauseStart >= 400){
        const Ltmp = layout();
        const baseS = Math.min(Ltmp.third * 0.5, 100);
        const sNow = baseS * 0.7;
        miningCtrl2.stackDelta = -1.2 * sNow;
        miningCtrl2.stackMoveStart = now;
        for(let i=0;i<movedCubes2.length;i++){
          movedCubes2[i].animFromY = movedCubes2[i].cy;
          movedCubes2[i].animToY = movedCubes2[i].cy + miningCtrl2.stackDelta;
        }
        triggerCubeMoveL2();
        miningCtrl2.state='moving';
      }
    }
    if(miningCtrl1.state==='pausing'){
      if(now - miningCtrl1.pauseStart >= 400){
        const Ltmp = layout();
        const baseS = Math.min(Ltmp.third * 0.5, 100);
        const sNow = baseS * 0.7;
        miningCtrl1.stackDelta = -1.2 * sNow;
        miningCtrl1.stackMoveStart = now;
        for(let i=0;i<movedCubes1.length;i++){
          movedCubes1[i].animFromY = movedCubes1[i].cy;
          movedCubes1[i].animToY = movedCubes1[i].cy + miningCtrl1.stackDelta;
        }
        triggerCubeMoveL1();
        miningCtrl1.state='moving';
      }
    }
    // update/draw
    for(let i=txs.length-1;i>=0;i--){
      const tx=txs[i];
      const dt = now - tx.last; tx.last = now;
      if(!tx.paused){
        const targetX = tx.stopAtWait ? tx.waitX : tx.endX;
        const direction = Math.sign(targetX - tx.x);
        tx.x = tx.x + direction * tx.v * dt;
        if((direction > 0 && tx.x >= targetX) || (direction < 0 && tx.x <= targetX)){
          tx.x = targetX;
          if(tx.stopAtWait && targetX === tx.waitX){ tx.paused = true; }
        }
      }
      drawTxnColored(tx, TX_FILL_L3);
      if(tx.x >= tx.endX - 0.5){ txs.splice(i,1); }
    }
    // update/draw L3 egress txns to the right
    for(let i=egressTxsL3.length-1;i>=0;i--){
      const et = egressTxsL3[i];
      const dt = now - et.last; et.last = now;
      et.x += et.v * dt;
      // draw styled txn (blue-ish)
      ctx.save();
      ctx.fillStyle= et.fill || TX_FILL_L2; ctx.strokeStyle='#111'; ctx.lineWidth=1.4;
      drawRoundedRect(et.x - et.size/2, et.y - et.size/2, et.size, et.size, 5);
      ctx.fill(); ctx.stroke();
      ctx.restore();
      // When L3 egress leaves screen on the right, create a mirrored txn on L2 at the left side
      if(et.x >= et.endX - 0.5){
        egressTxsL3.splice(i,1);
        const Ltmp = layout();
        const size = et.size;
        const yShift = Ltmp.third * 0.2;
        const y = Ltmp.l2.cy + yShift; // align with standard L2 txn lane height
        const offsetX = laneOffsetPx('l2');
        const startX = -size - 20 + offsetX; // left outside screen for L2
        const xShift = Ltmp.width * 0.25; const baseEndX=Ltmp.width-24 - xShift + offsetX;
        const rawTotal = baseEndX - startX;
        const finalDist = rawTotal * 0.90;
        const endX = startX + finalDist;
        const duration = 1500; const v = finalDist / duration;
        txsL2.push({ size, y, startX, endX, x:startX, v, waitX: startX + finalDist*0.85, stopAtWait: false, paused:false, last: now, fill: et.fill, rollId: et.rollId });
      }
    }
    // update/draw L2 egress txns to the right
    for(let i=egressTxsL2.length-1;i>=0;i--){
      const et2 = egressTxsL2[i];
      const dt2 = now - et2.last; et2.last = now;
      et2.x += et2.v * dt2;
      ctx.save();
      ctx.fillStyle= et2.fill || TX_FILL_L2; ctx.strokeStyle='#111'; ctx.lineWidth=1.4;
      drawRoundedRect(et2.x - et2.size/2, et2.y - et2.size/2, et2.size, et2.size, 5);
      ctx.fill(); ctx.stroke();
      ctx.restore();
      if(et2.x >= et2.endX - 0.5){
        egressTxsL2.splice(i,1);
        // When L2 egress leaves screen on the right, create mirrored txn on L1 at the left side
        const Ltmp = layout();
        const size1 = et2.size;
        const yShift1 = Ltmp.third * 0.2;
        const y1 = Ltmp.l1.cy + yShift1; // align with standard L1 txn lane height
        const offsetX1 = laneOffsetPx('l1');
        const startX1 = -size1 - 20 + offsetX1;
        const xShift1 = Ltmp.width * 0.25; const baseEndX1=Ltmp.width-24 - xShift1 + offsetX1;
        const rawTotal1 = baseEndX1 - startX1;
        const finalDist1 = rawTotal1 * 0.90;
        const endX1 = startX1 + finalDist1;
        const duration1 = 1800; const v1 = finalDist1 / duration1;
        txsL1.push({ size: size1, y: y1, startX: startX1, endX: endX1, x: startX1, v: v1, waitX: startX1 + finalDist1*0.85, stopAtWait: false, paused:false, last: now, fill: et2.fill, rollId: et2.rollId });
      }
    }
    for(let i=txsL2.length-1;i>=0;i--){
      const tx=txsL2[i];
      const dt = now - tx.last; tx.last = now;
      if(!tx.paused){
        const targetX = tx.stopAtWait ? tx.waitX : tx.endX;
        const direction = Math.sign(targetX - tx.x);
        tx.x = tx.x + direction * tx.v * dt;
        if((direction > 0 && tx.x >= targetX) || (direction < 0 && tx.x <= targetX)){
          tx.x = targetX;
          if(tx.stopAtWait && targetX === tx.waitX){ tx.paused = true; }
        }
      }
      drawTxnColored(tx, tx.fill || TX_FILL_L2);
      if(tx.x >= tx.endX - 0.5){ txsL2.splice(i,1); }
    }
    for(let i=txsL1.length-1;i>=0;i--){
      const tx=txsL1[i];
      const dt = now - tx.last; tx.last = now;
      if(!tx.paused){
        const targetX = tx.stopAtWait ? tx.waitX : tx.endX;
        const direction = Math.sign(targetX - tx.x);
        tx.x = tx.x + direction * tx.v * dt;
        if((direction > 0 && tx.x >= targetX) || (direction < 0 && tx.x <= targetX)){
          tx.x = targetX;
          if(tx.stopAtWait && targetX === tx.waitX){ tx.paused = true; }
        }
      }
      drawTxnColored(tx, TX_FILL_L1);
      if(tx.x >= tx.endX - 0.5){ txsL1.splice(i,1); }
    }
    // Draw active labels with extended hold/fade
    for(let i=activeLabels.length-1;i>=0;i--){
      const LBL = activeLabels[i];
      const elapsed = now - LBL.start;
      let alpha = 1;
      if(elapsed > LBL.holdMs){
        const t = Math.min(1, (elapsed - LBL.holdMs) / LBL.fadeMs);
        alpha = 1 - t;
      }
      if(alpha <= 0){ activeLabels.splice(i,1); continue; }
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.font = 'normal 13px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      const padX = 6, padY = 4, radius = 6;
      const textWidth = ctx.measureText(LBL.text).width;
      const rectX = LBL.x - padX;
      const rectY = LBL.y - (13 + padY*2); // approximate text height 13px
      const rectW = textWidth + padX*2;
      const rectH = 13 + padY*2;
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      ctx.strokeStyle = 'rgba(17,17,17,0.25)';
      ctx.lineWidth = 1;
      drawRoundedRect(rectX, rectY, rectW, rectH, radius);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#111';
      ctx.fillText(LBL.text, LBL.x, LBL.y - 2);
      ctx.restore();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
</script>

---

## 🚀 Quick Start

### For Users
1. [Add AnimeChain to your wallet](networks/mainnet/add-to-wallet.md)
2. [Bridge ANIME tokens](animecoin/bridging.md) from L1/L2
3. Start using anime dApps on L3!

### For Developers
1. [Set up your development environment](developers/index.md)
2. [Deploy smart contracts](developers/contracts.md)
3. [Integrate with our RPC](developers/rpc-api.md)
4. [Explore code examples](developers/examples.md)

### For Testers
1. [Connect to testnet](networks/testnet/getting-started.md)
2. [Get free test tokens](networks/testnet/faucet.md)
3. [Try our interactive tools](app.md)

---

## 🛠️ Developer Resources

<div class="grid cards" markdown>

-   :material-rocket-launch: **Quick Start**

    ---

    Get up and running with AnimeChain in minutes

    [:octicons-arrow-right-24: Get Started](developers/index.md)

-   :material-code-braces: **Smart Contracts**

    ---

    Core contracts, ABIs, and deployment guides

    [:octicons-arrow-right-24: View Contracts](developers/contracts.md)

-   :material-api: **RPC API**

    ---

    Complete API reference and examples

    [:octicons-arrow-right-24: API Docs](developers/rpc-api.md)

-   :material-tools: **Interactive Tools**

    ---

    Test contracts and transactions in your browser

    [:octicons-arrow-right-24: Try Tools](app.md)

</div>

---

## 🪙 Animecoin (ANIME)

**ANIME** is the native token powering the AnimeChain ecosystem:

| Layer | Token Type | Use Case |
|-------|------------|----------|
| **L1 (Ethereum)** | ERC-20 ANIME | Original token, governance |
| **L2 (Arbitrum)** | Wrapped ANIME | Lower fees, DeFi |
| **L3 (AnimeChain)** | Native ANIME | Gas fees, native ecosystem |

[Learn more about ANIME →](animecoin/index.md){ .md-button }

---

## 🤝 Community & Support

<div class="grid cards" markdown>

-   :fontawesome-brands-github: **GitHub**

    ---

    View source code and contribute

    [:octicons-arrow-right-24: AnimeChain GitHub](https://github.com/AnimeChain)

-   :fontawesome-brands-discord: **Discord**

    ---

    Join our developer community

    [:octicons-arrow-right-24: Join Discord](https://discord.gg/animechain)

-   :material-help-circle: **Support**

    ---

    Get help and troubleshooting

    [:octicons-arrow-right-24: Get Help](resources/troubleshooting.md)

-   :material-frequently-asked-questions: **FAQ**

    ---

    Common questions and answers

    [:octicons-arrow-right-24: View FAQ](resources/faq.md)

</div>

---

!!! tip "Need Help?"
    New to AnimeChain? Start with our [Getting Started Guide](networks/mainnet/getting-started.md) or try our [Interactive Tools](app.md) to explore the network safely.
