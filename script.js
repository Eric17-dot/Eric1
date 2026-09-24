/* ==========================================================================
   Eric — 個人介紹網頁的少量互動效果
   1. 向下捲動時，內容「淡入並微微上浮」
   2. 捲動後，導航欄底部出現一條細線
   3. 首屏「Hello.」隨捲動優雅地下沉、縮小並淡出
   4. 頁腳年份自動更新
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
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  /* ---------- 2 & 3. 導航欄細線 + 首屏淡出 ---------- */
  const nav = document.getElementById('nav');
  const hero = document.querySelector('.hero');
  let ticking = false;

  function update() {
    const scrollY = window.scrollY;

    nav.classList.toggle('is-scrolled', scrollY > 10);

    if (hero && !reduceMotion) {
      // 捲過首屏高度的 75% 時，動畫剛好完成
      const progress = Math.min(scrollY / (window.innerHeight * 0.75), 1);
      hero.style.setProperty('--hero-progress', progress.toFixed(4));
    }

    ticking = false;
  }

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

  /* ---------- 4. 頁腳年份 ---------- */
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
