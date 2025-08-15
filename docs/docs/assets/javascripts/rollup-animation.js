/* AnimeChain rollup-of-a-rollup canvas animation */
(function () {
  function start() {
    const canvas = document.getElementById('rollupCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let cssWidth = canvas.clientWidth;
    let cssHeight = canvas.clientHeight;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      cssWidth = canvas.clientWidth;
      cssHeight = canvas.clientHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(cssHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    function loadImage(path) {
      const img = new Image();
      let loaded = false;
      img.onload = () => { loaded = true; };
      img.src = path;
      return { img, isLoaded: () => loaded };
    }

    const logos = {
      l3: loadImage('assets/images/animecoin.webp'),
      l2: loadImage('assets/images/arbitrum.webp'),
      l1: loadImage('assets/images/eth.webp')
    };

    const moveDurationMs = 2000;
    const spawnDurationMs = 300;
    const groupIntervalMs = 900;
    const compressDurationMs = 900;
    const sendDurationMs = 1100;
    const l2SpawnDurationMs = 450;
    const finalPauseMs = 1200;

    function easeOutCubic(t){return 1-Math.pow(1-t,3);} 
    function easeInOutQuad(t){return t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2;}

    function getLayout(){
      const width = cssWidth;
      const height = cssHeight;
      const baseY = Math.max(120, Math.min(height*0.6, height-60));
      const centerY = Math.round(height * 0.5);
      const third = width/3;
      const sections = {
        l3: { x0: 0, x1: third, cx: third*0.5 },
        l2: { x0: third, x1: third*2, cx: third*1.5 },
        l1: { x0: third*2, x1: width, cx: third*2.5 }
      };
      const startX = Math.max(16, sections.l3.x0 + third*0.12);
      const txSize = Math.max(26, Math.min(38, width*0.035));
      const cubeSize = Math.max(48, Math.min(68, width*0.065));
      const txYs = [baseY - txSize*1.9, baseY - txSize*0.2, baseY + txSize*1.5];
      const stackX = sections.l3.cx;
      const stackTopY = Math.max(60, centerY - cubeSize*2.0);
      const stackSpacing = cubeSize*1.6;
      const l2X = sections.l2.cx;
      const l2Y = baseY - cubeSize*0.2;
      const stopX = stackX - cubeSize*0.9;
      const workingY = Math.min(height - cubeSize*0.9, height - 20);
      return { width, height, baseY, centerY, startX, txSize, cubeSize, txYs, stackX, stackTopY, stackSpacing, l2X, l2Y, stopX, workingY, sections };
    }

    function computeVisibleStackTopY(L){
      const gapAboveWorking = L.cubeSize * 1.2; // keep stack clearly above next unmined block
      const desiredTop = L.workingY - (2 * L.stackSpacing + gapAboveWorking);
      const minTop = 60 + L.cubeSize * 0.8;
      const maxTop = L.height - 120;
      return Math.max(minTop, Math.min(maxTop, desiredTop));
    }

    function drawSectionHeader(cx,y,label,logo,fill){
      const iconSize=20, gap=8, padX=10, padY=6;
      ctx.save();
      ctx.font='bold 12px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial';
      const textWidth = ctx.measureText(label).width;
      const totalWidth = iconSize+gap+textWidth + padX*2;
      const startX = cx-totalWidth/2;
      // solid background pill
      ctx.fillStyle = fill || 'rgba(255,255,255,0.95)';
      const bgY = y - iconSize + 8 - padY/2;
      const bgH = iconSize + padY*1.5;
      const r = 8;
      ctx.beginPath();
      ctx.moveTo(startX + r, bgY);
      ctx.lineTo(startX + totalWidth - r, bgY);
      ctx.quadraticCurveTo(startX + totalWidth, bgY, startX + totalWidth, bgY + r);
      ctx.lineTo(startX + totalWidth, bgY + bgH - r);
      ctx.quadraticCurveTo(startX + totalWidth, bgY + bgH, startX + totalWidth - r, bgY + bgH);
      ctx.lineTo(startX + r, bgY + bgH);
      ctx.quadraticCurveTo(startX, bgY + bgH, startX, bgY + bgH - r);
      ctx.lineTo(startX, bgY + r);
      ctx.quadraticCurveTo(startX, bgY, startX + r, bgY);
      ctx.closePath();
      ctx.fill();
      if(logo && logo.isLoaded()){
        ctx.globalAlpha=0.95;
        ctx.drawImage(logo.img, startX + padX, y-iconSize+8, iconSize, iconSize);
        ctx.globalAlpha=1;
      } else {
        ctx.fillStyle='rgba(0,0,0,0.4)';
        ctx.beginPath(); ctx.arc(startX+padX+iconSize/2,y-iconSize/2+8,iconSize/2,0,Math.PI*2); ctx.fill();
      }
      ctx.fillStyle='#111';
      ctx.textBaseline='alphabetic';
      ctx.fillText(label, startX+padX+iconSize+gap, y+2);
      ctx.restore();
    }

    function drawSectionBackgrounds(L){
      const bandH=L.height; ctx.save();
      ctx.fillStyle='rgba(255,214,10,0.10)'; ctx.fillRect(L.sections.l3.x0,0,L.sections.l3.x1-L.sections.l3.x0,bandH);
      ctx.fillStyle='rgba(78,205,196,0.10)'; ctx.fillRect(L.sections.l2.x0,0,L.sections.l2.x1-L.sections.l2.x0,bandH);
      ctx.fillStyle='rgba(69,183,209,0.10)'; ctx.fillRect(L.sections.l1.x0,0,L.sections.l1.x1-L.sections.l1.x0,bandH);
      ctx.restore();
      // headers rendered in separate overlay pass
    }

    function drawRoundedRect(x,y,w,h,r){
      const rr=Math.min(r,w*0.5,h*0.5);
      ctx.beginPath(); ctx.moveTo(x+rr,y); ctx.lineTo(x+w-rr,y); ctx.quadraticCurveTo(x+w,y,x+w,y+rr);
      ctx.lineTo(x+w,y+h-rr); ctx.quadraticCurveTo(x+w,y+h,x+w-rr,y+h); ctx.lineTo(x+rr,y+h);
      ctx.quadraticCurveTo(x,y+h,x,y+h-rr); ctx.lineTo(x,y+rr); ctx.quadraticCurveTo(x,y,x+rr,y); ctx.closePath();
      ctx.fill(); ctx.stroke();
    }
    function drawTxnSquare(x,y,size,label,opts){
      const fill=(opts&&opts.fill)||'rgba(78,205,196,0.22)';
      const stroke=(opts&&opts.stroke)||'rgba(78,205,196,0.95)';
      const textColor=(opts&&opts.textColor)||'#000';
      ctx.save(); ctx.fillStyle=fill; ctx.strokeStyle=stroke; ctx.lineWidth=1.5;
      drawRoundedRect(x-size/2,y-size/2,size,size,Math.max(4,size*0.18));
      ctx.fillStyle=textColor; ctx.font=`${Math.floor(size*0.45)}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`;
      ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(label,x,y); ctx.restore();
    }
    function drawCube(cx,cy,size,scale,theme){
      const s=size*(scale||1), h=s*0.6, half=s/2, depth=h*0.7;
      const t=theme||'anime';
      const palette=
        t==='l2' ? { left:'rgba(78,205,196,0.85)', right:'rgba(78,205,196,0.70)', top:'rgba(78,205,196,0.95)', stroke:'#000' } :
        t==='unmined' ? { left:'rgba(255,255,255,1.0)', right:'rgba(245,245,245,1.0)', top:'rgba(255,255,255,1.0)', stroke:'rgba(0,0,0,0)' } :
        { left:'rgba(255,214,10,0.85)', right:'rgba(255,214,10,0.70)', top:'rgba(255,214,10,0.95)', stroke:'#000' };
      const left=[{x:cx-half,y:cy-depth},{x:cx,y:cy-depth+h*0.15},{x:cx,y:cy+h*0.85},{x:cx-half,y:cy+h*0.7}];
      const right=[{x:cx+half,y:cy-depth},{x:cx,y:cy-depth+h*0.15},{x:cx,y:cy+h*0.85},{x:cx+half,y:cy+h*0.7}];
      const topBack= h*0.25;
      const top=[{x:cx-half,y:cy-depth},{x:cx+half,y:cy-depth},{x:cx+half,y:cy-depth-topBack},{x:cx-half,y:cy-depth-topBack}];
      ctx.save(); ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(left[0].x,left[0].y); for(let i=1;i<left.length;i++)ctx.lineTo(left[i].x,left[i].y); ctx.closePath(); ctx.fillStyle=palette.left; ctx.strokeStyle=palette.stroke; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(right[0].x,right[0].y); for(let i=1;i<right.length;i++)ctx.lineTo(right[i].x,right[i].y); ctx.closePath(); ctx.fillStyle=palette.right; ctx.strokeStyle=palette.stroke; ctx.fill(); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(top[0].x,top[0].y); for(let i=1;i<top.length;i++)ctx.lineTo(top[i].x,top[i].y); ctx.closePath(); ctx.fillStyle=palette.top; ctx.strokeStyle=palette.stroke; ctx.fill(); ctx.stroke();
      ctx.strokeStyle='rgba(0,0,0,0.45)'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(cx-half,cy+h*0.7); ctx.lineTo(cx,cy+h*0.85); ctx.lineTo(cx+half,cy+h*0.7); ctx.stroke();
      ctx.restore();
    }
    function drawLabeledCube(cx,cy,size,scale,theme,label){
      drawCube(cx,cy,size,scale,theme); if(!label) return; ctx.save();
      ctx.fillStyle='#000'; ctx.font=`${Math.floor(size*0.40)}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`;
      ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(label,cx,cy); ctx.restore();
    }
    function drawLink(x1,y1,x2,y2){ ctx.save(); ctx.strokeStyle='rgba(160,160,200,0.65)'; ctx.lineWidth=2; ctx.setLineDash([6,6]); ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke(); ctx.restore(); }

    // original single-stream variables retained for L3 compression/send phase
    let minedBlocks=[];
    let workingBlock=null;
    let phaseStart=performance.now();
    let phase='spawn_unmined';
    let blueTxn=null; let l2Block=null;
    let currentGroup=0; let currentTxnInGroup=0; let activeTxn=null; let nextTxLabel=1;
    let settleStart=null; let settleDuration=450;
    let waitingAtStop=[];
    let nextSpawnAt=performance.now();

    function reset(now){ minedBlocks=[]; workingBlock=null; blueTxn=null; l2Block=null; currentGroup=0; currentTxnInGroup=0; activeTxn=null; nextTxLabel=1; waitingAtStop=[]; phaseStart=now||performance.now(); phase='spawn_unmined'; nextSpawnAt=phaseStart + randSpawnMs(); }
    function reflow(L){ // move mined blocks up and out of the way
      for(let i=0;i<minedBlocks.length;i++){ const b=minedBlocks[i]; b.x=L.stackX; b.y=L.stackTopY - i*L.stackSpacing; b.size=L.cubeSize; }
      if(workingBlock){ workingBlock.x=L.stackX; workingBlock.y=L.workingY; workingBlock.size=L.cubeSize; }
    }

    function randSpawnMs(){ return 200 + Math.random()*1600; } // 0.2s .. 1.8s

    function frame(now){
      const L=getLayout(); ctx.clearRect(0,0,L.width,L.height);
      drawSectionBackgrounds(L);
      // subtle grid
      ctx.save(); ctx.strokeStyle='rgba(0,0,0,0.04)'; ctx.lineWidth=1; const grid=20;
      for(let x=0;x<L.width;x+=grid){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,L.height); ctx.stroke(); }
      for(let y=0;y<L.height;y+=grid){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(L.width,y); ctx.stroke(); }
      ctx.restore();

      // draw mined blocks behind, then working block, then txns (legacy L3 animation)
      for(let i=minedBlocks.length-1;i>=0;i--){ const b=minedBlocks[i]; drawLabeledCube(b.x,b.y,b.size,1,'anime',b.label); if(i<minedBlocks.length-1){ const newer=minedBlocks[i+1]; drawLink(b.x,b.y,newer.x,newer.y);} }
      if(workingBlock){ drawCube(workingBlock.x, workingBlock.y, workingBlock.size, 1, workingBlock.theme || 'unmined'); }

      const elapsed=now-phaseStart;
      if(phase==='spawn_unmined'){
        const L2=getLayout();
        workingBlock = { x:L2.stackX, y:L2.workingY, size:L2.cubeSize, theme:'unmined', accepted:0 };
        activeTxn=null; currentTxnInGroup=0; waitingAtStop=[]; phase='stream_txn'; phaseStart=now; nextSpawnAt = now + randSpawnMs();
      } else if(phase==='stream_txn'){
        const L2=getLayout();
        // spawn new txns at randomized intervals (constant stream)
        if(now >= nextSpawnAt){
          const num = nextTxLabel++;
          const label = String(num);
          // New tx spawns if we don't already have an active moving one; else enqueue immediately
          if(!activeTxn){ activeTxn = { label, num, startTime: now, y: L2.workingY, state:'moving' }; }
          else { waitingAtStop.push({ label, num, y: L2.workingY }); }
          nextSpawnAt = now + randSpawnMs();
        }
        // move active txn along path
        if(activeTxn){
          const t=Math.min(1, (now - activeTxn.startTime)/moveDurationMs);
          const p=easeInOutQuad(t);
          const x=L2.startX + (L2.stopX - L2.startX)*p;
          if (activeTxn.num % 2 === 1) {
            drawTxnSquare(x, activeTxn.y, L2.txSize, activeTxn.label, { textColor:'#000' });
          }
          if(t>=1){
            // at stop point: if block accepting and has capacity, consume; else enqueue waiting
            if(workingBlock && workingBlock.accepted < 3){
              workingBlock.accepted += 1;
              currentTxnInGroup += 1;
            } else {
              waitingAtStop.push({ label: activeTxn.label, num: activeTxn.num, y: activeTxn.y });
            }
            activeTxn=null;
          }
        }
        // Render waiting pile just before stopX
        const pileSpacing = Math.max(10, L2.txSize * 0.35);
        for(let i=0;i<waitingAtStop.length;i++){
          const wx = L2.stopX - i * pileSpacing;
          if (waitingAtStop[i].num % 2 === 1) {
            drawTxnSquare(wx, L2.workingY, L2.txSize, waitingAtStop[i].label, { textColor:'#000' });
          }
        }
        // While block can accept and there is a waiting queue, feed one per ~150ms to visualize intake
        if(workingBlock && workingBlock.accepted < 3 && waitingAtStop.length > 0){
          if(!workingBlock.lastAcceptAt || now - workingBlock.lastAcceptAt > 150){
            waitingAtStop.shift();
            workingBlock.accepted += 1;
            currentTxnInGroup += 1;
            workingBlock.lastAcceptAt = now;
          }
        }
        if(workingBlock && workingBlock.accepted >= 3){ phase='mine_block'; phaseStart=now; }
      } else if(phase==='mine_block'){
        // turn block to mined with label and animate upwards to stack
        const L2=getLayout();
        if(!settleStart){ // initialize
          workingBlock.theme='anime';
          workingBlock.label = `B${currentGroup+1}`;
          minedBlocks.unshift({ x: workingBlock.x, y: workingBlock.y, size: workingBlock.size, label: workingBlock.label });
          workingBlock=null;
          settleStart=now;
        }
        const t=Math.min(1,(now - settleStart)/settleDuration);
        const p=easeInOutQuad(t);
        // animate minedBlocks to target positions (upwards)
        for(let i=0;i<minedBlocks.length;i++){
          const stackTopVisible = computeVisibleStackTopY(L2);
          const targetY = stackTopVisible - i*L2.stackSpacing;
          const b=minedBlocks[i];
          b.y = b.y + (targetY - b.y)*p;
          drawLabeledCube(b.x,b.y,b.size,1,'anime',b.label);
        }
        // While mining animation occurs, transactions continue to spawn but pile up (handled in stream_txn phase); we do not accept here
        if(t>=1){ settleStart=null; currentGroup+=1; phase = (currentGroup<3) ? 'spawn_unmined' : 'compress'; phaseStart=now; }
      } else if(phase==='compress'){
        const t=Math.min(1, elapsed/compressDurationMs); const p=easeInOutQuad(t);
        const stackTopVisible = computeVisibleStackTopY(L);
        // highlight background spanning all three blocks
        if (minedBlocks.length >= 3) {
          const topY = stackTopVisible - 2*L.stackSpacing - L.cubeSize*0.6;
          const heightSpan = 2*L.stackSpacing + L.cubeSize*1.2;
          ctx.save();
          ctx.fillStyle = `rgba(255,214,10,${0.08 + 0.12*p})`;
          ctx.fillRect(L.stackX - L.cubeSize*1.2, topY, L.cubeSize*2.4, heightSpan);
          ctx.restore();
        }
        for(let i=0;i<minedBlocks.length;i++){
          const b=minedBlocks[i];
          const ty= stackTopVisible - i*L.stackSpacing;
          b.y = ty - (ty - stackTopVisible)*p;
          drawLabeledCube(b.x,b.y,b.size*(1-0.25*p),1,'anime',b.label);
        }
        const txnSize=L.txSize*1.3; const bx=L.stackX; const by=stackTopVisible; drawTxnSquare(bx,by,txnSize*p,'Txn',{fill:'rgba(59,130,246,0.28)',stroke:'rgba(59,130,246,0.95)',textColor:'#000'});
        if(t>=1){ blueTxn={x:bx,y:by,size:txnSize}; phase='send'; phaseStart=now; }
      } else if(phase==='send'){
        const t=Math.min(1, elapsed/sendDurationMs); const p=easeInOutQuad(t); const sx=L.stackX, sy=L.stackTopY; const ex=L.l2X - L.cubeSize*0.8, ey=L.l2Y; const x=sx+(ex-sx)*p, y=sy+(ey-sy)*p; drawTxnSquare(x,y,blueTxn.size,'Txn',{fill:'rgba(59,130,246,0.28)',stroke:'rgba(59,130,246,0.95)',textColor:'#000'}); drawLink(sx,sy,L.l2X,L.l2Y); if(t>=1){ phase='l2spawn'; phaseStart=now; }
      } else if(phase==='l2spawn'){
        const t=Math.min(1, elapsed/l2SpawnDurationMs); const s=0.75 + easeOutCubic(t)*0.25; const bx=L.l2X, by=L.l2Y; drawCube(bx,by,L.cubeSize*1.05,s,'l2'); drawTxnSquare(bx - L.cubeSize*0.8, by, L.txSize*1.3,'Txn',{fill:'rgba(59,130,246,0.28)',stroke:'rgba(59,130,246,0.95)',textColor:'#000'}); if(t>=1){ l2Block={x:bx,y:by,size:L.cubeSize*1.05}; phase='finalPause'; phaseStart=now; }
      } else if(phase==='finalPause'){
        if(elapsed>=finalPauseMs){ reset(now); }
      }

      // overlay headers for legibility
      drawSectionHeader(L.sections.l3.cx,18,'AnimeChain (L3)',logos.l3,'rgba(255,247,200,0.96)');
      drawSectionHeader(L.sections.l2.cx,18,'Arbitrum (L2)',logos.l2,'rgba(224,255,250,0.96)');
      drawSectionHeader(L.sections.l1.cx,18,'Ethereum (L1)',logos.l1,'rgba(224,243,255,0.96)');

      requestAnimationFrame(frame);
    }

    // initial reset and start
    reset();
    requestAnimationFrame(frame);

    // handle cleanup on navigation
    const cleanup = () => { window.removeEventListener('resize', onResize); };
    if (!canvas.__cleanup) canvas.__cleanup = cleanup; // simple ref
  }

  function init(){
    // If Material theme provides page navigation events
    if (window.document$ && typeof window.document$.subscribe === 'function') {
      window.document$.subscribe(() => { start(); });
    } else if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  }

  init();
})();

