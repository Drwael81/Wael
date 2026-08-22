  /* ---- experiment 21: radiation ---- */
  const radiationBtn = document.getElementById('radiationBtn');
  const radiationResult = document.getElementById('radiationResult');
  const lampIcon = document.getElementById('lampIcon');
  radiationBtn.addEventListener('click', () => {
    radiationResult.classList.add('show');
    lampIcon.style.transform = 'scale(1.15)';
  });
