  /* ---- experiment 3: ammonia / HCl race ---- */
  const raceBtn = document.getElementById('raceBtn');
  const raceTube = document.getElementById('race-tube');
  const raceResult = document.getElementById('race-result');
  let raceRunning = false;
  raceBtn.addEventListener('click', () => {
    raceRunning = !raceRunning;
    raceTube.classList.toggle('running', raceRunning);
    raceBtn.textContent = raceRunning ? 'إعادة الضبط' : 'شغّل التجربة';
    raceResult.style.opacity = raceRunning ? '1' : '0';
  });

