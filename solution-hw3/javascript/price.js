// Initializing
let glazingIndex = 0;
let packIndex = 0;

// An array of glazing price adaptaions
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

// An array of pack price adaptaions
let packPriceAdapt = [
  {
    size: 1, 
    price: 1,
  },
  {
    size: 
    price: 2,
  },
  {
    price: 3,
  },
  {
    price: 4,
  },
];

function generatePrice(glazingIndex, packIndex) {
  let cusPrice = document.querySelector(".cusPrice");
  let glazingPrice = glazingPriceAdapt[glazingIndex].price;
  let packPrice = packPriceAdapt[packIndex].price;

  cusPrice.innerText = (2.49 + glazingPrice) * packPrice;
}

function onSelectValueChangeGlazing() {
  glazingIndex = parseInt(this.value);
  generatePrice(glazingIndex, packIndex);
}

function onSelectValueChangePack() {
  packIndex = parseInt(this.value);
  generatePrice(glazingIndex, packIndex);
}

// Find the selected glazing when productDetail page loads
let selectGlazing = document.querySelector("#glazingOptions");
// Find the selected pack size when productDetail page loads
let selectPack = document.querySelector("#packOptions");

// This is a listener that runs when the user make changes in the glazing dropdown.
selectGlazing.addEventListener("change", onSelectValueChangeGlazing);
// This is a listener that runs when the user make changes in the pack dropdown.
selectPack.addEventListener("change,", onSelectValueChangePack);

generatePrice(glazingIndex, packIndex);
