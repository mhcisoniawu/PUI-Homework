/* Pop up modal box codes from  https://www.codinglabweb.com/2022/10/create-popup-modal-box.html */
const section = document.querySelector("section"),
  overlay = document.querySelector(".overlay"),
  showBtn = document.querySelector(".show-modal"),
  closeBtn = document.querySelector(".close-btn");

showBtn.addEventListener("click", () => section.classList.add("active"));

overlay.addEventListener("click", () => section.classList.remove("active"));

closeBtn.addEventListener("click", () => section.classList.remove("active"));

const select1 = document.getElementById("#grade");
const select2 = document.getElementById("#terrain");
const select3 = document.getElementById("#holdStyle");
const select4 = document.getElementById("#move");
const select5 = document.getElementById("#attemptNum");
const select6 = document.getElementById("#gym");

const dataArray = [];

select1.addEventListener("change", function () {
  // Get the selected value from the first select element
  const selectedValue = select1.value;

  // Add the selected value to the array
  dataArray.push(selectedValue);

  // Do something with the array, such as save it to local storage or send it to a server
});
