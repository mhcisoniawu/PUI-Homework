// selecting glazing dropdown //
// let glazingOptions = document.getElementById("glazingOptions");
// let glazingPrice = glazingOptions.value;

// selecting pack dropdown //
// let packOptions = document.getElementById("packOptions");
// let packPrice = packOptions.value;
// selecting the total price for the current cinnamon roll customization //
let glazingPrice;
let packPrice;
let selectedPrice = document.querySelector("selectedPrice");

function selectGlazing() {
  let selectedGlazing = document.getElementById("glazingOptions").value;
  glazingPrice = selectedGlazing;
}

function selectPack() {
  let selectedPack = document.getElementById("packOptions").value;
  packPrice = selectedPack;
}

selectedPrice = (2.49 + glazingPrice) * packPrice;
