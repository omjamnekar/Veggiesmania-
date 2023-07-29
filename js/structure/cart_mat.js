import { leafy } from "../data/carddisplay/leafy.js";

function createProductHTMLcart3(
  veggiesname,
  brandname,
  brandFullname,
  nutrients,
  rating,
  stars,
  deliveryfirst,
  discount,
  price,
  discription,
  stock,
  img,
  fastdate
) {
  var html =
    "<section class='hero-container-buy'>" +
    "<div class='image-buy'>" +
    "<div class='img-buy'>" +
    "<img src='" +
    img +
    "' alt=''" +
    "/></div> <div class='veggies-buy'>" +
    "<p>" +
    veggiesname +
    "-" +
    brandFullname +
    "</p></div>" +
    "<div class='stock-date-buy'>" +
    "<p> <span class='blue'>FREE delivery" +
    "</span><span class='black'>" +
    (deliveryfirst && deliveryfirst.length >= 0 ? deliveryfirst[0] : "") +
    ",\t" +
    (deliveryfirst && deliveryfirst.length >= 1 ? deliveryfirst[1] : "") +
    "\t" +
    (deliveryfirst && deliveryfirst.length >= 2 ? deliveryfirst[2] : "") +
    "</span> on your first order. </p>" +
    "<p>Details Or fastest delivery Tomorrow, " +
    (fastdate && fastdate.length >= 0 ? fastdate[1] : "ER") +
    "\t" +
    (fastdate && fastdate.length >= 1 ? fastdate[2] : "ER") +
    ' Order within <span> 1 hr 43 mins</span>.<a class="blue">Details</a></p>' +
    '<p class="blue"><i class="bx bxs-location-plus"></i>  Select delivery location-></p>' +
    '<h3 class="stock-txt green">' +
    stock +
    "</h3>" +
    '<p>Sold by <span class="black">' +
    brandFullname +
    '</span> Retail and Fulfilled by <span class="green">veggiesmania.</span> </p>' +
    "</div>" +
    '<div class="video-content">' +
    '<div class="veggies-subimg">' +
    "</div>" +
    '<div class="veggies-video">' +
    //<a href="https://www.bing.com/videos/riverview/relatedvideo?&q=broccoli+video&&mid=990CDF7953FA80A7B700990CDF7953FA80A7B700&&FORM=VRDGAR"></a><img src="https://th.bing.com/th?id=ALSTU3DCFE2EA8D44D5671B53AFA4434704962E0ACE90ACAC6C7F90D335BD28E84079&w=472&h=280&rs=2&o=6&oif=webp&pid=SANGAM" alt=""> -->
    "</div>" +
    '<div class="veggies-charact"></div>' +
    "</div>" +
    "</div>" +
    '<div class="buy-content">' +
    '<div class="identity-buy">' +
    '<h2 class="veggies-name">' +
    veggiesname +
    "</h2>" +
    '<p class="brand-buy"> brand:<span>' +
    brandname +
    "</span></p>" +
    "</div>" +
    '<p class="distributor-product-txt"> driven by <span>' +
    brandFullname +
    "</span> production </p>" +
    '<div class="benefits-buy">' +
    "<div><p>" +
    (nutrients && nutrients.length >= 0 ? nutrients[0] : "") +
    "</p></div>" +
    "<div><p>" +
    (nutrients && nutrients.length >= 1 ? nutrients[1] : "") +
    "</p></div>" +
    "<div><p>" +
    (nutrients && nutrients.length >= 2 ? nutrients[2] : "") +
    "</p></div>" +
    "<div><p>" +
    (nutrients && nutrients.length >= 3 ? nutrients[3] : "") +
    "</p></div>" +
    "<div><p>" +
    (nutrients && nutrients.length >= 4 ? nutrients[4] : "") +
    "</p></div>" +
    "</div>" +
    '<ul style="list-style-type: none" class="star-buy">' +
    '<li class="star-number"><span>' +
    rating +
    "/5</span></li>" +
    '<li><i class="bx ' +
    (stars && stars.length >= 0 ? stars[0] : "") +
    '"></i></li>' +
    '<li><i class="bx ' +
    (stars && stars.length >= 1 ? stars[1] : "") +
    '"></i></li>' +
    '<li><i class="bx ' +
    (stars && stars.length >= 2 ? stars[2] : "") +
    '"></i></li>' +
    '<li><i class="bx ' +
    (stars && stars.length >= 3 ? stars[3] : "") +
    '"></i></li>' +
    '<li><i class="bx ' +
    (stars && stars.length >= 4 ? stars[4] : "") +
    '"></i></li>' +
    "</ul>" +
    "<div>" +
    '<span class="discount-buy"> ' +
    discount +
    "off on veggies </span>" +
    "<span>Read more</span>" +
    "</div>" +
    '<p class="price">' +
    price +
    "</p>" +
    '<p class="para-buy-txt">' +
    discription +
    "</p>" +
    "<p class='quantity-text'> quantity</p>" +
    "<div class='quantity-input-buy'>" +
    "<input type='number'  minlength='1' maxlength='100' required placeholder='1'/>" +
    "<p>Add to wish list</p>" +
    "</div>" +
    '<div class="btn-buy">' +
    "<button>Buy now</button>" +
    "<button>AddtoCart</button>" +
    "</div>" +
    '<div class="line"></div>' +
    "<div>" +
    "<p class='secure-buy blue'> <i class='bx bx-lock-alt' ></i>Secure transaction</p>" +
    '<p class="grift-card-buy"><input type="checkbox">Add Giftcard</p>' +
    "</div>" +
    '<div class="icon-info-buy">' +
    '<div class="icon-con-buy">' +
    "<i class='bx bxs-truck' ></i>" +
    "<p>Free Delivery</p>    " +
    "</div>" +
    '<div class="icon-con-buy">' +
    "<i class='bx bx-money'></i>" +
    "<p>Pay on Delivery</p>" +
    "</div>" +
    '<div class="icon-con-buy">' +
    "<i class='bx bx-lock-alt' ></i>" +
    "<p>Secure transaction</p>" +
    "</div>" +
    '<div class="icon-con-buy">' +
    "<i class='bx bx-leaf' ></i>" +
    "<p>Healthy veggies</p>" +
    "</div>" +
    "</div>" +
    '<p class="checkout-text"> Checkout safely</p>' +
    '<div class="checkout">' +
    //   <!-- PayPal Logo --><table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center"><a href="https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2" title="PayPal" onclick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png" border="0" alt="PayPal Logo"></a></td></tr></table><!-- PayPal Logo -->
    '<img src="https://www.vectorlogo.zone/logos/upi/upi-ar21.svg" alt="">' +
    '<img src="https://sbi.co.in/o/SBI-Theme/images/custom/logo.png" alt="">' +
    "</div>" +
    "</div>" +
    "</section>";

  return html;
}

