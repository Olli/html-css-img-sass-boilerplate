
// edgeplaceholders for form fields
export class EdgePlaceholderShownPolyfill {
  constructor() {
    try {
      var placeholders =  document.querySelectorAll('.edge input[placeholder],.edge textarea[placeholder]');
      [].forEach.call(placeholders,function (el) {
        switchInputPlaceholderClass(el);
        el.addEventListener('change', placeholderPolyfillCallback);
        el.addEventListener('keyup', placeholderPolyfillCallback);
      });
    } catch(e){
      return false;
    }
  }

  placeholderPolyfillCallback() {
    switchInputPlaceholderClass(this);
  }

  switchInputPlaceholderClass(element) {
    if(element.value == "") {
      element.classList.add('placeholder-shown');
    } else {
      element.classList.remove('placeholder-shown');
    }
  }
}
