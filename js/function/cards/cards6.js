// const wrapper6 = document.querySelector(".wrapper_6");
// const carousel6 = document.querySelector(".carousel_6");
// const firstCardWidth6 = carousel6.querySelector(".card_6").offsetWidth;
// const arrowBtns6 = document.querySelectorAll(".wrapper_6 i");
// const carouselChildrens6 = [...carousel6.children];

// let isDragging6 = false,
//   isAutoPlay6 = true,
//   startX6,
//   startScrollLeft6,
//   timeoutId6;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView6 = Math.round(carousel6.offsetWidth / firstCardWidth6);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens6
//   .slice(-cardPerView6)
//   .reverse()
//   .forEach((card) => {
//     carousel6.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens6.slice(0, cardPerView6).forEach((card) => {
//   carousel6.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
// carousel6.classList.add("no-transition");
// carousel6.scrollLeft = carousel6.offsetWidth;
// carousel6.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns6.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel6.scrollLeft +=
//       btn.id == "left" ? -firstCardWidth6 : firstCardWidth6;
//   });
// });

// const dragStart6 = (e) => {
//   isDragging6 = true;
//   carousel6.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX6 = e.pageX;
//   startScrollLeft6 = carousel6.scrollLeft;
// };

// const dragging6 = (e) => {
//   if (!isDragging6) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel6.scrollLeft = startScrollLeft6 - (e.pageX - startX6);
// };

// const dragStop6 = () => {
//   isDragging6 = false;
//   carousel6.classList.remove("dragging");
// };

// const infiniteScroll6 = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel6.scrollLeft === 0) {
//     carousel6.classList.add("no-transition");
//     carousel6.scrollLeft = carousel6.scrollWidth - 2 * carousel6.offsetWidth;
//     carousel6.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (
//     Math.ceil(carousel6.scrollLeft) ===
//     carousel6.scrollWidth - carousel6.offsetWidth
//   ) {
//     carousel6.classList.add("no-transition");
//     carousel6.scrollLeft = carousel6.offsetWidth;
//     carousel6.classList.remove("no-transition");
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId);
//   if (!wrapper6.matches(":hover")) autoPlay6();
// };

// const autoPlay6 = () => {
//   if (window.innerWidth < 800 || !isAutoPlay6) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   timeoutId = setTimeout(() => (carousel2.scrollLeft += firstCardWidth2), 2500);
// };

// carousel6.addEventListener("mousedown", dragStart6);
// carousel6.addEventListener("mousemove", dragging6);
// document.addEventListener("mouseup", dragStop6);
// carousel6.addEventListener("scroll", infiniteScroll6);
// wrapper6.addEventListener("mouseenter", () => clearTimeout(timeoutId6));
// wrapper6.addEventListener("mouseleave", autoPlay6);
