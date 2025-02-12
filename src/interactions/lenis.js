//Setup
import Lenis from '@studio-freight/lenis';

export const initLenis = function () {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    touchMultiplier: 1.5,
    autoResize: true,
  });
  // lenis request animation from
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Keep lenis and scrolltrigger in sync
  lenis.on('scroll', () => {
    if (!ScrollTrigger) return;
    ScrollTrigger.update();
  });
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  ////////////////////////////
  //Control Scrolling

  // re-calculate scroll length when clicked
  // function refreshScroll() {
  //   const triggers = [...document.querySelectorAll('[scroll="refresh"]')];
  //   if (triggers.length === 0) return;
  //   triggers.forEach((item) => {
  //     if (!target) return;
  //     item.addEventListener('click', (event) => {
  //       lenis.resize();
  //     });
  //   });
  // }
  // refreshScroll();

  function refreshScrollOnLazyLoad() {
    const images = [...document.querySelectorAll("img[loading='lazy']")];
    if (images.length === 0) return;
    let resizeTimeout;

    function refreshLenisTimeout() {
      clearTimeout(resizeTimeout); // Cancel previous resize calls
      resizeTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          lenis.resize(); // Recalculate dimensions inside requestAnimationFrame for smoother transitions
        });
      }, 300); // Adjust delay as needed
    }

    images.forEach((img) => {
      img.addEventListener('load', refreshLenisTimeout);
    });
  }
  // refreshScrollOnLazyLoad();

  // anchor links
  function anchorLinks() {
    const anchorLinks = document.querySelectorAll('[scroll-to]');
    if (anchorLinks == null) {
      return;
    }
    anchorLinks.forEach((item) => {
      const targetID = item.getAttribute('scroll-to');
      const target = document.getElementById(targetID);
      if (!target) return;
      item.addEventListener('click', (event) => {
        lenis.scrollTo(target, {
          duration: 1.85,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        });
      });
    });
  }
  anchorLinks();

  // stop page scrolling
  function stopScroll() {
    const stopScrollLinks = document.querySelectorAll('[scroll="stop"]');
    if (stopScrollLinks == null) {
      return;
    }
    stopScrollLinks.forEach((item) => {
      item.addEventListener('click', (event) => {
        lenis.stop();
      });
    });
  }
  stopScroll();

  // start page scrolling
  function startScroll() {
    const startScrollLinks = document.querySelectorAll('[scroll="start"]');
    if (startScrollLinks == null) {
      return;
    }
    startScrollLinks.forEach((item) => {
      item.addEventListener('click', (event) => {
        lenis.start();
      });
    });
  }
  startScroll();

  // toggle page scrolling
  function toggleScroll() {
    const toggleScrollLinks = document.querySelectorAll('[scroll="toggle"]');
    if (toggleScrollLinks == null) {
      return;
    }
    toggleScrollLinks.forEach((item) => {
      let stopScroll = false;
      item.addEventListener('click', (event) => {
        stopScroll = !stopScroll;
        if (stopScroll) lenis.stop();
        else lenis.start();
      });
    });
  }
  toggleScroll();
  //retun lenis so it can be accessed elsewhere
  return lenis;
};
