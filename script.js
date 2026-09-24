/* ==========================================================================
   Eric — 個人網頁的少量互動效果
   1. 向下捲動時，內容極度平滑地「淡入並微微上浮」
   2. 首屏「Hello.」隨捲動緩緩下沉、縮小並淡出
   3. 頁腳年份自動更新
   ========================================================================== */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. 滾動淡入 ---------- */
  const revealItems = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // 只播放一次
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  /* ---------- 2. 首屏淡出 ---------- */
  const hero = document.querySelector('.hero');
  let ticking = false;

  function update() {
    // 捲過首屏高度的 80% 時，動畫剛好完成
    const progress = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
    hero.style.setProperty('--hero-progress', progress.toFixed(4));
    ticking = false;
  }

  if (hero && !reduceMotion) {
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    update();
  }

  /* ---------- 3. 頁腳年份 ---------- */
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
