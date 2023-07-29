import { offersale } from "../data/offerdata.js";
function createsaleHTML(
  veggies,
  punchline,
  state,
  quality,
  speciality,
  storage,
  sodium,
  organic,
  shelf,
  minOrderQuantity
) {
  var html =
    "<div class='sale-heading'> " +
    "<h3 class='ecc'>Big deal on <span>" +
    veggies +
    "</span></h3>" +
    '<h4 class="semi-acc">hurry up and order now </h4>' +
    '<div class=""> ' +
    "<h5>" +
    punchline +
    "</h5>" +
    "<a>for more</a> " +
    "</div> " +
    "<h6>Product Specification</h6> " +
    '<ul class="avg"> ' +
    "<li> " +
    "<p>State Of Origin</p> " +
    "<p>" +
    state +
    "</p>" +
    "</li>" +
    "<li>" +
    "<p>Quality Available</p>" +
    "<p>" +
    quality +
    "</p>" +
    "</li>" +
    "<li>" +
    "<p>Speciality</p>" +
    "<p>" +
    speciality +
    "</p> " +
    "</li>" +
    "<li>" +
    "<p>Storage Tips</p>" +
    "<p>" +
    storage +
    "</p>" +
    "</li>" +
    "<li>" +
    "<p>Sodium</p>" +
    "<p>" +
    sodium +
    "</p>" +
    "</li>" +
    "<li>" +
    "<p>Is It Organic</p>" +
    "<p>" +
    organic +
    "</p>" +
    "</li>" +
    "<li> " +
    "<p>Shelf Life</p>" +
    "<p>" +
    shelf +
    "</p>" +
    "</li>" +
    "<li>" +
    "<p>Usage/Application</p>" +
    "<p>For Cooking</p>" +
    "</li>" +
    "<li> " +
    "<p>Minimum Order Quantity</p>" +
    "<p>" +
    minOrderQuantity +
    "</p> " +
    "</li> " +
    "</ul>" +
    '<aside class="btn-sale"> ' +
    '<button class="AddCart">AddCart</button>' +
    '<button class="for more">for more</button> ' +
    "</aside>" +
    "</div>";

  return html;
}

window.addEventListener("DOMContentLoaded", function () {
  //console.log(products);
  var containerElements = document.getElementsByClassName("slide__text");

  for (var i = 0; i < containerElements.length; i++) {
    var productHTML = createsaleHTML(
      offersale[i].veggies,
      offersale[i].punchline,
      offersale[i].state,
      offersale[i].quality,
      offersale[i].speciality,
      offersale[i].storage,
      offersale[i].sodium,
      offersale[i].organic,
      offersale[i].shelf,
      offersale[i].minOrderQuantity,
      offersale[i].background
    );

    print(veggies);

    // var vak = offersale[i].background;

    containerElements[i].innerHTML = productHTML;

    // document.querySelector(
    //   ".slide:nth-child(" + i + 1 + ") .slide__bg"
    // ).style.backgroundImage = "url(" + vak + ")";

    //  URL(offersale[i].background.toString);
  }
});
