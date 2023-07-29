function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const forgotLink = document.querySelector(".forgot-link");
const backlogin = document.querySelector(".backlog");
const backreg = document.querySelector(".backreg");

// onclickforlogin.addEventListener("click", () => {
//   Page.classList.add("active");
// });

registerLink.addEventListener("click", () => {
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", () => {
  logregBox.classList.remove("active");
});

forgotLink.addEventListener("click", () => {
  logregBox.classList.add("pass");
});

backlogin.addEventListener("click", () => {
  logregBox.classList.remove("pass");
});

// backreg.addEventListener("click", () => {
//   logregBox.classList.remove("pass");
//   logregBox.classList.add("great");
// });

// function onclickforlogi1() {
//   const Page = document.querySelector(".page");
//   Category.classList.add("active");
// }

// function onclickforlogi1() {
//   const Page = document.querySelector(".page");
//   Page.classList.add("active");
// }

// var swiper = new swiper(".slide-container-3", {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   sliderPerGroup: 4,
//   loop: true,
//   centerSlide: "true",
//   fade: "true",
//   grabCursor: "true",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     520: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1000: {
//       slidesPerView: 4,
//     },
//   },
// });

// -----------see more ------------
