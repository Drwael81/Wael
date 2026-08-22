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

