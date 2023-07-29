import { products } from "../data/cards/cardsdata.js";
import { products2 } from "../data/cards/cards_data2.js";
import { products3 } from "../data/cards/cards_data3.js";
import { products4 } from "../data/cards/cards_data4.js";
import { products5 } from "../data/cards/cards_data5.js";
import { products6 } from "../data/cards/cards_data6.js";
import { products7 } from "../data/cards/cards_data7.js";

function createProductHTML(
  imageSrc,
  productName,
  price,
  discount,
  description,
  i
) {
  var html =
    '<div class="product"  data-id="' +
    i +
    '"' +
    ">" +
    '<img src="' +
    imageSrc +
    '" alt=""/>' +
    '<article class="partical">' +
    '<h3 class="pro-heading">' +
    productName +
    "</h3>" +
    '<span class="price">' +
    price +
    "<span>" +
    discount +
    "</span></span>" +
    "<div class ='card-1'>" +
    "<div class='card-content'>" +
    "<p class='text'>" +
    description +
    "</p></div>" +
    "<button class='see-more-btn'>See More</button></div>" +
    '<div class="list-btn">' +
    "<button class='btn-buy-shift'>Buy</button>" +
    "<button>AddCart</button>" +
    "</div>" +
    "</article>" +
    "</div>";

  return html;
}

function createProductHTML1(
  imageSrc,
  productName,
  price,
  discount,
  description,
  id
) {
  var html =
    '<li class="card">' +
    '<img src="' +
    imageSrc +
    '" alt=""/>' +
    '<article class="partical">' +
    '<h3 class="pro-heading">' +
    productName +
    "</h3>" +
    '<span class="price">' +
    price +
    "<span>" +
    discount +
    "</span></span>" +
    "<div class ='card-1'>" +
    "<div class='card-content'>" +
    "<p class='text'>" +
    description +
    "</p></div>" +
    "<button class='see-more-btn'>See More</button>" +
    "<button class='see-less-btn'>See Less</button></div>" +
    '<div class="list-btn" data-id="' +
    id +
    '">' +
    "<button class='btn-buy-shift'>Buy</button>" +
    "<button>AddCart</button>" +
    "</div>" +
    "</article>" +
    "</div>" +
    "</li>";

  // Create a DOM element from the HTML string using DOMParser
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, "text/html");
  var liElement = doc.body.firstChild;

  return liElement;
}

function generateCards() {
  const containerElements = document.querySelector(".carousel");

  // Loop through the data array and create a card for each item
  products.forEach((product) => {
    const cardHTML = createProductHTML1(
      product.imageSrc,
      product.productName,
      product.price,
      product.discount,
      product.description,
      product.id
    );

    // Append the newly created card element to the container
    containerElements.appendChild(cardHTML);
  });
}

function handleShowData() {
  const buttons = document.querySelectorAll(".btn-buy-shift");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".list-btn");
      const dataId = card.dataset.id;
      // Redirect to display.html with query parameters
      window.location.href = `buyVeggies.html?id=${dataId}`;
    });
  });
}

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  generateCards();
  handleShowData();
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements2 = document.getElementsByClassName("productContainer2");

  for (var i = 0; i < containerElements2.length; i++) {
    var productHTML2 = createProductHTML(
      products2[i].imageSrc,
      products2[i].productName,
      products2[i].price,
      products2[i].discount,
      products2[i].description
    );

    containerElements2[i].innerHTML = productHTML2;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements2 = document.getElementsByClassName("productContainer2");

  for (var i = 0; i < containerElements2.length; i++) {
    var productHTML2 = createProductHTML(
      products2[i].imageSrc,
      products2[i].productName,
      products2[i].price,
      products2[i].discount,
      products2[i].description
    );

    containerElements2[i].innerHTML = productHTML2;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements3 = document.getElementsByClassName("productContainer3");

  for (var i = 0; i < containerElements3.length; i++) {
    var productHTML3 = createProductHTML(
      products3[i].imageSrc,
      products3[i].productName,
      products3[i].price,
      products3[i].discount,
      products3[i].description
    );

    containerElements3[i].innerHTML = productHTML3;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements4 = document.getElementsByClassName("productContainer4");

  for (var i = 0; i < containerElements4.length; i++) {
    var productHTML4 = createProductHTML(
      products4[i].imageSrc,
      products4[i].productName,
      products4[i].price,
      products4[i].discount,
      products4[i].description
    );

    containerElements4[i].innerHTML = productHTML4;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements5 = document.getElementsByClassName("productContainer5");

  for (var i = 0; i < containerElements5.length; i++) {
    var productHTML5 = createProductHTML(
      products5[i].imageSrc,
      products5[i].productName,
      products5[i].price,
      products5[i].discount,
      products5[i].description
    );

    containerElements5[i].innerHTML = productHTML5;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements6 = document.getElementsByClassName("productContainer6");

  for (var i = 0; i < containerElements6.length; i++) {
    var productHTML6 = createProductHTML(
      products6[i].imageSrc,
      products6[i].productName,
      products6[i].price,
      products6[i].discount,
      products6[i].description
    );

    containerElements6[i].innerHTML = productHTML6;
  }
});

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements7 = document.getElementsByClassName("productContainer7");

  for (var i = 0; i < containerElements7.length; i++) {
    var productHTML7 = createProductHTML(
      products7[i].imageSrc,
      products7[i].productName,
      products7[i].price,
      products7[i].discount,
      products7[i].description
    );

    containerElements7[i].innerHTML = productHTML7;
  }
});

const cards = document.querySelectorAll(".card");
Array.from(cards).forEach((card) => {
  let seeMoreBtn = card.querySelector(".see-more-btn");
  let textContent = card.querySelector(".card-content");

  if (seeMoreBtn && textContent) {
    seeMoreBtn.addEventListener("click", () => {
      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        seeMoreBtn.innerHTML = "See Less";
        textContent.style.height = textContent.scrollHeight + "px";
      } else {
        seeMoreBtn.innerHTML = "See More";
        textContent.style.height = "2.9rem";
      }
    });
  }
});

let more = document.querySelectorAll(".see-more-btn");
for (let i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function () {
    more[i].parentNode.classList.toggle("active");
  });
}
