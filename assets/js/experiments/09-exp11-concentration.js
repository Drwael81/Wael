  /* ---- experiment 9: interactive concentration simulator ---- */
  const glucoseSlider = document.getElementById('glucoseSlider');
  const glucoseAmount = document.getElementById('glucoseAmount');
  const concentrationTag = document.getElementById('concentrationTag');
  const freezeVal = document.getElementById('freezeVal');
  const boilVal = document.getElementById('boilVal');
  const freezeBar = document.getElementById('freezeBar');
  const boilBar = document.getElementById('boilBar');
  const crystals = document.querySelectorAll('.crystal');
  const arabicDigits = n => n.toLocaleString('ar-EG');

  function updateSolution(amount){
    const ratio = amount / 180; // 180 g/L is the textbook reference amount
    const freezeC = -1.86 * ratio;
    const boilC = 100 + 0.5 * ratio;

    glucoseAmount.textContent = arabicDigits(amount);
    freezeVal.textContent = (amount === 0 ? '٠' : arabicDigits(Math.round(freezeC * 100) / 100)) + '°م';
    boilVal.textContent = arabicDigits(Math.round(boilC * 100) / 100) + '°م';

    freezeBar.style.height = (30 + Math.min(ratio, 2) * 35) + '%';
    boilBar.style.height = (30 + Math.min(ratio, 2) * 35) + '%';

    const visibleCrystals = Math.round((amount / 360) * crystals.length);
    crystals.forEach((c, i) => {
      const on = i < visibleCrystals;
      c.style.opacity = on ? '.85' : '0';
      c.style.transform = on ? 'scale(1)' : 'scale(.4)';
    });

    if(amount === 0){
      concentrationTag.textContent = 'ماء نقي 100% — بدون أي مادة مذابة';
    } else if(amount <= 120){
      concentrationTag.textContent = 'تركيز منخفض 🟢';
    } else if(amount <= 250){
      concentrationTag.textContent = 'تركيز متوسط 🟡';
    } else {
      concentrationTag.textContent = 'تركيز مرتفع 🔴';
    }
  }

  glucoseSlider.addEventListener('input', () => updateSolution(parseInt(glucoseSlider.value, 10)));
  updateSolution(0);

