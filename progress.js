(function (window) {
  function animateProgress(options) {
    var delayStart = (options && options.delayStart) || 150;
    var gap = (options && options.gap) || 90;
    var els = document.querySelectorAll('.progress');
    els.forEach(function (p, i) {
      var v = parseInt(p.getAttribute('data-value') || '0', 10);
      var bar = p.querySelector('.progress-bar');
      setTimeout(function () {
        if (bar) bar.style.width = Math.max(0, Math.min(100, v)) + '%';
      }, delayStart + i * gap);
    });
  }
  window.__animateProgress = animateProgress;
})(window);
