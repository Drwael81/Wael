
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

