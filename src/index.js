import { attr } from './utilities';
import { accordion } from './interactions/accordion';
import { hoverActive } from './interactions/hover-active';
import { load } from './interactions/load';
import { initLenis } from './interactions/lenis';
import { marquee } from './interactions/marquee';
import { scrollIn } from './interactions/scroll-in';
import { scrolling } from './interactions/scrolling';
import { createSlider } from './interactions/slider';
import { toggleNavScroll } from './interactions/toggle-nav-scroll';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  // console.log('Local Script');
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  //////////////////////////////
  //Global Variables
  let lenis;

  //////////////////////////////
  //Slider instances
  const homeStatsSlider = function () {
    const COMPONENT = '.stats_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      direction: 'vertical',
      loop: true,
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: false,
      pagination: true,
      scrollbar: false,
      autoplay: { delay: 5000 },
    };
    const sliders = createSlider(components, options, modules);
  };

  const historySlider = function () {
    const COMPONENT = '.timeline_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      spaceBetween: 32,
      slidesPerView: 2,
      breakpoints: {
        // when window width is >= 320px
        100: {
          slidesPerView: 1,
        },
        479: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
      },
      loop: false,
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: true,
      pagination: false,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };

  const testimonialSlider = function () {
    const COMPONENT = '.testimonial_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      slidesPerView: 1,
      speed: 1200,
      loop: false,
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: true,
      pagination: true,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };

  const careersCardSlider = function () {
    const COMPONENT = '.card-slider_component';
    const components = [...document.querySelectorAll(COMPONENT)];
    const options = {
      slidesPerView: 1,
      loop: true,
    };
    //apply a module with defaults settings (canc override them using the options object above)
    const modules = {
      navigation: true,
      pagination: false,
      scrollbar: false,
      autoplay: false,
    };
    const sliders = createSlider(components, options, modules);
  };

  //////////////////////////////
  //Unique Interactions

  const patnerNumbers = function () {
    const COMPONENT = '[data-ix-partner="wrap"]';
    const NUMBER = '[data-ix-partner="number"]';
    const ITEM = '[data-ix-partner="item"]';

    //elements
    const components = [...document.querySelectorAll(COMPONENT)];

    //guard clause
    if (!components.length === 0) return;
    components.forEach(function (component, index) {
      const numbers = [...component.querySelectorAll(NUMBER)];
      const items = [...component.querySelectorAll(ITEM)];
      if (!items.length === 0) return;

      //for each item
      items.forEach(function (item, index) {
        const itemNumber = numbers[index];
        const prevNumber = numbers[index - 1];
        const nextNumber = numbers[index + 1];
        //except on first item
        if (index !== 0) {
          let scrollIn = gsap.timeline({
            defaults: {
              duration: 1,
              ease: 'power2.out',
            },
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 50%',
              scrub: true,
            },
          });
          scrollIn.set(
            itemNumber,
            {
              opacity: 1,
            },
            '<'
          );
          scrollIn.to(
            prevNumber,
            {
              yPercent: -100,
            },
            '<'
          );
          scrollIn.fromTo(
            itemNumber,
            {
              yPercent: 100,
            },
            {
              yPercent: 0,
            },
            '<'
          );
        }

        // let scrollOut = gsap.timeline({
        //   defaults: {
        //     duration: 1,
        //     ease: 'power2.out',
        //   },
        //   scrollTrigger: {
        //     trigger: item,
        //     start: 'top 90%',
        //     end: 'top 75%',
        //     scrub: true,
        //   },
        // });
        // scrollOut.to(
        //   numbers,
        //   {
        //     yPercent: 0,
        //   },
        //   {
        //     yPercent: 50,
        //   }
        // );
      });
    });
  };

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        lenis = initLenis();
        load(gsapContext);
        toggleNavScroll(lenis);
        accordion(gsapContext);
        marquee(gsapContext);
        // sliders;
        homeStatsSlider();
        historySlider();
        testimonialSlider();
        careersCardSlider();
        //functional interactions
        hoverActive(gsapContext);
        patnerNumbers();
        //conditional interactions
        if (!reduceMotion) {
          scrollIn(gsapContext);
          scrolling(gsapContext);
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();
});
