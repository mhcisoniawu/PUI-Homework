// selecting glazing dropdown //
// let glazingOptions = document.getElementById("glazingOptions");
// let glazingPrice = glazingOptions.value;

// selecting pack dropdown //
// let packOptions = document.getElementById("packOptions");
// let packPrice = packOptions.value;
// selecting the total price for the current cinnamon roll customization //
let glazingPrice;
let packPrice;
let cusPrice = document.querySelector("cusPrice");

function selectGlazing(index) {
  let selectedGlazing = document.getElementById("glazingOptions").value;
  // glazingPrice = selectedGlazing;
}
console.log(selectGlazing(3));

function selectPack() {
  let selectedPack = document.getElementById("packOptions").value;
  // packPrice = selectedPack;
}

selectedPrice = (2.49 + glazingPrice) * packPrice;
