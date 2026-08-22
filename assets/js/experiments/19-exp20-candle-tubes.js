  /* ---- extra: candle & two tubes air direction ---- */
  const tubeExpBtn = document.getElementById('tubeExpBtn');
  const tubeExpBox = document.getElementById('tubeExpBox');
  const tubeExpResult = document.getElementById('tube-exp-result');
  tubeExpBtn.addEventListener('click', () => {
    const lit = tubeExpBox.classList.toggle('lit');
    tubeExpResult.style.opacity = lit ? '1' : '0';
    tubeExpBtn.textContent = lit ? 'إطفاء الشمعة' : 'أشعل الشمعة';
  });

