// const wrapper5 = document.querySelector(".wrapper_5");
// const carousel5 = document.querySelector(".carousel_5");
// const firstCardWidth5 = carousel5.querySelector(".card_5").offsetWidth;
// const arrowBtns5 = document.querySelectorAll(".wrapper_5 i");
// const carouselChildrens5 = [...carousel5.children];

// let isDragging5 = false,
//   isAutoPlay5 = true,
//   startX5,
//   startScrollLeft5,
//   timeoutId5;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView5 = Math.round(carousel5.offsetWidth / firstCardWidth5);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens5
//   .slice(-cardPerView5)
//   .reverse()
//   .forEach((card) => {
//     carousel5.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens5.slice(0, cardPerView5).forEach((card) => {
//   carousel5.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
// carousel5.classList.add("no-transition");
// carousel5.scrollLeft = carousel5.offsetWidth;
// carousel5.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns5.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel5.scrollLeft +=
//       btn.id == "left" ? -firstCardWidth5 : firstCardWidth5;
//   });
// });

// const dragStart5 = (e) => {
//   isDragging5 = true;
//   carousel5.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX5 = e.pageX;
//   startScrollLeft5 = carousel5.scrollLeft;
// };

// const dragging5 = (e) => {
//   if (!isDragging5) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel5.scrollLeft = startScrollLeft5 - (e.pageX - startX5);
// };

// const dragStop5 = () => {
//   isDragging5 = false;
//   carousel5.classList.remove("dragging");
// };

// const infiniteScroll5 = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel5.scrollLeft === 0) {
//     carousel5.classList.add("no-transition");
//     carousel5.scrollLeft = carousel5.scrollWidth - 2 * carousel5.offsetWidth;
//     carousel5.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (
//     Math.ceil(carousel5.scrollLeft) ===
//     carousel5.scrollWidth - carousel5.offsetWidth
//   ) {
//     carousel5.classList.add("no-transition");
//     carousel5.scrollLeft = carousel5.offsetWidth;
//     carousel5.classList.remove("no-transition");
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId5);
//   if (!wrapper5.matches(":hover")) autoPlay();
// };

// const autoPlay5 = () => {
//   if (window.innerWidth < 800 || !isAutoPlay5) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   timeoutId5 = setTimeout(
//     () => (carousel5.scrollLeft += firstCardWidth5),
//     2500
//   );
// };

// carousel5.addEventListener("mousedown", dragStart5);
// carousel5.addEventListener("mousemove", dragging5);
// document.addEventListener("mouseup", dragStop5);
// carousel5.addEventListener("scroll", infiniteScroll5);
// wrapper5.addEventListener("mouseenter", () => clearTimeout(timeoutId5));
// wrapper5.addEventListener("mouseleave", autoPlay5);
