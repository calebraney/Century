import { attr, checkBreakpoints } from '../utilities';

export const marquee = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'marquee';
  const WRAP = '[data-ix-marquee="wrap"]';
  const LIST = '[data-ix-marquee="list"]'; // put on the CMS list wrap element
  const REVERSE = 'data-ix-marquee-reverse'; // needs to be set to true if reversed
  const DURATION = 'data-ix-marquee-duration';
  const CHANGE_SPEED_ON_HOVER = 'data-ix-marquee-accelerate';
  const PAUSE_ON_HOVER = 'data-ix-marquee-hover-pause';

  const wraps = document.querySelectorAll(WRAP);
  if (wraps.length === 0) return;
  wraps.forEach((wrap) => {
    //check to run on breakpoint
    let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;

    const lists = wrap.querySelectorAll(LIST);
    let reverse = attr(false, wrap.getAttribute(REVERSE));
    let duration = attr(30, wrap.getAttribute(DURATION));
    let accelerateOnHover = attr(false, wrap.getAttribute(CHANGE_SPEED_ON_HOVER));
    let pauseOnHover = attr(false, wrap.getAttribute(PAUSE_ON_HOVER));

    let direction = 1;
    if (reverse) {
      direction = -1;
    }
    let tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: 'none',
      },
    });
    tl.fromTo(
      lists,
      {
        xPercent: 0,
      },
      {
        xPercent: -100 * direction,
        duration: duration,
      }
    );
    if (accelerateOnHover) {
      wrap.addEventListener('mouseenter', (event) => {
        tl.timeScale(2);
      });
      wrap.addEventListener('mouseleave', (event) => {
        tl.timeScale(1);
      });
    }
    if (pauseOnHover) {
      wrap.addEventListener('mouseenter', (event) => {
        tl.pause();
      });
      wrap.addEventListener('mouseleave', (event) => {
        tl.Play();
      });
    }
  });
};
