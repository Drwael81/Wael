  /* ---- experiment 5: altitude & boiling point ---- */
  const altData = {
    '0':    { temp: '١٠٠°م', pressure: '١ ضغط جوي', speed: 'fast' },
    '1800': { temp: '٩٤°م',  pressure: '٠.٨ ضغط جوي', speed: '' },
    '3000': { temp: '٩٠°م',  pressure: '٠.٦٩ ضغط جوي', speed: 'slow' }
  };
  const altBtns = document.querySelectorAll('.alt-btn[data-alt]');
  const potVisual = document.getElementById('potVisual');
  const boilReadout = document.getElementById('boilReadout');
  const altReadout = document.getElementById('altReadout');
  altBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      altBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const d = altData[btn.dataset.alt];
      boilReadout.textContent = 'تغلي عند ' + d.temp;
      altReadout.textContent = 'الضغط الجوي: ' + d.pressure;
      potVisual.classList.remove('slow','fast');
      if(d.speed) potVisual.classList.add(d.speed);
    });
  });
  altBtns[0].classList.add('active');

