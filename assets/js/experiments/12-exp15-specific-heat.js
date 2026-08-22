  /* ---- experiment 13: specific heat (copper vs aluminum) ---- */
  const copperBtn = document.getElementById('copperBtn');
  const cuBar = document.getElementById('cuBar');
  const alBar = document.getElementById('alBar');
  const cuTemp = document.getElementById('cuTemp');
  const alTemp = document.getElementById('alTemp');
  copperBtn.addEventListener('click', () => {
    cuBar.style.height = '92%';
    alBar.style.height = '55%';
    cuTemp.textContent = '٩٧.٩°م';
    alTemp.textContent = '٥٣.٣°م';
  });

