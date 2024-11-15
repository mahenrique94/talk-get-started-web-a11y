const tabs = document.querySelectorAll(".tabs_tab");
const panels = document.querySelectorAll(".tabs_panel");

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
      }

      if (activePanel) {
        activePanel.classList.toggle("is-hide");
      }

      if (tabPanel) {
        tabPanel.classList.toggle("is-hide");
      }

      event.target.setAttribute("aria-selected", true);
    });

    tab.setAttribute("aria-selected", false);
  });

  tabs[0].setAttribute("aria-selected", true);
}

if (panels && panels.length > 0) {
  panels.forEach((panel) => {
    panel.classList.add("is-hide");
  });

  panels[0].classList.remove("is-hide");
}
