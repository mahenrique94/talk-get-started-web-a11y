const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
const tabList = document.querySelectorAll('[role="tablist"]');

if (tabs && tabs.length > 0) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const activeTab = document.querySelector(
        '.tabs_tab[aria-selected="true"]'
      );
      const tabPanel = document.querySelector(
        `.tabs_panel#${event.target.getAttribute("aria-controls")}`
      );
      const activePanel = document.querySelector(".tabs_panel:not(.is-hide)");

      if (activeTab) {
        activeTab.setAttribute("aria-selected", false);
        activeTab.tabIndex = -1;
      }

      if (activePanel) {
        activePanel.classList.toggle("is-hide");
      }

      if (tabPanel) {
        tabPanel.classList.toggle("is-hide");
      }

      event.target.setAttribute("aria-selected", true);
      event.target.tabIndex = 0;
    });

    tab.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "Tab":
          event.preventDefault();
          const activePanel = document.querySelector(
            ".tabs_panel:not(.is-hide)"
          );
          const tabbables = activePanel.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input[type="text"]:not([disabled]), ' +
              'input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), ' +
              'select:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );

          if (tabbables && tabbables.length > 0) {
            tabbables[0].focus();
            activePanel.tabIndex = -1;
          } else {
            activePanel.focus();
          }

          break;
        case "ArrowLeft":
          const leftIndex = Array.from(
            event.target.parentNode.parentNode.children
          ).indexOf(event.target.parentNode);

          if (leftIndex > 0) {
            event.target.parentNode.previousElementSibling.firstElementChild.focus();
          } else {
            event.target.parentNode.parentNode.lastElementChild.firstElementChild.focus();
          }

          break;
        case "ArrowRight":
          const rightIndex = Array.from(
            event.target.parentNode.parentNode.children
          ).indexOf(event.target.parentNode);

          if (
            rightIndex <
            event.target.parentNode.parentNode.children.length - 1
          ) {
            event.target.parentNode.nextElementSibling.firstElementChild.focus();
          } else {
            event.target.parentNode.parentNode.firstElementChild.firstElementChild.focus();
          }

          break;
        case "Home":
          event.target.parentNode.parentNode.firstElementChild.firstElementChild.focus();
          break;
        case "End":
          event.target.parentNode.parentNode.lastElementChild.firstElementChild.focus();
          break;
        default:
          break;
      }
    });

    tab.setAttribute("aria-selected", false);
    tab.tabIndex = -1;
  });

  tabs[0].setAttribute("aria-selected", true);
  tabs[0].tabIndex = 0;
}

if (panels && panels.length > 0) {
  panels.forEach((panel) => {
    panel.classList.add("is-hide");
  });

  panels[0].classList.remove("is-hide");
}
