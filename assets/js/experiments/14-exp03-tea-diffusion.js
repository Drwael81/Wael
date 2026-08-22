  /* ---- experiment 3: tea diffusion (temperature) ---- */
  const teaTabs = document.querySelectorAll('.temp-tab');
  const teaCup = document.getElementById('teaCup');
  const teaRateTag = document.getElementById('teaRateTag');
  const teaRunBtn = document.getElementById('teaRunBtn');
  let teaMode = 'cold';
  teaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      teaTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      teaMode = tab.dataset.temp;
      teaCup.classList.remove('steeped');
      teaRateTag.textContent = teaMode === 'hot' ? 'سرعة الانتشار: سريعة جدًا 🔥' : 'سرعة الانتشار: بطيئة 🐢';
    });
  });
  teaRunBtn.addEventListener('click', () => {
    teaCup.classList.toggle('steeped');
  });

