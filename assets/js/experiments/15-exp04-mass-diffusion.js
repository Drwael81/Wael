  /* ---- experiment 4: mass affects diffusion ---- */
  const massBtn = document.getElementById('massBtn');
  const massTube = document.getElementById('massTube');
  const massTube2 = document.getElementById('massTube2');
  let massRunning = false;
  massBtn.addEventListener('click', () => {
    massRunning = !massRunning;
    massTube.classList.toggle('mass-running', massRunning);
    massTube2.classList.toggle('mass-running', massRunning);
    massBtn.textContent = massRunning ? 'إعادة الضبط' : 'شغّل المقارنة';
  });

