const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-xmark");
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});

checkMediaQuery = () => {
  if (window.innerWidth > 600) {
    menuList.style.display = "block";
  } else {
    menuList.style.display = "none";
  }
};

window.addEventListener("resize", checkMediaQuery);

// menuIcon.addEventListener("click", () => {
//   hamburgerIcon.className = hamburgerIcon.classList.contains("fa-bars")
//     ? "fa-solid fa-xmark"
//     : "fa-solid fa-bars";
// });
