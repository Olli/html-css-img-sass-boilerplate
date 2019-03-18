import { scrollTo } from './scrollTo.js';



export function initScrollUpBtn() {

    let isIE = /*@cc_on!@*/false || !!document.documentMode

    // Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
    const back_to_top_button = ['<a href="#top" class="no-btn back-to-top trigger-btn">\
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11 10 6.76l.7.7z"/></svg>\
                                  <span class="invisible">Nach oben</span></a>'].join("");

    document.body.innerHTML = document.body.innerHTML + back_to_top_button;

    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      console.debug("intersection observer ");

      let observer = new IntersectionObserver(entries => {
        if (entries[0].boundingClientRect.y < 0) {
          document.body.classList.add("not-top-anymore");
        } else {
          document.body.classList.remove("not-top-anymore");
        }
      });

      observer.observe(document.querySelector("#observeable"));
    } else {
      console.debug("event listener ");
      window.addEventListener('scroll',function(){
         if(window.scrollY > 100) {
           document.querySelector('.back-to-top').classList.add('fade-in');
           document.getElementsByTagName("body")[0].classList.add('not-top-anymore')
          } else {
            document.querySelector('.back-to-top').classList.remove('fade-in');
           document.getElementsByTagName("body")[0].classList.remove('not-top-anymore')
          }
      }, { passive: true });
    }

    /* if(!isIE) { */
      document.querySelector('.back-to-top').addEventListener('click',function(event){
          event.preventDefault();
          scrollTo(document.querySelector('html,body'),800,'easeInOutQuad');
      });
    /* } */
}
