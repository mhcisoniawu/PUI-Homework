// Initialize an empty set for cart
let cart = new Set();

const glazingPriceAdaptation = [
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
const packPriceAdaptation = [
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

// Print the current contents of the cart in local storage after saving
if (localStorage.getItem("storedRolls") != null) {
  console.log("The cart is not full");
  retrieveFromLocalStorage();
}

// Build a Roll class to store all current product informaiton
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

// Create a new Roll object
function addNewRoll(image, rollType, rollGlazing, packSize, basePrice) {
  const rollinCart = new Roll(
    image,
    rollType,
    rollGlazing,
    packSize,
    basePrice
  );
  // Add it to the cartset
  cart.add(rollinCart);
  console.log(rollinCart, "create");
  return rollinCart;
}

// Make a clone of the cartTemplate
function createRoll(rollinCart) {
  const template = document.querySelector("#cartTemplate");
  const clone = template.content.cloneNode(true);
  // Connect this clone to our rollinCart.element
  rollinCart.element = clone.querySelector(".shoppingBox1");

  const btnDelete = rollinCart.element.querySelector("#remove");
  btnDelete.addEventListener("click", () => {
    deleteRoll(rollinCart);
  });

  // Add the notecard clone to the DOM
  const rollinCartListElement = document.querySelector("#shoppingBox");
  rollinCartListElement.prepend(rollinCart.element);
  // Populate the rollinCart clone with the actual roll content
  updateElement(rollinCart);
}

function updateElement(rollinCart) {
  // Get the HTML elements that need updating
  const rollImageElement = rollinCart.element.querySelector(".rollImage");
  const rollTypeElement = rollinCart.element.querySelector(".rollType");
  const rollGlazingElement = rollinCart.element.querySelector(".rollGlazing");
  const rollPackElement = rollinCart.element.querySelector(".rollPack");
  const rollPriceElement = rollinCart.element.querySelector(".rollPrice");

  // Copy our roll contents over to the corresponding HTML elements
  rollImageElement.src = "../assets/" + rollinCart.type + "-cinnamon-roll.jpeg";
  rollTypeElement.innerText = rollinCart.type + " Cinnamon Roll";
  rollGlazingElement.innerText =
    "Glazing: " + glazingPriceAdaptation[rollinCart.glazing].glazing;
  rollPackElement.innerText =
    "Pack Size: " + packPriceAdaptation[rollinCart.size].size;
  rollPriceElement.innerText =
    "$ " +
    (
      (rollinCart.basePrice +
        glazingPriceAdaptation[rollinCart.glazing].price) *
      packPriceAdaptation[rollinCart.size].price
    ).toFixed(2);

  calculateTotal();
}

function deleteRoll(rollinCart) {
  // Remove the roll DOM object from the UI
  rollinCart.element.remove();
  // Remove the actual Notecard object from our set of notecards
  cart.forEach((cartItem) => {
    if (
      rollinCart.type === cartItem.type &&
      rollinCart.glazing === cartItem.glazing &&
      rollinCart.size === cartItem.size
    ) {
      cart.delete(cartItem);
    }
  });

  updateElement(rollinCart);

  storedCart = Array.from(cart);
  saveToLocalStorage();
  retrieveFromLocalStorage();
}

function calculateTotal() {
  let price = 0;
  basePriceElement = document.querySelector(".shoppingBox4");
  for (const rollinCart of cart) {
    console.log(rollinCart);
    price +=
      (rollinCart.basePrice +
        glazingPriceAdaptation[rollinCart.glazing].price) *
      packPriceAdaptation[rollinCart.size].price;
  }
  basePriceElement.innerText = "$ " + parseFloat(price.toFixed(2));
}

for (const rollinCart of cart) {
  createRoll(rollinCart);
}

function saveToLocalStorage() {
  const rollArrayString = JSON.stringify(storedCart);
  localStorage.setItem("storedRolls", rollArrayString);
}

function retrieveFromLocalStorage() {
  const rollArrayString = localStorage.getItem("storedRolls");
  const rollArray = Array.from(JSON.parse(rollArrayString));
  console.log("Roll Array", rollArray);
  cart = new Set(rollArray);
}
