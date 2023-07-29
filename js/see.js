// Get all the "See More" and "See Less" buttons
const seeMoreLessContainers = document.querySelectorAll(
  ".see-more-less-container"
);
const seeMoreBtns = document.querySelectorAll(".seeMoreBtn");
const seeLessBtns = document.querySelectorAll(".seeLessBtn");

// Add event listeners to each "See More" button
seeMoreBtns.forEach((btn, index) => {
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
