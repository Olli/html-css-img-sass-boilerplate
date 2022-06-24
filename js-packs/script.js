
import baguetteBox  from './baguettebox.js';
import { scrollTo } from './scrollTo.js';
import { toggleClass } from './mobileNavigation.js';
import { initScrollUpBtn } from './scrollup.js';
import './modernizr.js';

let isIE = /*@cc_on!@*/false || !!document.documentMode


document.addEventListener("DOMContentLoaded", function(){
  'use strict';
    //toggleClass('.nav-trigger.nav-open-trigger','.nav-open .nav-trigger.nav-close-trigger');
    toggleClass('#header .nav-trigger','#header .nav-trigger');
  }
  
  toggleClass('#header .nav-trigger','#header .nav-trigger');
  const navigationMenu = new InitNavigationMenu();

  // load ie11 css vars polyfill
  if(isIE) {
     let s = document.createElement('script');
     s.onload = function() {
       cssVars();
     }
     s.src = 'files/template/js/css-vars-ponyfill.min.js';
     document.getElementsByTagName('head')[0].appendChild(s);
  }
  document.body.parentElement.classList.remove("no-js");

  baguetteBox.run('.ce_gallery, .ce_image a[data-lightbox], .ce_text a[data-lightbox] ', {
    animation: 'fadeIn',
    noScrollbars: false
  });

  //ieHintEvents();
});




// weil js über script ganz unten und defer geladen wird
//document.addEventListener("load",function(){
//  'use strict';
   initScrollUpBtn();
//});
