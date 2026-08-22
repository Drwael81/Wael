  /* ---- experiment 8: sublimation / deposition ---- */
  const subTube = document.getElementById('subTube');
  document.getElementById('heatBtn').addEventListener('click', () => subTube.classList.add('sublimed'));
  document.getElementById('coolBtn').addEventListener('click', () => subTube.classList.remove('sublimed'));

