/* cool slide in and out effect in the menu */
export function initNavigationMenu() {
/* back button for navigation */
  const backLink = document.createElement("a");
        backLink.innerText = 'Zurück';
        backLink.href = "#";
        backLink.classList.add("navigation-back-link");
        backLink.addEventListener("click", (event) => {
          event.preventDefault();
          backLink.parentNode.classList.remove("submenu-open");
          backLink.parentNode.parentNode.classList.remove("level_2-open");
          backLink.parentNode.removeChild(backLink);
        });

  function closeMenu(sub_li_a) {
    // erst mal alles zu machen
    const subMenus = document.querySelectorAll(".mainnav .submenu > a");
    subMenus.forEach(sub_li_a => {
      sub_li_a.parentNode.parentNode.classList.remove("level_2-open");
      document.querySelectorAll(".submenu-open").forEach(l2_li => {
        l2_li.classList.remove("submenu-open");
      });
    });
  }

  /* helper for mobile css navigation */
  const subMenus = document.querySelectorAll(".mainnav .submenu > a");
  subMenus.forEach(sub_li_a => {
    sub_li_a.addEventListener('click', (event) => {
      event.preventDefault();

      closeMenu();

      sub_li_a.parentNode.classList.add("submenu-open");
      sub_li_a.parentNode.parentNode.classList.add("level_2-open");
      const offset = sub_li_a.parentNode.offsetTop;
      sub_li_a.parentNode.style.setProperty("--from-top",offset);

      sub_li_a.parentNode.appendChild(backLink);
    });
  });
  document.addEventListener('keyup', function(ev) {
    // escape key.
    if (ev.keyCode == 27) {
      closeMenu();
    }
  });
  window.addEventListener("click", (event) => {
    if(!document.querySelector(".mainnav").contains(event.target)) {
      closeMenu();
    }
  });
}
