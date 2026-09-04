  /* ---- Phase 2A: Dynamic category counts from experiments-data.js ---- */
  /* معزولة في دالة خاصة بيها عشان صفر تعارض مع أي متغير في التجارب تحت */
  (function renderCategoryCounts(){
    if (typeof experimentsData === 'undefined' || !Array.isArray(experimentsData)) return;
    const counts = {};
    experimentsData.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    const arabicDigits = n => n.toLocaleString('ar-EG');
    document.querySelectorAll('[data-total-placeholder]').forEach(el => {
      if (experimentsData.length !== undefined) {
        el.textContent = arabicDigits(experimentsData.length) + (el.classList.contains('path-count') ? ' تجربة تفاعلية' : '');
      }
    });
    document.querySelectorAll('.cat-card[data-category]').forEach(card => {
      const cat = card.dataset.category;
      const countEl = card.querySelector('[data-count-placeholder]');
      if (countEl && counts[cat] !== undefined) {
        countEl.textContent = arabicDigits(counts[cat]) + ' تجارب';
      }
    });
  })();
