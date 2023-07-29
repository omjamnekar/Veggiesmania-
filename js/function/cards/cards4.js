// const wrapper4 = document.querySelector(".wrapper_4");
// const carousel4 = document.querySelector(".carousel_4");
// const firstCardWidth4 = carousel4.querySelector(".card_4").offsetWidth;
// const arrowBtns4 = document.querySelectorAll(".wrapper_4 i");
// const carouselChildrens4 = [...carousel4.children];

// let isDragging4 = false,
//   isAutoPlay4 = true,
//   startX4,
//   startScrollLeft4,
//   timeoutId4;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView4 = Math.round(carousel4.offsetWidth / firstCardWidth4);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens4
//   .slice(-cardPerView4)
//   .reverse()
//   .forEach((card) => {
//     carousel4.insertAdjacentHTML("afterbegin", card.outerHTML);
//   });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens4.slice(0, cardPerView4).forEach((card) => {
//   carousel4.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate position to hide first few duplicate cards on Firefox
// carousel4.classList.add("no-transition");
// carousel4.scrollLeft = carousel4.offsetWidth;
// carousel4.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// arrowBtns4.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     carousel4.scrollLeft +=
//       btn.id == "left" ? -firstCardWidth4 : firstCardWidth4;
//   });
// });

// const dragStart4 = (e) => {
//   isDragging4 = true;
//   carousel4.classList.add("dragging");
//   // Records the initial cursor and scroll position of the carousel
//   startX4 = e.pageX;
//   startScrollLeft4 = carousel4.scrollLeft;
// };

// const dragging4 = (e) => {
//   if (!isDragging4) return; // if isDragging is false return from here
//   // Updates the scroll position of the carousel based on the cursor movement
//   carousel4.scrollLeft = startScrollLeft4 - (e.pageX - startX4);
// };

// const dragStop4 = () => {
//   isDragging4 = false;
//   carousel4.classList.remove("dragging");
// };

// const infiniteScroll4 = () => {
//   // If the carousel is at the beginning, scroll to the end
//   if (carousel4.scrollLeft === 0) {
//     carousel4.classList.add("no-transition");
//     carousel4.scrollLeft = carousel4.scrollWidth - 2 * carousel4.offsetWidth;
//     carousel4.classList.remove("no-transition");
//   }
//   // If the carousel is at the end, scroll to the beginning
//   else if (
//     Math.ceil(carousel4.scrollLeft) ===
//     carousel4.scrollWidth - carousel4.offsetWidth
//   ) {
//     carousel4.classList.add("no-transition");
//     carousel4.scrollLeft = carousel4.offsetWidth;
//     carousel4.classList.remove("no-transition");
//   }

//   // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//   clearTimeout(timeoutId4);
//   if (!wrapper4.matches(":hover")) autoPlay4();
// };

// const autoPlay4 = () => {
//   if (window.innerWidth < 800 || !isAutoPlay4) return; // Return if window is smaller than 800 or isAutoPlay is false
//   // Autoplay the carousel after every 2500 ms
//   timeoutId4 = setTimeout(
//     () => (carousel4.scrollLeft += firstCardWidth4),
//     2500
//   );
// };

// carousel4.addEventListener("mousedown", dragStart4);
// carousel4.addEventListener("mousemove", dragging4);
// document.addEventListener("mouseup", dragStop4);
// carousel4.addEventListener("scroll", infiniteScroll4);
// wrapper4.addEventListener("mouseenter", () => clearTimeout(timeoutId4));
// wrapper4.addEventListener("mouseleave", autoPlay4);
