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

// Initializing the indexes
let glazingIndex = 0;
let packIndex = 0;
// Initiializing an empty array for cart
let cart = [];
// Building a Roll class to store all current product informaiton
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

// This function creates a new Roll object, and adds it to cart array
function addNewRoll(rollType, rollGLazing, packSize, basePrice) {
  // Create a new roll object. The roll constructor takes four
  // arguments: rollType, rollGlazing, packSize, and basePrice
  const rollinCart = new Roll(rollType, rollGLazing, packSize, basePrice);

  // Add the roll object to our cart array , which keeps track of all the rolls in our application.
  cart.push(rollinCart);
  return rollinCart;
}

// Add four rolls given in the HW5 instruction
addNewRoll("Original", "Sugar Milk", 1, 2.49);
addNewRoll("Walnut", "Vanilla Milk", 12, 39.9);
addNewRoll("Raisin", "Sugar Milk", 3, 8.97);
addNewRoll("Apple", "Original", 3, 10.47);


function createRoll(rollinCart) {
  // make a clone of the notecard template
  const template = document.querySelector('#notecard-template');
  const clone = template.content.cloneNode(true);


function displayCartItem() {}

function removeRoll() {}

// Search parameters that get the list of string from the URL.
const queryString = window.location.search;
// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
// Finally, we can access the parameter we want using the "get" method:
let chosenRoll = params.get("roll");
// Update the header text
let rollHeader = document.querySelector(".rollHeader");
rollHeader.innerText = chosenRoll + " cinnamon roll";
// Use URL parameter to Update the image of selected cinnamon roll
let rollImage = document.querySelector(".productDetailPic");
rollImage.src = "../assets/" + chosenRoll + "-cinnamon-roll.jpeg";
// Update baseprice for each type of cinnamon roll
let cusPrice = document.querySelector(".cusPrice");
cusPrice.innerText = rolls[chosenRoll].basePrice;

// Take the price from adpatation arrays and calculate the total amount of money
function calculateTotal(glazingIndex, packIndex) {
  let cusPrice = document.querySelector(".cusPrice");
  let glazingPrice = glazingPriceAdapt[glazingIndex].price;
  let packPrice = packPriceAdapt[packIndex].price;
  // Update the total price and round to 2 decimals
  cusPrice.innerText = (
    (rolls[chosenRoll].basePrice + glazingPrice) *
    packPrice
  ).toFixed(2);
}

// Runs whenever the glazing dropdown's value changes
function onSelectValueChangeGlazing() {
  glazingIndex = parseInt(this.value);
  calculateTotal(glazingIndex, packIndex);
}

// Runs whenever the pack dropdown's value changes
function onSelectValueChangePack() {
  packIndex = parseInt(this.value);
  calculateTotal(glazingIndex, packIndex);
}

// Find the selected glazing when productDetail page loads
let selectGlazing = document.querySelector("#glazingOptions");
// Find the selected pack size when productDetail page loads
let selectPack = document.querySelector("#packOptions");

// This is a listener that runs when the user make changes in the glazing dropdown
selectGlazing.addEventListener("change", onSelectValueChangeGlazing);
// This is a listener that runs when the user make changes in the pack dropdown
selectPack.addEventListener("change", onSelectValueChangePack);

// Call the function to get the total price
calculateTotal(glazingIndex, packIndex);

// Add the instance of selected roll to the cart array
function addCart() {
  let roll = new Roll(
    chosenRoll,
    glazingIndex,
    packIndex,
    rolls[chosenRoll].basePrice
  );
  cart.push(roll);
  console.log(roll);
  console.log(cart);
}
