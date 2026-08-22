  /* ---- experiment 4: gas compression pump ---- */
  const pump = document.getElementById('pump');
  const pumpBtn = document.getElementById('pumpBtn');
  const pumpReset = document.getElementById('pumpReset');
  const volumeLabel = document.getElementById('volumeLabel');
  const volumes = ['١ لتر', '٠.٥ لتر', '٠.٢٥ لتر'];
  let pumpStep = 0;
  pumpBtn.addEventListener('click', () => {
    if(pumpStep >= 2) return;
    pumpStep++;
    pump.classList.remove('p1','p2');
    if(pumpStep >= 1) pump.classList.add('p' + pumpStep);
    volumeLabel.textContent = volumes[pumpStep];
    if(pumpStep >= 2){
      pumpBtn.style.display = 'none';
      pumpReset.style.display = 'inline-block';
    }
  });
  pumpReset.addEventListener('click', () => {
    pumpStep = 0;
    pump.classList.remove('p1','p2');
    volumeLabel.textContent = volumes[0];
    pumpBtn.style.display = 'inline-block';
    pumpReset.style.display = 'none';
  });

