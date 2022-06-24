export function toggleClass(openCtrlSelector, closeCtrlSelector) {


  let openCtrl = document.querySelector(openCtrlSelector);
  let closeCtrl = document.querySelector(closeCtrlSelector);


  init();

  function init() {
    initEvents();
  }

  function initEvents() {

    openCtrl.addEventListener('click', openNav);
    document.addEventListener('keyup', function(ev) {
      // escape key.
      if (ev.keyCode == 27) {
        closeNav(ev);
      }
    });

  }

  function setNavOpen() {
    document.body.classList.add('nav-open');
    let closeCtrl = document.querySelector(closeCtrlSelector);

    // aria kram
    let ariaExpanded = openCtrl.getAttribute('aria-expanded') === 'false' ? true : false;
    openCtrl.setAttribute('aria-expanded', ariaExpanded);

    closeCtrl.addEventListener('click', closeNav);
  }

  function setNavClose() {
    let closeCtrl = document.querySelector(closeCtrlSelector);

    // aria kram
    let ariaExpanded = openCtrl.getAttribute('aria-expanded') === 'true' ? true : false;
    openCtrl.setAttribute('aria-expanded', !ariaExpanded);


    closeCtrl.removeEventListener('click', closeNav, false);
    document.body.classList.remove('nav-open');
    openCtrl.addEventListener('click', openNav);

  }


  function openNav(event) {
    event.preventDefault();
    openCtrl.removeEventListener('click', openNav, false);
    setNavOpen();
  }

  function closeNav(event) {
    event.preventDefault();
    const closeEvent = new Event('navigationMenuClosed');
    document.dispatchEvent(closeEvent);
    setNavClose();


  }

}
