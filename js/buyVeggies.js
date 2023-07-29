document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".onclick-buy");
  const items = document.querySelectorAll(".item");
  const click = document.querySelectorAll(".onclick-buy");

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      // Remove "active" class from all items
      items.forEach(function (item) {
        item.classList.remove("active");
      });

      click.forEach(function (item) {
        item.classList.remove("green");
      });

      // Add "active" class to the corresponding item
      items[index].classList.add("active");
      click[index].classList.add("green");
    });
  });
});

// import { leafy } from "../js/data/carddisplay/leafy.js";

// document.addEventListener("DOMContentLoaded", function () {
//   const buttons = document.querySelectorAll(".btn-buy-shift");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const card = button.parentElement;
//       const cardId = card.dataset.id;

//       const selectedData = leafy[cardId];
//       window.location.href =
//         window.location.href = `buyVeggies.html?name=${selectedData.name}&age=${selectedData.age}&imagePath=${selectedData.imagePath}`;

//       // document.getElementById("displayedName").innerText = selectedData.name;
//       // document.getElementById("displayedAge").innerText = selectedData.img;
//     });
//   });
// });
// // chart into the compositon
