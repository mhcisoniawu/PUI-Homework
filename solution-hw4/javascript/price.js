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

// Take the price from adpatation arrays and calculate the total amount of money
function calculateTotal(glazingIndex, packIndex) {
  let cusPrice = document.querySelector(".cusPrice");
  let glazingPrice = glazingPriceAdapt[glazingIndex].price;
  let packPrice = packPriceAdapt[packIndex].price;
  // Update the total price and round to 2 decimals
  cusPrice.innerText = ((2.49 + glazingPrice) * packPrice).toFixed(2);
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

/* --------------------- Below is URL parameters for HW4 ------------------------------- */

// Search parameters that get the list of string from the URL.
const queryString = window.location.search;
console.log(queryString);
// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
console.log(params);
// Finally, we can access the parameter we want using the "get" method:
const chosenRoll = params.get("roll");
console.log(chosenRoll);
// Update the header text
let rollHeader = document.querySelector(".rollHeader");
rollHeader.innerText = chosenRoll + " cinnamon roll";
// Use URL parameter to Update the image of selected cinnamon roll
let rollImage = document.querySelector(".productDetailPic");
rollImage.src = "../assets/" + chosenRoll + "-cinnamon-roll.jpeg";
