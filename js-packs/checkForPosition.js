
export function isElementInViewport (el) {

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


export function isAnyPartOfElementInViewport(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    //const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    const horInView = true;
    return (vertInView && horInView);
}

export function isElementInTheMiddle(el) {

    const rect = el.getBoundingClientRect();
    // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= (windowHeight / 3) ) && ((rect.top + rect.height) >= 0);
    //const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    const horInView = true;
    return (vertInView && horInView);
}




export function checkForNavFit(windowHeight) {
  var nav = document.querySelector(".mainnav");
  /* var navStyle = window.getComputedStyle(nav);
  var navHeight = nav.scrollHeight + parseInt(navStyle.marginTop); */
  var navHeight = nav.scrollHeight + parseInt(nav.offsetTop);
  return navHeight < windowHeight ? true : false;

}
