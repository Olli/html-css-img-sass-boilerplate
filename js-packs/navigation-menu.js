/* cool slide in and out effect in the menu */
export class InitNavigationMenu {
/* back button for navigation */
  constructor(config)  {
    this.config = config || {
      highCalc: false
    }
    
    this._setupBackLink();
    this._setupEvents();
  }


  closeMenu(sub_li_a) {
    // erst mal alles zu machen
    const subMenus = document.querySelectorAll(".mainnav .submenu > a");
    let menuClass = this;

    subMenus.forEach(sub_li_a => {
      sub_li_a.parentNode.parentNode.classList.remove("level_2-open");
      document.querySelectorAll(".submenu-open").forEach(l2_li => {
        l2_li.classList.remove("submenu-open");
        l2_li.style.removeProperty("--overall-height");
        l2_li.removeChild(menuClass.backLink);
      });
    });
  }

  _setupBackLink() {
    const backLink = document.createElement("a");
    backLink.innerText = 'Zurück';
    backLink.href = "#";
    backLink.classList.add("navigation-back-link");
    backLink.addEventListener("click", (event) => {
        event.preventDefault();
        const parent = backLink.parentNode;
        parent.style.removeProperty("--overall-height");
        parent.classList.remove("submenu-open");
        parent.parentNode.classList.remove("level_2-open");
        parent.removeChild(backLink);
    });
    this.backLink = backLink;
  }

  /* helper for mobile css navigation */
  _setupEvents(){
    let menuClass = this;
    const subMenus = document.querySelectorAll(".mainnav .submenu > a");
    subMenus.forEach(sub_li_a => {
      sub_li_a.addEventListener('click', (event) => {
        event.preventDefault();
        menuClass.closeMenu();
        const parent = sub_li_a.parentNode;
        
        /* get offset for adjusting another level ul */
        const offset = parent.offsetTop;
        parent.style.setProperty("--from-top",offset);
        
        /* open menu */
        parent.classList.add("submenu-open");
        
        /* get height of next level ul */
        const clientHeight = parent.querySelector("ul").clientHeight;
        parent.style.setProperty("--overall-height",clientHeight+"px");
        
        parent.parentNode.classList.add("level_2-open");
        parent.appendChild(menuClass.backLink);
      });
    });

    document.addEventListener('keyup', function(ev) {
      // escape key.
      if (ev.code == 'Escape') {
        menuClass.closeMenu();
      }
    });
    window.addEventListener("click", (event) => {
      if(!document.querySelector(".mainnav").contains(event.target)) {
        menuClass.closeMenu();
      }
    });

    /* subscribe to the closed Menu Event */
    document.addEventListener('navigationMenuClosed', (event) => {
      menuClass.closeMenu();
    });
  }
  
}
