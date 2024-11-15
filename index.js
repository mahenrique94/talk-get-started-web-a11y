const tabs = document.querySelectorAll(".tabs_tab");
const panels = document.querySelectorAll(".tabs_panel");

if (tabs && tabs.length > 0) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
      const activeTab = document.querySelector(".tabs_tab.is-active");
      const tabPanel = document.querySelector(
        `.tabs_panel#${event.target.dataset.tab}`
      );
      const activePanel = document.querySelector(".tabs_panel:not(.is-hide)");

      if (activeTab) {
        activeTab.classList.toggle("is-active");
      }

      if (activePanel) {
        activePanel.classList.toggle("is-hide");
      }

      if (tabPanel) {
        tabPanel.classList.toggle("is-hide");
      }

      event.target.classList.toggle("is-active");
    });
  });

  tabs[0].classList.add("is-active");
}

if (panels && panels.length > 0) {
  panels.forEach((panel) => {
    panel.classList.add("is-hide");
  });

  panels[0].classList.remove("is-hide");
}
