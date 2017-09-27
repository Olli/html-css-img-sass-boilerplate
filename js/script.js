/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.8.2
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.baguetteBox=e()}(this,function(){"use strict";function t(t,n){M.transforms=w(),M.svg=k(),i(),o(t),e(t,n)}function e(t,e){var n=document.querySelectorAll(t),o={galleries:[],nodeList:n};U[t]=o,[].forEach.call(n,function(t){e&&e.filter&&(V=e.filter);var n=[];if(n="A"===t.tagName?[t]:t.getElementsByTagName("a"),n=[].filter.call(n,function(t){return V.test(t.href)}),0!==n.length){var i=[];[].forEach.call(n,function(t,n){var o=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,u(i,e),c(n)},a={eventHandler:o,imageElement:t};E(t,"click",o),i.push(a)}),o.galleries.push(i)}})}function n(){for(var t in U)U.hasOwnProperty(t)&&o(t)}function o(t){if(U.hasOwnProperty(t)){var e=U[t].galleries;[].forEach.call(e,function(t){[].forEach.call(t,function(t){B(t.imageElement,"click",t.eventHandler)}),R===t&&(R=[])}),delete U[t]}}function i(){if(S=T("baguetteBox-overlay"))return P=T("baguetteBox-slider"),F=T("previous-button"),H=T("next-button"),void(L=T("close-button"));S=N("div"),S.setAttribute("role","dialog"),S.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(S),P=N("div"),P.id="baguetteBox-slider",S.appendChild(P),F=N("button"),F.setAttribute("type","button"),F.id="previous-button",F.setAttribute("aria-label","Previous"),F.innerHTML=M.svg?I:"&lt;",S.appendChild(F),H=N("button"),H.setAttribute("type","button"),H.id="next-button",H.setAttribute("aria-label","Next"),H.innerHTML=M.svg?Y:"&gt;",S.appendChild(H),L=N("button"),L.setAttribute("type","button"),L.id="close-button",L.setAttribute("aria-label","Close"),L.innerHTML=M.svg?q:"&times;",S.appendChild(L),F.className=H.className=L.className="baguetteBox-button",r()}function a(t){switch(t.keyCode){case 37:v();break;case 39:h();break;case 27:m()}}function r(){E(S,"click",J),E(F,"click",K),E(H,"click",Q),E(L,"click",Z),E(S,"touchstart",$),E(S,"touchmove",_),E(S,"touchend",tt),E(document,"focus",et,!0)}function l(){B(S,"click",J),B(F,"click",K),B(H,"click",Q),B(L,"click",Z),B(S,"touchstart",$),B(S,"touchmove",_),B(S,"touchend",tt),B(document,"focus",et,!0)}function u(t,e){if(R!==t){for(R=t,s(e);P.firstChild;)P.removeChild(P.firstChild);W.length=0;for(var n,o=[],i=[],a=0;a<t.length;a++)n=N("div"),n.className="full-image",n.id="baguette-img-"+a,W.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),P.appendChild(W[a]);S.setAttribute("aria-labelledby",o.join(" ")),S.setAttribute("aria-describedby",i.join(" "))}}function s(t){t||(t={});for(var e in X)j[e]=X[e],void 0!==t[e]&&(j[e]=t[e]);P.style.transition=P.style.webkitTransition="fadeIn"===j.animation?"opacity .4s ease":"slideIn"===j.animation?"":"none","auto"===j.buttons&&("ontouchstart"in window||1===R.length)&&(j.buttons=!1),F.style.display=H.style.display=j.buttons?"":"none";try{S.style.backgroundColor=j.overlayBackgroundColor}catch(t){}}function c(t){j.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==S.style.display&&(E(document,"keydown",a),z=t,D={count:0,startX:null,startY:null},p(z,function(){x(z),C(z)}),y(),S.style.display="block",j.fullScreen&&f(),setTimeout(function(){S.className="visible",j.afterShow&&j.afterShow()},50),j.onChange&&j.onChange(z,W.length),G=document.activeElement,d())}function d(){j.buttons?F.focus():L.focus()}function f(){S.requestFullscreen?S.requestFullscreen():S.webkitRequestFullscreen?S.webkitRequestFullscreen():S.mozRequestFullScreen&&S.mozRequestFullScreen()}function g(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}function m(){j.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==S.style.display&&(B(document,"keydown",a),S.className="",setTimeout(function(){S.style.display="none",g(),j.afterHide&&j.afterHide()},500),G.focus())}function p(t,e){var n=W[t],o=R[t];if(void 0!==n&&void 0!==o){if(n.getElementsByTagName("img")[0])return void(e&&e());var i=o.imageElement,a=i.getElementsByTagName("img")[0],r="function"==typeof j.captions?j.captions.call(R,i):i.getAttribute("data-caption")||i.title,l=b(i),u=N("figure");if(u.id="baguetteBox-figure-"+t,u.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',j.captions&&r){var s=N("figcaption");s.id="baguetteBox-figcaption-"+t,s.innerHTML=r,u.appendChild(s)}n.appendChild(u);var c=N("img");c.onload=function(){var n=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");u.removeChild(n),!j.async&&e&&e()},c.setAttribute("src",l),c.alt=a?a.alt||"":"",j.titleTag&&r&&(c.title=r),u.appendChild(c),j.async&&e&&e()}}function b(t){var e=t.href;if(t.dataset){var n=[];for(var o in t.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=t.dataset[o]);for(var i=Object.keys(n).sort(function(t,e){return parseInt(t,10)<parseInt(e,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,r=0;r<i.length-1&&i[r]<a;)r++;e=n[i[r]]||e}return e}function h(){var t;return z<=W.length-2?(z++,y(),x(z),t=!0):j.animation&&(P.className="bounce-from-right",setTimeout(function(){P.className=""},400),t=!1),j.onChange&&j.onChange(z,W.length),t}function v(){var t;return z>=1?(z--,y(),C(z),t=!0):j.animation&&(P.className="bounce-from-left",setTimeout(function(){P.className=""},400),t=!1),j.onChange&&j.onChange(z,W.length),t}function y(){var t=100*-z+"%";"fadeIn"===j.animation?(P.style.opacity=0,setTimeout(function(){M.transforms?P.style.transform=P.style.webkitTransform="translate3d("+t+",0,0)":P.style.left=t,P.style.opacity=1},400)):M.transforms?P.style.transform=P.style.webkitTransform="translate3d("+t+",0,0)":P.style.left=t}function w(){var t=N("div");return void 0!==t.style.perspective||void 0!==t.style.webkitPerspective}function k(){var t=N("div");return t.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(t.firstChild&&t.firstChild.namespaceURI)}function x(t){t-z>=j.preload||p(t+1,function(){x(t+1)})}function C(t){z-t>=j.preload||p(t-1,function(){C(t-1)})}function E(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent("on"+e,function(t){t=t||window.event,t.target=t.target||t.srcElement,n(t)})}function B(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent("on"+e,n)}function T(t){return document.getElementById(t)}function N(t){return document.createElement(t)}function A(){l(),n(),B(document,"keydown",a),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),U={},R=[],z=0}var S,P,F,H,L,I='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',Y='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',q='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',j={},X={captions:!0,fullScreen:!1,noScrollbars:!1,titleTag:!1,buttons:"auto",async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},M={},R=[],z=0,D={},O=!1,V=/.+\.(gif|jpe?g|png|webp)/i,U={},W=[],G=null,J=function(t){t.target.id.indexOf("baguette-img")!==-1&&m()},K=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,v()},Q=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,h()},Z=function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0,m()},$=function(t){D.count++,D.count>1&&(D.multitouch=!0),D.startX=t.changedTouches[0].pageX,D.startY=t.changedTouches[0].pageY},_=function(t){if(!O&&!D.multitouch){t.preventDefault?t.preventDefault():t.returnValue=!1;var e=t.touches[0]||t.changedTouches[0];e.pageX-D.startX>40?(O=!0,v()):e.pageX-D.startX<-40?(O=!0,h()):D.startY-e.pageY>100&&m()}},tt=function(){D.count--,D.count<=0&&(D.multitouch=!1),O=!1},et=function(t){"block"===S.style.display&&S.contains&&!S.contains(t.target)&&(t.stopPropagation(),d())};return[].forEach||(Array.prototype.forEach=function(t,e){for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)}),[].filter||(Array.prototype.filter=function(t,e,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)t.call(e,n[i],i,n)&&o.push(n[i]);return o}),{run:t,destroy:A,showNext:h,showPrevious:v}});
/**
 *
 * @param {(number|HTMLElement)} destination - Destination to scroll to (DOM element or number)
 * @param {number} duration - Duration of scrolling animation
 * @param {string} easing - Timing function name (Allowed values: 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint')
 * @param {function} callback - Optional callback invoked after animation
 */
function scrollTo(destination) {
  var duration = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
  var easing = arguments.length <= 2 || arguments[2] === undefined ? 'linear' : arguments[2];
  var callback = arguments[3];
  // Predefine list of available timing functions
  // If you need more, tween js is full of great examples
  // https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L421-L737
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };

  // Store initial position of a window and time
  // If performance is not available in your browser
  // It will fallback to new Date().getTime() - thanks IE < 10
  var start = window.pageYOffset;
  var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  // const startTime = typeof(window.performance['now']) == 'function' ? performance.now() : new Date().getTime();

  // Take height of window and document to sesolve max scrollable value
  // Prevent requestAnimationFrame() from scrolling below maximum scollable value
  // Resolve destination type (node or number)
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  // If requestAnimationFrame is not supported
  // Move window to destination position and trigger callback function
  if ('requestAnimationFrame' in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  // function resolves position of a window and moves to exact amount of pixels
  // Resolved by calculating delta and timing function choosen by user
  function scroll() {
    var now = 'now' in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    // Stop requesting animation when window reached its destination
    // And run a callback function
    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }
      return;
    }

    // If window still needs to scroll to reach destination
    // Request another scroll invokation
    requestAnimationFrame(scroll);
  }

  // Invoke scroll and sequential requestAnimationFrame
  scroll();
}

function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}


