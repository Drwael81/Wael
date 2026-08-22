  /* ---- experiment 7: single adjustable-mouth evaporation ---- */
  const mouthSlider = document.getElementById('mouthSlider');
  const mouthLabel = document.getElementById('mouthLabel');
  const evapRateTag = document.getElementById('evapRateTag');
  const evapSingle = document.getElementById('evapSingle');
  const evapSingleWater = document.getElementById('evapSingleWater');
  const evapArrows = document.getElementById('evapArrows');
  const evapRunBtn = document.getElementById('evapRunBtn');

  function updateMouth(width){
    evapSingle.style.width = width + 'px';
    if(width < 60){ mouthLabel.textContent = 'ضيقة جدًا'; evapRateTag.textContent = 'معدل التبخر المتوقع: بطيء جدًا 🐢'; }
    else if(width < 100){ mouthLabel.textContent = 'متوسطة'; evapRateTag.textContent = 'معدل التبخر المتوقع: متوسط 🙂'; }
    else { mouthLabel.textContent = 'واسعة جدًا'; evapRateTag.textContent = 'معدل التبخر المتوقع: سريع جدًا 🔥'; }
    evapSingleWater.style.height = '75%';
    evapArrows.classList.remove('active');
  }
  mouthSlider.addEventListener('input', () => updateMouth(parseInt(mouthSlider.value, 10)));
  updateMouth(30);

  evapRunBtn.addEventListener('click', () => {
    const width = parseInt(mouthSlider.value, 10);
    const finalHeight = 75 - ((width - 30) / (140 - 30)) * 55; // wider mouth -> lower final level
    evapSingleWater.style.height = finalHeight + '%';
    evapArrows.classList.add('active');
    setTimeout(() => evapArrows.classList.remove('active'), 2600);
  });

