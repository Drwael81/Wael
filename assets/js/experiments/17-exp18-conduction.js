  /* ---- experiment 18: conduction rod race ---- */
  const rodBtn = document.getElementById('rodBtn');
  const rodCopper = document.getElementById('rodCopper');
  const rodIron = document.getElementById('rodIron');
  rodBtn.addEventListener('click', () => {
    rodCopper.classList.remove('dropping');
    rodIron.classList.remove('dropping');
    void rodCopper.offsetWidth;
    rodCopper.classList.add('dropping');
    rodIron.classList.add('dropping');
  });