function toggleClass( openCtrlSelector, closeCtrlSelector ){


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
      closeCtrl.addEventListener('click', closeNav);
    }

    function setNavClose() {
      var closeCtrl = document.querySelector(closeCtrlSelector);
      closeCtrl.removeEventListener('click', closeNav,false);
      document.body.classList.remove('nav-open');
      openCtrl.addEventListener('click', openNav);

    }


    function openNav(event) {

      event.preventDefault();
      openCtrl.removeEventListener('click',openNav,false);
      setNavOpen()
      history.pushState("", "Navigation " + document.title, window.location.pathname + "#shownav");
    }

    function closeNav(event) {
      event.preventDefault();
      setNavClose();
      history.pushState("", document.title, window.location.pathname);
    }

}


function checkForNavFit(windowHeight) {
  var nav = document.querySelector(".mainnav");
  /* var navStyle = window.getComputedStyle(nav);
  var navHeight = nav.scrollHeight + parseInt(navStyle.marginTop); */
  var navHeight = nav.scrollHeight + parseInt(nav.offsetTop);
  return navHeight < windowHeight ? true : false;

}



document.addEventListener("DOMContentLoaded", function(){
  'use strict';
  toggleClass('#nav-toggle','.nav-open #nav-toggle');
});





;(function(window) {
  	'use strict';

    // Der Button wird mit JavaScript erzeugt und vor dem Ende des body eingebunden.
    var back_to_top_button = ['<a href="#top" class="btn btn-primary back-to-top"><span class="text-hide">Nach oben</span></a>'].join("");

    document.body.innerHTML = document.body.innerHTML + back_to_top_button;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

    /* check if nav fits the window */
    if(!checkForNavFit(windowHeight)) {
      document.getElementsByTagName("body")[0].classList.add("nav-too-big")
    }

    /* turning the tabled should evented and than also check if nav fits the window*/
    window.addEventListener("orientationchange", function() {
      if(!checkForNavFit(windowHeight)) {
        document.getElementsByTagName("body")[0].classList.add("nav-too-big")
      }
    });

    window.addEventListener('scroll',function(){
      if(window.scrollY > 100) {
        document.querySelector('.back-to-top').classList.add('fade-in');
        document.getElementsByTagName("body")[0].classList.add('not-top-anymore')
      } else {
        document.querySelector('.back-to-top').classList.remove('fade-in');
        document.getElementsByTagName("body")[0].classList.remove('not-top-anymore')
      }
      if(window.scrollY > 1) {
        document.getElementById('left').classList.add('scrolled');
      } else {
        document.getElementById('left').classList.remove('scrolled');
      }

    });

    document.querySelector('.back-to-top').addEventListener('click',function(event){
      event.preventDefault();
      scrollTo(document.querySelector('html,body'),800,'easeInOutQuad');
    });


    try {
      document.getElementById('scrolldown-button').addEventListener('click', function(event){
        event.preventDefault();
        scrollTo(document.querySelector('.mod_article:nth-child(2) h1') || document.querySelector('#main .inside *:nth-child(2)'),800,'easeInOutQuad');
      });
    } catch(e) {
      console.log(e);
    }


    baguetteBox.run('.ce_gallery, [data-lightbox] ', {
  		animation: 'fadeIn',
      noScrollbars: false
  	});


})(window);
