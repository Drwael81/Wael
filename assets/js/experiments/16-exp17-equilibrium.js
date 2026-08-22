  /* ---- experiment 17: thermal equilibrium ---- */
  const eqMixBtn = document.getElementById('eqMixBtn');
  const eqBarBalls = document.getElementById('eqBarBalls');
  const eqBarWater = document.getElementById('eqBarWater');
  const eqTempBalls = document.getElementById('eqTempBalls');
  const eqTempWater = document.getElementById('eqTempWater');
  let eqMixed = false;
  eqMixBtn.addEventListener('click', () => {
    eqMixed = !eqMixed;
    if(eqMixed){
      eqBarBalls.style.height = '40%';
      eqBarWater.style.height = '40%';
      eqBarBalls.style.background = 'var(--gas)';
      eqBarWater.style.background = 'var(--gas)';
      eqTempBalls.textContent = '٢٨°م';
      eqTempWater.textContent = '٢٨°م';
      eqMixBtn.textContent = 'إعادة الضبط';
    } else {
      eqBarBalls.style.height = '100%';
      eqBarWater.style.height = '15%';
      eqBarBalls.style.background = 'var(--solid)';
      eqBarWater.style.background = 'var(--liquid)';
      eqTempBalls.textContent = '١٠٠°م';
      eqTempWater.textContent = '٢٠°م';
      eqMixBtn.textContent = 'اخلط الكرات مع الماء';
    }
  });

