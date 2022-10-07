// Declare an array of glazing price adaptaions
let glazingPriceAdapt = [
  {
    glazing: "Original",
    price: 0.0,
  },
  {
    glazing: "Sugar Milk",
    price: 0.0,
  },
  {
    glazing: "Vanilla Milk",
    price: 0.5,
  },
  {
    glazing: "Double Chocolate",
    price: 1.5,
  },
];

// Declare an array of pack price adaptaions
let packPriceAdapt = [
  {
    size: "1",
    price: 1,
  },
  {
    size: "3",
    price: 3,
  },
  {
    size: "6",
    price: 5,
  },
  {
    size: "12",
    price: 10,
  },
];

// Initialize the indexes
let glazingIndex = 0;
let packIndex = 0;
// Initialize an empty set for cart
const cart = new Set();
// Building a Roll class to store all current product informaiton
class Roll {
  constructor(image, rollType, rollGlazing, packSize, basePrice) {
    this.image = image;
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
    this.element = null;
  }
}

// Creates a new Roll object
function addNewRoll(image, rollType, rollGLazing, packSize, basePrice) {
  const rollinCart = new Roll(
    image,
    rollType,
    rollGLazing,
    packSize,
    basePrice
  );
  // add it to the cartset
  cart.add(rollinCart);
  return rollinCart;
}

// Make a clone of the cartTemplate
function createRoll(rollinCart) {
  const template = document.querySelector("#cartTemplate");
  const clone = template.content.cloneNode(true);
  // Connect this clone to our rollinCart.element
  rollinCart.element = clone.querySelector(".shoppingBox1");

  const btnDelete = rollinCart.element.querySelector("#remove");
  console.log(btnDelete);
  btnDelete.addEventListener("click", () => {
    deleteRoll(rollinCart);
  });

  // add the notecard clone to the DOM
  const rollinCartListElement = document.querySelector("#shoppingBox");
  rollinCartListElement.prepend(rollinCart.element);
  // populate the rollinCart clone with the actual roll content
  updateElement(rollinCart);
}

function updateElement(rollinCart) {
  // get the HTML elements that need updating
  const rollImageElement = rollinCart.element.querySelector(".rollImage");
  const rollTypeElement = rollinCart.element.querySelector(".rollType");
  const rollGlazingElement = rollinCart.element.querySelector(".rollGlazing");
  const rollPackElement = rollinCart.element.querySelector(".rollPack");
  const rollPriceElement = rollinCart.element.querySelector(".rollPrice");

  // copy our roll contents over to the corresponding HTML elements
  rollImageElement.src = rollinCart.image;
  rollTypeElement.innerText = rollinCart.type + " Cinnamon Roll";
  rollGlazingElement.innerText = "Glazing:" + rollinCart.glazing;
  rollPackElement.innerText = "Pack Size:" + rollinCart.size;
  rollPriceElement.innerText = "$ " + rollinCart.basePrice;

  calculateTotal();
}

function deleteRoll(rollinCart) {
  // remove the roll DOM object from the UI
  rollinCart.element.remove();
  // remove the actual Notecard object from our set of notecards
  cart.delete(rollinCart);
  updateElement(rollinCart);
}

function calculateTotal() {
  let price = 0;
  basePriceElement = document.querySelector(".shoppingBox4");
  for (const rollinCart of cart) {
    price += rollinCart.basePrice;
    console.log(price);
  }
  basePriceElement.innerText =
    "Total" + "             " + "$" + parseFloat(price.toFixed(2));
}

addNewRoll(
  "../assets/original-cinnamon-roll.jpeg",
  "Original",
  "Sugar Milk",
  1,
  2.49
);

addNewRoll(
  "../assets/walnut-cinnamon-roll.jpeg",
  "Walnut",
  "Vanilla Milk",
  12,
  39.9
);
addNewRoll(
  "../assets/raisin-cinnamon-roll.jpeg",
  "Raisin",
  "Sugar Milk",
  3,
  8.97
);
addNewRoll(
  "../assets/apple-cinnamon-roll.jpeg",
  "Apple",
  "Keep Original",
  3,
  10.47
);

for (const rollinCart of cart) {
  // console.log(rollinCart);
  createRoll(rollinCart);
}
