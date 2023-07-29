let left_button = document.querySelector(".left.bx.bx-chevron-left");
let right_button = document.querySelector(".right.bx.bx-chevron-right");
let carousel = document.querySelector(".carousel1");
let cards = document.querySelectorAll(".card");
let i = 0;

let slideCards = (pos) => {
  let offset = pos * 24.5;
  console.log("Swvsa");
  Array.from(cards).forEach((card) => {
    card.style.left = `-${offset}rem`;
  });
};

left_button.onclick = () => {
  if (i > 0) i--;
  else i = 25;
  slideCards(i);
};

right_button.onclick = () => {
  if (i < 25) i++;
  else i = 0;
  slideCards(i);
};

const seeMoreLessContainers = document.querySelectorAll(".card-1");
const seeMoreBtns = document.querySelectorAll(".see-more-btn");
const seeLessBtns = document.querySelectorAll(".ses-less-btn");

// Add event listeners to each "See More" button
seeMoreBtns.forEach((btn, index) => {
  console.log(index);
  btn.addEventListener("click", function () {
    const container = seeMoreLessContainers[index]; // Get the corresponding container
    container.classList.toggle("active");
  });
});

// Add event listeners to each "See Less" button
seeLessBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    const container = seeMoreLessContainers[index]; // Get the corresponding container
    // Collapse the container back to the initial height

    container.classList.remove("active"); // Show the "See More" button
  });
});
