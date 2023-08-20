const menus = document.querySelectorAll(".navbar-nav>li>a");

menus.forEach((x) => {
  x.addEventListener("click", () => {
    document.querySelector(".navbar-toggler").click();
  });
});
