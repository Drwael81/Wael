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

