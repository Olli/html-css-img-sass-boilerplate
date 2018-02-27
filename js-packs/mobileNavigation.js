export function toggleClass( openCtrlSelector, closeCtrlSelector ){


    var openCtrl = document.querySelector(openCtrlSelector),
      closeCtrl = document.querySelector(closeCtrlSelector);


    init();

    function init() {
      initEvents();
    }

    function initEvents() {
      if(window.location.hash === "#shownav") {
        setNavOpen();
      } else {
        openCtrl.addEventListener('click', openNav);
      }
      document.addEventListener('keyup', function(ev) {
        // escape key.
        if( ev.keyCode == 27 ) {
          closeNav(ev);
        }
      });

      window.onpopstate = function(event){
        if(window.location.hash !== "#shownav") {
          setNavClose();
        }
      }
    }

    function setNavOpen() {
      document.body.classList.add('nav-open');
      var closeCtrl = document.querySelector(closeCtrlSelector);

      // aria kram
      let ariaExpanded = openCtrl.getAttribute('aria-expanded') === 'false' ? true : false ;
      openCtrl.setAttribute('aria-expanded', ariaExpanded);

      closeCtrl.addEventListener('click', closeNav);
    }

    function setNavClose() {
      var closeCtrl = document.querySelector(closeCtrlSelector);

      // aria kram
      let ariaExpanded = openCtrl.getAttribute('aria-expanded') === 'true' ? true : false ;
      openCtrl.setAttribute('aria-expanded', !ariaExpanded);


      closeCtrl.removeEventListener('click', closeNav,false);
      document.body.classList.remove('nav-open');
      openCtrl.addEventListener('click', openNav);

    }


    function openNav(event) {

      event.preventDefault();
      openCtrl.removeEventListener('click',openNav,false);
      setNavOpen();



      history.pushState("", "Navigation " + document.title, window.location.pathname + "#shownav");
    }

    function closeNav(event) {
      event.preventDefault();

      setNavClose();


      history.pushState("", document.title, window.location.pathname);
    }

}
