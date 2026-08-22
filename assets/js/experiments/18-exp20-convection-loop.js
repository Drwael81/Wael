  /* ---- experiment 20: convection (slider-driven loop) ---- */
  const heatSlider = document.getElementById('heatSlider');
  const heatLevel = document.getElementById('heatLevel');
  const convBeaker = document.getElementById('convBeaker');
  const convResult = document.getElementById('conv-result');
  heatSlider.addEventListener('input', () => {
    const v = parseInt(heatSlider.value, 10);
    if(v === 0){
      convBeaker.classList.remove('flowing');
      heatLevel.textContent = 'إيقاف';
      convResult.style.opacity = '0';
      return;
    }
    convBeaker.classList.add('flowing');
    convResult.style.opacity = '1';
    const duration = 4.5 - (v / 100) * 3.7; // faster loop as heat increases
    document.getElementById('convDotA').style.animationDuration = duration + 's';
    document.getElementById('convDotB').style.animationDuration = duration + 's';
    heatLevel.textContent = v < 40 ? 'منخفضة 🔥' : v < 75 ? 'متوسطة 🔥🔥' : 'عالية جدًا 🔥🔥🔥';
  });

