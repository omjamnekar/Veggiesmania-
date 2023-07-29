// const wrapper7 = document.querySelector(".wrapper_7");
// const carousel7 = document.querySelector(".carousel_7");
// const firstCardWidth7 = carousel7.querySelector(".card_7").offsetWidth;
// const arrowBtns7 = document.querySelectorAll(".wrapper_7 i");
// const carouselChildrens7 = [...carousel7.children];

// let isDragging7 = false,
//   isAutoPlay7 = true,
//   startX7,
//   startScrollLeft7,
//   timeoutId7;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView7 = Math.round(carousel2.offsetWidth / firstCardWidth7);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens7
//   .slice(-cardPerView7)
//   .reverse()
//   .forEach((card) => {
//     carousel7.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens7.slice(0, cardPerView7).forEach((card) => {
//   carousel7.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
// carousel7.classList.add("no-transition");
// carousel7.scrollLeft = carousel7.offsetWidth;
// carousel7.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns7.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel7.scrollLeft +=
//       btn.id == "left" ? -firstCardWidth7 : firstCardWidth7;
//   });
// });

// const dragStart7 = (e) => {
//   isDragging7 = true;
//   carousel7.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX7 = e.pageX;
//   startScrollLeft7 = carousel7.scrollLeft;
// };

// const dragging7 = (e) => {
//   if (!isDragging7) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel7.scrollLeft = startScrollLeft7 - (e.pageX - startX);
// };

// const dragStop7 = () => {
//   isDragging7 = false;
//   carousel7.classList.remove("dragging");
// };

// const infiniteScroll7 = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel7.scrollLeft === 0) {
//     carousel7.classList.add("no-transition");
//     carousel7.scrollLeft = carousel7.scrollWidth - 2 * carousel7.offsetWidth;
//     carousel7.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (
//     Math.ceil(carousel7.scrollLeft) ===
//     carousel7.scrollWidth - carousel7.offsetWidth
//   ) {
//     carousel7.classList.add("no-transition");
//     carousel7.scrollLeft = carousel7.offsetWidth;
//     carousel7.classList.remove("no-transition");
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId);
//   if (!wrapper7.matches(":hover")) autoPlay();
// };

// const autoPlay7 = () => {
//   if (window.innerWidth < 800 || !isAutoPlay7) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   timeoutId = setTimeout(() => (carousel7.scrollLeft += firstCardWidth3), 2500);
// };

// carousel7.addEventListener("mousedown", dragStart7);
// carousel7.addEventListener("mousemove", dragging7);
// document.addEventListener("mouseup", dragStop7);
// carousel7.addEventListener("scroll", infiniteScroll7);
// wrapper7.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper7.addEventListener("mouseleave", autoPlay7);
