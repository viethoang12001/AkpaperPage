document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".tab-link");
  console.log(tabLinks);

  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function () {
      // Loại bỏ lớp active từ tất cả các tab links
      for (let j = 0; j < tabLinks.length; j++) {
        tabLinks[j].classList.remove("active");
      }
      // Thêm lớp active cho tab link hiện tại
      this.classList.add("active");

      // Lấy id của tab content từ data-tab attribute
      let tabId = this.getAttribute("data-tab");
      let animationType = this.getAttribute("data-animation");

      // Lấy ra tab content tương ứng và loại bỏ lớp active từ tất cả các tab contents
      const allTabContents = document.querySelectorAll(".tab-content");
      for (let k = 0; k < allTabContents.length; k++) {
        allTabContents[k].classList.remove("active", animationType);
      }

      // Thêm lớp active và animation cho tab content tương ứng
      let tabContent = document.getElementById(tabId);
      tabContent.classList.add("active", animationType);
    });
  }
  tabLinks[0].click();
});
