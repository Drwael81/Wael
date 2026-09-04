/* Science Craft — Unified Scoring Bridge
   محفوظ محليًا (localStorage) — بدون سيرفر، متوافق مع GitHub Pages
   API: window.ScienceCraftScores
     get(gameId)        -> آخر سجل أو null
     getAttempts(gameId)-> عدد المحاولات
     record(payload)    -> تسجيل نتيجة / إنهاء، وإرجاع السجل الجديد
     on(fn)             -> اشتراك في حدث 'sciencecraft:score'
     reset(gameId)      -> حذف أفضل نتيجة لعبة
   normalizedScore: دائمًا نسبة 0-100 موحّدة للمقارنة بين الألعاب. */
(function () {
  'use strict';

  var PREFIX = 'sciencecraft-best-';
  var ATTEMPT_PREFIX = 'sciencecraft-attempts-';

  function getStore() {
    try { return window.localStorage; } catch (e) { return null; }
  }
  function read(key) {
    var store = getStore();
    if (!store) return null;
    try { return store.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    var store = getStore();
    if (!store) return;
    try { store.setItem(key, value); } catch (e) { /* private mode */ }
  }
  function toNum(v) {
    var n = parseFloat(v);
    return isFinite(n) ? n : null;
  }
  function normalize(p) {
    if (p.normalizedScore != null) return Math.max(0, Math.min(100, p.normalizedScore));
    if (p.maxScore > 0 && p.score != null) {
      return Math.max(0, Math.min(100, (p.score / p.maxScore) * 100));
    }
    if (p.score != null && (p.scoringType === 'points' || p.scoringType === 'hits')) {
      return Math.max(0, Math.min(100, p.score));
    }
    return null;
  }

  var S = {
    PREFIX: PREFIX,
    get: function (gameId) {
      if (!gameId) return null;
      var raw = read(PREFIX + gameId);
      if (!raw) return null;
      try { return JSON.parse(raw); } catch (e) { return null; }
    },
    getAttempts: function (gameId) {
      if (!gameId) return 0;
      return toNum(read(ATTEMPT_PREFIX + gameId)) || 0;
    },
    record: function (payload) {
      if (!payload || !payload.gameId) return null;
      var prev = S.get(payload.gameId);
      var attempts = S.getAttempts(payload.gameId);
      if (payload.attempts != null && isFinite(payload.attempts)) attempts = Math.max(0, toNum(payload.attempts));
      else if (payload.completion || payload.score != null) attempts += 1;

      var normalizedScore = normalize(payload);
      var best = (prev && prev.normalizedScore != null) ? prev.normalizedScore : null;
      if (normalizedScore != null && (best == null || normalizedScore > best)) best = normalizedScore;

      var rec = {
        gameId: payload.gameId,
        score: (payload.score != null ? payload.score : (prev ? prev.score : null)),
        maxScore: (payload.maxScore != null ? payload.maxScore : (prev ? prev.maxScore : null)),
        normalizedScore: best,
        time: (payload.time != null ? payload.time : (prev ? prev.time : null)),
        accuracy: (payload.accuracy != null ? payload.accuracy : (prev ? prev.accuracy : null)),
        completion: !!payload.completion,
        attempts: attempts,
        updatedAt: Date.now()
      };
      write(PREFIX + payload.gameId, JSON.stringify(rec));
      write(ATTEMPT_PREFIX + payload.gameId, String(attempts));
      try {
        var ev = new CustomEvent('sciencecraft:score', { detail: rec });
        window.dispatchEvent(ev);
      } catch (e) { /* no-op */ }
      return rec;
    },
    on: function (fn) {
      if (typeof fn === 'function') window.addEventListener('sciencecraft:score', fn);
    },
    reset: function (gameId) {
      if (!gameId) return;
      write(PREFIX + gameId, '');
      try {
        var store = getStore();
        if (store) store.removeItem(PREFIX + gameId);
      } catch (e) { /* no-op */ }
    }
  };

  window.ScienceCraftScores = S;
})();