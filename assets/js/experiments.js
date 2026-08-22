  /* ---- Phase 2A: Dynamic category counts from experiments-data.js ---- */
  /* معزولة في دالة خاصة بيها عشان صفر تعارض مع أي متغير في التجارب تحت */
  (function renderCategoryCounts(){
    if (typeof experimentsData === 'undefined' || !Array.isArray(experimentsData)) return;
    const counts = {};
    experimentsData.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    const arabicDigits = n => n.toLocaleString('ar-EG');
    document.querySelectorAll('.cat-card[data-category]').forEach(card => {
      const cat = card.dataset.category;
      const countEl = card.querySelector('[data-count-placeholder]');
      if (countEl && counts[cat] !== undefined) {
        countEl.textContent = arabicDigits(counts[cat]) + ' تجارب';
      }
    });
  })();

  const cards = ['card-solid','card-liquid','card-gas'];

  function press(id){
    const card = document.getElementById(id);
    card.classList.add('pressed','revealed');
    if(id !== 'card-gas'){
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    }
  }
  function release(id){
    document.getElementById(id).classList.remove('pressed','shake');
  }

  cards.forEach(id => {
    const box = document.getElementById(id.replace('card-','syringe-'));
    const btn = document.querySelector('.press-btn[data-target="'+id+'"]');

    [box, btn].forEach(el => {
      el.addEventListener('mousedown', () => press(id));
      el.addEventListener('touchstart', () => press(id), {passive:true});
      el.addEventListener('mouseup', () => release(id));
      el.addEventListener('mouseleave', () => release(id));
      el.addEventListener('touchend', () => release(id));
      el.addEventListener('touchcancel', () => release(id));
    });
    box.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); press(id); setTimeout(()=>release(id), 500); }
    });
  });

  const masterBtn = document.getElementById('masterBtn');
  let allPressed = false;
  masterBtn.addEventListener('click', () => {
    allPressed = !allPressed;
    masterBtn.textContent = allPressed ? 'حرّر المحاقن الثلاث' : 'اضغط على الثلاث معًا';
    masterBtn.classList.toggle('on', allPressed);
    cards.forEach(id => allPressed ? press(id) : release(id));
  });

  /* ---- experiment 2: diffusion toggle buttons ---- */
  document.querySelectorAll('.press-btn[data-toggle="diffused"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = document.getElementById(btn.dataset.target);
      const on = card.classList.toggle('diffused');
      card.classList.toggle('revealed', on);
      btn.textContent = on ? 'إعادة الضبط' : 'شغّل الانتشار';
    });
  });

  document.querySelectorAll('.press-btn[data-toggle="reveal"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = document.getElementById(btn.dataset.target);
      card.classList.toggle('revealed');
    });
  });

  /* ---- experiment 3: ammonia / HCl race ---- */
  const raceBtn = document.getElementById('raceBtn');
  const raceTube = document.getElementById('race-tube');
  const raceResult = document.getElementById('race-result');
  let raceRunning = false;
  raceBtn.addEventListener('click', () => {
    raceRunning = !raceRunning;
    raceTube.classList.toggle('running', raceRunning);
    raceBtn.textContent = raceRunning ? 'إعادة الضبط' : 'شغّل التجربة';
    raceResult.style.opacity = raceRunning ? '1' : '0';
  });

  /* ---- experiment 4: gas compression pump ---- */
  const pump = document.getElementById('pump');
  const pumpBtn = document.getElementById('pumpBtn');
  const pumpReset = document.getElementById('pumpReset');
  const volumeLabel = document.getElementById('volumeLabel');
  const volumes = ['١ لتر', '٠.٥ لتر', '٠.٢٥ لتر'];
  let pumpStep = 0;
  pumpBtn.addEventListener('click', () => {
    if(pumpStep >= 2) return;
    pumpStep++;
    pump.classList.remove('p1','p2');
    if(pumpStep >= 1) pump.classList.add('p' + pumpStep);
    volumeLabel.textContent = volumes[pumpStep];
    if(pumpStep >= 2){
      pumpBtn.style.display = 'none';
      pumpReset.style.display = 'inline-block';
    }
  });
  pumpReset.addEventListener('click', () => {
    pumpStep = 0;
    pump.classList.remove('p1','p2');
    volumeLabel.textContent = volumes[0];
    pumpBtn.style.display = 'inline-block';
    pumpReset.style.display = 'none';
  });

  /* ---- experiment 5: altitude & boiling point ---- */
  const altData = {
    '0':    { temp: '١٠٠°م', pressure: '١ ضغط جوي', speed: 'fast' },
    '1800': { temp: '٩٤°م',  pressure: '٠.٨ ضغط جوي', speed: '' },
    '3000': { temp: '٩٠°م',  pressure: '٠.٦٩ ضغط جوي', speed: 'slow' }
  };
  const altBtns = document.querySelectorAll('.alt-btn[data-alt]');
  const potVisual = document.getElementById('potVisual');
  const boilReadout = document.getElementById('boilReadout');
  const altReadout = document.getElementById('altReadout');
  altBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      altBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const d = altData[btn.dataset.alt];
      boilReadout.textContent = 'تغلي عند ' + d.temp;
      altReadout.textContent = 'الضغط الجوي: ' + d.pressure;
      potVisual.classList.remove('slow','fast');
      if(d.speed) potVisual.classList.add(d.speed);
    });
  });
  altBtns[0].classList.add('active');

  /* ---- experiment 6: pull-apart particle game ---- */
  const tensionText = {
    'pull-solid':  'قوية جدًا 💪 مستحيل تتفصل',
    'pull-liquid': 'متوسطة 🌊 اتحركت بس رجعت',
    'pull-gas':    'ضعيفة جدًا 💨 اتفصلت فورًا'
  };
  document.querySelectorAll('.particle-lab').forEach(lab => {
    const tag = lab.querySelector('.tension-tag span');
    const card = lab.closest('.card');
    const btn = document.querySelector('.press-btn[data-pull="' + lab.id + '"]');
    const startPull = () => {
      lab.classList.add('pulling');
      card.classList.add('revealed');
      tag.textContent = tensionText[lab.id];
    };
    const endPull = () => { lab.classList.remove('pulling'); };
    [lab, btn].forEach(el => {
      el.addEventListener('mousedown', startPull);
      el.addEventListener('touchstart', startPull, {passive:true});
      el.addEventListener('mouseup', endPull);
      el.addEventListener('mouseleave', endPull);
      el.addEventListener('touchend', endPull);
      el.addEventListener('touchcancel', endPull);
    });
  });

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

  /* ---- experiment 8: sublimation / deposition ---- */
  const subTube = document.getElementById('subTube');
  document.getElementById('heatBtn').addEventListener('click', () => subTube.classList.add('sublimed'));
  document.getElementById('coolBtn').addEventListener('click', () => subTube.classList.remove('sublimed'));

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

  /* ---- experiment 14: pressure cooker ---- */
  const potTabs = document.querySelectorAll('.pot-tab');
  const potVisualBig = document.getElementById('potVisualBig');
  const potBoilReadout = document.getElementById('potBoilReadout');
  const potTimeBar = document.getElementById('potTimeBar');
  const potTimeValue = document.getElementById('potTimeValue');
  potTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      potTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if(tab.dataset.pot === 'pressure'){
        potVisualBig.textContent = '🔒';
        potBoilReadout.textContent = 'تغلي عند أكتر من ١٠٠°م (ضغط مرتفع)';
        potTimeBar.style.width = '20%';
        potTimeBar.style.background = 'var(--gas)';
        potTimeValue.textContent = '٢٠٪ من الوقت فقط (يوفر ٧٠-٩٠٪)';
      } else {
        potVisualBig.textContent = '🍲';
        potBoilReadout.textContent = 'تغلي عند ١٠٠°م';
        potTimeBar.style.width = '100%';
        potTimeBar.style.background = 'var(--solid)';
        potTimeValue.textContent = '١٠٠٪ (الوقت الكامل)';
      }
    });
  });

  /* ---- experiment 3: tea diffusion (temperature) ---- */
  const teaTabs = document.querySelectorAll('.temp-tab');
  const teaCup = document.getElementById('teaCup');
  const teaRateTag = document.getElementById('teaRateTag');
  const teaRunBtn = document.getElementById('teaRunBtn');
  let teaMode = 'cold';
  teaTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      teaTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      teaMode = tab.dataset.temp;
      teaCup.classList.remove('steeped');
      teaRateTag.textContent = teaMode === 'hot' ? 'سرعة الانتشار: سريعة جدًا 🔥' : 'سرعة الانتشار: بطيئة 🐢';
    });
  });
  teaRunBtn.addEventListener('click', () => {
    teaCup.classList.toggle('steeped');
  });

  /* ---- experiment 4: mass affects diffusion ---- */
  const massBtn = document.getElementById('massBtn');
  const massTube = document.getElementById('massTube');
  const massTube2 = document.getElementById('massTube2');
  let massRunning = false;
  massBtn.addEventListener('click', () => {
    massRunning = !massRunning;
    massTube.classList.toggle('mass-running', massRunning);
    massTube2.classList.toggle('mass-running', massRunning);
    massBtn.textContent = massRunning ? 'إعادة الضبط' : 'شغّل المقارنة';
  });

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

  /* ---- extra: candle & two tubes air direction ---- */
  const tubeExpBtn = document.getElementById('tubeExpBtn');
  const tubeExpBox = document.getElementById('tubeExpBox');
  const tubeExpResult = document.getElementById('tube-exp-result');
  tubeExpBtn.addEventListener('click', () => {
    const lit = tubeExpBox.classList.toggle('lit');
    tubeExpResult.style.opacity = lit ? '1' : '0';
    tubeExpBtn.textContent = lit ? 'إطفاء الشمعة' : 'أشعل الشمعة';
  });

  /* ---- experiment 21: radiation ---- */
  const radiationBtn = document.getElementById('radiationBtn');
  const radiationResult = document.getElementById('radiationResult');
  const lampIcon = document.getElementById('lampIcon');
  radiationBtn.addEventListener('click', () => {
    radiationResult.classList.add('show');
    lampIcon.style.transform = 'scale(1.15)';
  });
