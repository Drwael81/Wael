  /* ---- experiment 12: mass/type/state simulator ---- */
  const simTabs = document.querySelectorAll('.sim-tab');
  const simNameA = document.getElementById('simNameA');
  const simNameB = document.getElementById('simNameB');
  const simTempA = document.getElementById('simTempA');
  const simTempB = document.getElementById('simTempB');
  const simBarA = document.getElementById('simBarA');
  const simBarB = document.getElementById('simBarB');
  const simHeatBtn = document.getElementById('simHeatBtn');
  const simResult = document.getElementById('simResult');

  const simScenarios = {
    mass: {
      nameA: 'ماء ١ كجم', nameB: 'ماء ٠.٥ كجم',
      tempA: '٣٥°م', tempB: '٥٠°م', heightA: '55%', heightB: '75%',
      text: 'كتلة الماء الأصغر (B) ارتفعت درجة حرارتها أكتر من الأكبر (A) بنفس كمية الحرارة، لأن نفس الطاقة اتوزعت على عدد جزيئات أقل.'
    },
    type: {
      nameA: 'ماء ١ كجم', nameB: 'زيت ١ كجم',
      tempA: '٣٠°م', tempB: '٤٥°م', heightA: '50%', heightB: '70%',
      text: 'الزيت (B) ارتفعت درجة حرارته أكتر من الماء (A) بنفس كمية الحرارة، لأن السعة الحرارية للزيت أقل من الماء.'
    },
    state: {
      nameA: 'ماء سائل ٥٠٠ جم', nameB: 'ثلج ٥٠٠ جم',
      tempA: '٢٥°م', tempB: '٤٥°م', heightA: '50%', heightB: '72%',
      text: 'الثلج (B) ارتفعت درجة حرارته أكتر من الماء السائل (A) بنفس كمية الحرارة، لأن السعة الحرارية للثلج أقل من الماء السائل.'
    }
  };

  let currentSim = 'mass';
  function resetSim(){
    simBarA.style.height = '25%';
    simBarB.style.height = '25%';
    const s = simScenarios[currentSim];
    simNameA.textContent = s.nameA;
    simNameB.textContent = s.nameB;
    simTempA.textContent = '٢٠°م';
    simTempB.textContent = '٢٠°م';
  }
  simTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      simTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentSim = tab.dataset.sim;
      resetSim();
    });
  });
  simHeatBtn.addEventListener('click', () => {
    const s = simScenarios[currentSim];
    simBarA.style.height = s.heightA;
    simBarB.style.height = s.heightB;
    simTempA.textContent = s.tempA;
    simTempB.textContent = s.tempB;
    simResult.textContent = s.text;
  });
  resetSim();

