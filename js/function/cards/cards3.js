// const wrapper3 = document.querySelector(".wrapper_3");
// const carousel3 = document.querySelector(".carousel_3");
// const firstCardWidth3 = carousel3.querySelector(".card_3").offsetWidth;
// const arrowBtns3 = document.querySelectorAll(".wrapper_3 i");
// const carouselChildrens3 = [...carousel3.children];

// let isDragging3 = false,
//   isAutoPlay3 = true,
//   startX3,
//   startScrollLeft3,
//   timeoutId3;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView3 = Math.round(carousel3.offsetWidth / firstCardWidth3);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens3
//   .slice(-cardPerView3)
//   .reverse()
//   .forEach((card) => {
//     carousel3.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens3.slice(0, cardPerView3).forEach((card) => {
//   carousel3.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
// carousel3.classList.add("no-transition");
// carousel3.scrollLeft = carousel3.offsetWidth;
// carousel3.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns3.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel3.scrollLeft +=
//       btn.id == "left" ? -firstCardWidth3 : firstCardWidth3;
//   });
// });

// const dragStart3 = (e) => {
//   isDragging3 = true;
//   carousel3.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX3 = e.pageX;
//   startScrollLeft3 = carousel3.scrollLeft;
// };

// const dragging3 = (e) => {
//   if (!isDragging3) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel2.scrollLeft = startScrollLeft3 - (e.pageX - startX);
// };

// const dragStop3 = () => {
//   isDragging3 = false;
//   carousel3.classList.remove("dragging");
// };

// const infiniteScroll3 = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel3.scrollLeft === 0) {
//     carousel3.classList.add("no-transition");
//     carousel3.scrollLeft = carousel3.scrollWidth - 2 * carousel3.offsetWidth;
//     carousel3.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (
//     Math.ceil(carousel3.scrollLeft) ===
//     carousel3.scrollWidth - carousel3.offsetWidth
//   ) {
//     carousel3.classList.add("no-transition");
//     carousel3.scrollLeft = carousel3.offsetWidth;
//     carousel3.classList.remove("no-transition");
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId4);
//   if (!wrapper3.matches(":hover")) autoPlay();
// };

// const autoPlay3 = () => {
//   if (window.innerWidth < 800 || !isAutoPlay3) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   timeoutId3 = setTimeout(
//     () => (carousel3.scrollLeft += firstCardWidth3),
//     2500
//   );
// };

// carousel3.addEventListener("mousedown", dragStart3);
// carousel3.addEventListener("mousemove", dragging3);
// document.addEventListener("mouseup", dragStop3);
// carousel3.addEventListener("scroll", infiniteScroll3);
// wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper3.addEventListener("mouseleave", autoPlay3);
