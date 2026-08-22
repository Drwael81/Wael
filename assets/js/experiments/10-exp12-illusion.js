  /* ---- experiment 10: heat perception illusion ---- */
  const step1 = document.getElementById('illusionStep1');
  const step2 = document.getElementById('illusionStep2');
  const res1 = document.getElementById('illusionResult1');
  const res2 = document.getElementById('illusionResult2');
  step1.addEventListener('click', () => {
    res1.classList.add('show');
    step2.disabled = false;
  });
  step2.addEventListener('click', () => {
    res2.classList.add('show');
  });

