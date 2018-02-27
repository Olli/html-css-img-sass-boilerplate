import baguetteBox  from './vendors/baguetteBox.js/src/baguetteBox.js';
import { scrollTo } from './scrollTo.js';
import { toggleClass } from './mobileNavigation.js';






document.addEventListener("DOMContentLoaded", function(){
  'use strict';
  toggleClass('.nav-trigger.nav-open-trigger','.nav-open .nav-trigger');

});


  //window.setTimeout(function(){new EdgePlaceholderShownPolyfill(); },1000)

;(function(window) {
  	'use strict';

    // Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
    const back_to_top_button = ['<a href="#top" class="back-to-top trigger-btn">\
                                  <span class="text-hide">Nach oben</span></a>'].join("");
    document.body.innerHTML = document.body.innerHTML + back_to_top_button;

     window.addEventListener('scroll',function(){
       if(window.scrollY > 100) {
         document.querySelector('.back-to-top').classList.add('fade-in');
         document.getElementsByTagName("body")[0].classList.add('not-top-anymore')
        } else {
          document.querySelector('.back-to-top').classList.remove('fade-in');
         document.getElementsByTagName("body")[0].classList.remove('not-top-anymore')
        }
   }, { passive: true });


/*
   var options = {
      root: null, //document.querySelector('body'),
      rootMargin: '10px 20px 30px 40px',
      threshold: 0.1
    }

    var callback = function(entries, observer) {
      entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
        console.log(entry)
        if((entry.target.style.position != 'fixed') ){
          entry.target.classList.toggle("fixed-top");
          document.querySelector(".nav-wrap").classList.toggle("fixed-top");
        }
      });

    };
    var observer = new IntersectionObserver(callback, options);
    var target = document.querySelector('#header:not(.fixed-top)');
    observer.observe(target);
*/
    document.querySelector('.back-to-top').addEventListener('click',function(event){
        event.preventDefault();
        scrollTo(document.querySelector('html,body'),800,'easeInOutQuad');
    });

    document.querySelectorAll(".person_item").forEach(function(personItem) {
      personItem.addEventListener('click',function(event){
        event.preventDefault();
        event.currentTarget.classList.toggle("show-info");
        event.currentTarget.parentNode.classList.toggle("info-shown");
      });
    });



    baguetteBox.run('.ce_gallery, .ce_image a[data-lightbox], .ce_text a[data-lightbox] ', {
  		animation: 'fadeIn',
      noScrollbars: false
  	});

    //ieHintEvents();



})(window);