// const firstProduct = leafy[0];

// window.addEventListener("DOMContentLoaded", function () {
//   //console.log(products);
//   var containerElements = document.querySelector(".hero-container-buy-dynamic");

//   //   for (var i = 0; i < containerElements.length; i++) {

//   var productHTML1 = createProductHTMLcart(
//     firstProduct.veggiesname,
//     firstProduct.brandname,
//     firstProduct.brandFullname,
//     firstProduct.nutrients,
//     firstProduct.rating,
//     firstProduct.stars,
//     firstProduct.deliveryfirst,
//     firstProduct.discount,
//     firstProduct.price,
//     firstProduct.discription,
//     firstProduct.stock,
//     firstProduct.img,
//     firstProduct.fastdate
//   );

//   containerElements.innerHTML = productHTML1;
// });

// Function to get query parameters from URL
function getQueryParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return Object.fromEntries(urlParams.entries());
}

// Function to generate HTML for displaying data

document.addEventListener("DOMContentLoaded", function () {
  const queryParams = getQueryParams();
  const dataId = queryParams["id"];

  if (dataId !== undefined) {
    // Get the data object corresponding to the data-id

    const selectedData = leafy.find((item) => item.id.toString() === dataId);

    if (selectedData !== undefined) {
      // Generate HTML using the data object
      var containerElements = document.querySelector(
        ".hero-container-buy-dynamic"
      );

      console.log(selectedData.deliveryfirst[0]);
      var productHTML1 = createProductHTMLcart3(
        selectedData.veggiesname,
        selectedData.brandname,
        selectedData.brandFullname,
        selectedData.nutrients,
        selectedData.rating,
        selectedData.stars,
        selectedData.deliveryfirst,
        selectedData.discount,
        selectedData.price,
        selectedData.discription,
        selectedData.stock,
        selectedData.img,
        selectedData.fastdate
      );

      // Display the generated HTML on the page
      containerElements.innerHTML = productHTML1;
    } else {
      // If data-id is invalid, display an error message
      var containerElements = document.querySelector(
        ".hero-container-buy-dynamic"
      );
      containerElements.innerHTML = "<p>Data not found!</p>";
    }
  } else {
    // If data-id is not provided, display an error message
    var containerElements = document.querySelector(
      ".hero-container-buy-dynamic"
    );
    containerElements.innerHTML = "<p>Data-id not provided!</p>";
  }
});
