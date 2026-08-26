/* ============================================================
   Site Enhancements — تحسينات واجهة عامة لكل الصفحات
   1) شريط تقدم القراءة أعلى الصفحة
   2) زر العودة لأعلى
   3) ظل الهيدر عند التمرير
   4) أنيميشن ظهور تدريجي للعناصر عند دخولها الشاشة
   كل حاجة هنا اختيارية وآمنة: لو الـ JS فشل الموقع يفضل شغال عادي.
   ============================================================ */
(function () {
  'use strict';

  var docEl = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1) شريط تقدم القراءة ---- */
  var progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  /* ---- 2) زر العودة لأعلى ---- */
  var toTop = document.createElement('a');
  toTop.href = '#top';
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'العودة لأعلى');
  toTop.textContent = '↑';
  document.body.appendChild(toTop);

  /* ---- 3 + 1) معالجة التمرير (مجمّعة في rAF واحدة) ---- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var scrollTop = window.scrollY || docEl.scrollTop || 0;
      var max = (docEl.scrollHeight - window.innerHeight) || 1;
      var p = Math.min(Math.max(scrollTop / max, 0), 1);

      progress.style.setProperty('--progress', p.toFixed(4));
      toTop.classList.toggle('show', scrollTop > 600);
      document.body.classList.toggle('scrolled', scrollTop > 8);

      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---- 4) ظهور تدريجي عند التمرير ---- */
  if (!('IntersectionObserver' in window) || reduceMotion) return;

  var targets = [
    '.experiment',
    '.path-card',
    '.cat-card',
    '.lesson-card',
    '.quiz-card',
    '.section-divider',
    '.jump-nav',
    '.conclusion',
    '.coming-soon'
  ].join(',');

  var nodes = document.querySelectorAll(targets);
  if (!nodes.length) return;

  docEl.classList.add('reveal-on');

  Array.prototype.forEach.call(nodes, function (el) {
    el.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });

  Array.prototype.forEach.call(nodes, function (el) { io.observe(el); });
})();
