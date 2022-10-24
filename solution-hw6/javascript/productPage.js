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
// Initialize an empty array for product
let product = [];
let productStorage = localStorage.getItem("storeRolls");

// Build a Roll class to store all current product informaiton
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

// Search parameters that get the list of string from the URL.
const queryString = window.location.search;
// Use the query string to create a URLSearchParams object
const params = new URLSearchParams(queryString);
// Access the parameter we want using the "get" method
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
// console.log(cusPrice.innerText);

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
function addProduct() {
  let roll = new Roll(
    chosenRoll,
    glazingIndex,
    packIndex,
    rolls[chosenRoll].basePrice
  );

  product.push(roll);
  // console.log(roll);
  console.log(product);

  saveToLocalStorage();
}

// Convert the updated cart to JSON and save it in the local storage
function saveToLocalStorage() {
  const rollArrayString = JSON.stringify(product);
  localStorage.setItem("storedRolls", rollArrayString);
}

function retrieveFromLocalStorage() {
  const rollArrayString = localStorage.getItem("storedRolls");
  const rollArray = JSON.parse(rollArrayString);
  product = rollArray;
}

// print the current contents of the cart in local storage after saving.
if (localStorage.getItem("storedRolls") != null) {
  console.log("ITS NOT NULL");
  retrieveFromLocalStorage();
}
