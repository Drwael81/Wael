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

