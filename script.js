document.addEventListener("DOMContentLoaded", () => {

  // 하단 네비게이션
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {

    item.addEventListener("click", () => {

      // 모든 메뉴에서 active 제거
      navItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      // 클릭한 메뉴에 active 추가
      item.classList.add("active");

    });

  });

});