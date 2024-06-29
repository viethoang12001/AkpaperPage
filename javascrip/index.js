document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.getElementsByClassName(".tab-link");

  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
      let tabId = this.getAttribute("data-tab");
      let animationType = this.getAttribute("data-animation");
      let tabContent = document.getElementById(tabId);
      tabLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
      const allTabContents = document.getElementsByClassName(".tab-content");
      allTabContents.forEach(function (content) {
        content.classList.remove("active");
      });
      tabContent.classList.add("active", animationType);
    });
  });

  tabLinks[0].click();
});
