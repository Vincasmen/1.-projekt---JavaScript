const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-bars");

menuIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("fa-xmark");
});

// menuIcon.addEventListener("click", () => {
//   hamburgerIcon.className = hamburgerIcon.classList.contains("fa-bars")
//     ? "fa-solid fa-xmark"
//     : "fa-solid fa-bars";
// });
