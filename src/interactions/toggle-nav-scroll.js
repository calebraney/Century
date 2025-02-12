import { ClassWatcher } from '../utilities';

export const toggleNavScroll = function (lenis) {
  const NAV_BUTTON = '.navbar_menu-button'; //default is .w-nav-button
  const OPEN_CLASS = 'w--open';
  const body = document.querySelector('body');

  const navButton = document.querySelector(NAV_BUTTON);
  if (!navButton) return;
  //function to run when active class is added to the item
  function navOpen() {
    // lenis.stop();
    body.style.overflow = 'hidden';
  }
  //function to run when active class is removed from the item
  function navClosed() {
    // lenis.start();
    body.style.overflow = 'visible';
    // console.log('inactive');
  }

  // listen for class changes and run callbacks
  let classWatcher = new ClassWatcher(navButton, OPEN_CLASS, navOpen, navClosed);
};
