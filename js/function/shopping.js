// const okdone = document.querySelector("");
const OnclickSlide = document.querySelector(".onclickslide");
const OnButton = document.querySelector(".okButon");
const handler = document.querySelector(".handler");
const filter = document.querySelector(".filter-option");
const Category = document.querySelector(".category");
const checkslider = document.querySelector(".checkoption");
const veggies = document.querySelector(".veggies-option");
const meals_component = document.querySelector(".meals-component");

OnButton.addEventListener("click", () => {
  Category.classList.remove("active");
});

const add = "category active";
const arrow = "filter-option active";

function endclose() {
  const list = Category.className;

  if (list != add) {
    Category.classList.add("active");
  } else {
    Category.classList.remove("active");
  }
}

function popup() {
  const list = filter.className;
  if (list != arrow) {
    console.log(list);
    console.log(arrow);

    filter.classList.add("active");
  } else {
    filter.classList.remove("active");
  }
}

const pot = "diet-option active";
const diet = document.querySelector(".diet-option");
function diet1() {
  const list = diet.className;
  if (list != pot) {
    console.log(list);
    console.log(pot);

    diet.classList.add("active");
  } else {
    diet.classList.remove("active");
  }
}

const arrow1 = "veggies-option active";

function popup1() {
  const list = veggies.className;
  if (list != arrow1) {
    console.log(veggies);
    console.log(list);
    veggies.classList.add("active");
  } else {
    console.log(list);
    veggies.classList.remove("active");
  }
}

const arrow2 = "meals-component active";
function meals() {
  const list = meals_component.className;
  if (list != arrow2) {
    console.log(list);
    console.log(arrow);

    meals_component.classList.add("active");
  } else {
    console.log(arrow);
    meals_component.classList.remove("active");
  }
}

const pregnancy = document.querySelector(".pregnancy-option");
const arrow7 = "pregnancy-option active";

function popup3() {
  const list = pregnancy.className;
  if (list != arrow7) {
    console.log(arrow7);
    console.log(list);
    pregnancy.classList.add("active");
  } else {
    console.log(list);
    pregnancy.classList.remove("active");
  }
}

const btn_select = document.querySelector(".btn-select");

const arrow3 = "filter-option active pass";
function selectall() {
  const list = filter.className;
  if (list != arrow3) {
    console.log(list);
    console.log(arrow3);

    filter.classList.add("pass");
  } else {
    console.log(arrow3);

    filter.classList.remove("pass");
  }
}

const arrow8 = "meals-component active pass";

function selectall1() {
  const list = meals_component.className;
  if (list != arrow8) {
    console.log(list);
    console.log(arrow8);

    meals_component.classList.add("pass");
  } else {
    console.log(arrow8);

    meals_component.classList.remove("pass");
  }
}

const arrow4 = "veggies-category age";
const veggies_category = document.querySelector(".veggies-category");
function veggies1() {
  const list = veggies_category.className;
  if (list != arrow4) {
    console.log(list);
    console.log(arrow4);

    veggies_category.classList.add("age");
  } else {
    console.log(arrow4);

    veggies_category.classList.remove("age");
  }
}

const artical2 = document.querySelector(".artical2");
const arrow5 = "artical2 height";

function veggies2() {
  const list = artical2.className;
  if (list != arrow5) {
    console.log(list);
    console.log(arrow5);

    artical2.classList.add("height");
  } else {
    console.log(arrow5);

    artical2.classList.remove("height");
  }
}

const artical3 = document.querySelector(".pregnancy-category");
const arrow10 = "pregnancy-category week";
function veggies3() {
  const list = artical3.className;
  if (list != arrow10) {
    console.log(list);
    console.log(arrow5);

    artical3.classList.add("week");
  } else {
    console.log(arrow5);

    artical3.classList.remove("week");
  }
}

const artical4 = document.querySelector(".artical4");
const arrow11 = "artical4 problem";
function pragi() {
  const list = artical4.className;
  if (list != arrow11) {
    console.log(list);
    console.log(arrow11);

    artical4.classList.add("problem");
  } else {
    console.log(arrow11);

    artical4.classList.remove("problem");
  }
}

const artical5 = document.querySelector(".meals-component1");
const arrow12 = "meals-component1 meals";

function meals1() {
  const list = artical5.className;
  if (list != arrow12) {
    console.log(list);
    console.log(arrow12);

    artical5.classList.add("meals");
  } else {
    console.log(arrow12);

    artical5.classList.remove("meals");
  }
}

const artical6 = document.querySelector(".diet-category");
const arrow13 = "diet-category weight";

function veggies4() {
  const list = artical6.className;
  if (list != arrow13) {
    console.log(list);
    console.log(arrow13);

    artical6.classList.add("weight");
  } else {
    console.log(arrow13);

    artical6.classList.remove("weight");
  }
}

const pop = document.querySelector(".top");
const you = "top type";

function types() {
  const list = pop.className;
  if (list != you) {
    console.log(list);
    console.log(you);

    pop.classList.add("type");
  } else {
    console.log(you);

    pop.classList.remove("type");
  }
}

const meals_component2 = document.querySelector(".meals-component2");
const now = "meals-component2 type";

function miniral() {
  const list = meals_component2.className;
  if (list != now) {
    console.log(list);
    console.log(you);

    meals_component2.classList.add("type");
  } else {
    console.log(you);

    meals_component2.classList.remove("type");
  }
}
