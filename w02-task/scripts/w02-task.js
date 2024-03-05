/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Andrew Mock";
let currentYear = "2024";
let profilePicture = "images/profile.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("home");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */

let favFoods = ["Pizza", "Chicken Alfredo", "Ice Cream", "Pie", "Pulled Pork", "Brisket"]

function formatArrayWithCommas(array) {
  return array.join(", ");
}

foodElement.innerHTML = formatArrayWithCommas(favFoods) + "<br><br>";
let newFavoriteFood = "Sushi";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += formatArrayWithCommas(favFoods) + "<br><br>";
favFoods.shift();
foodElement.innerHTML += formatArrayWithCommas(favFoods) + "<br><br>";
favFoods.pop();
foodElement.innerHTML += formatArrayWithCommas(favFoods) + "<br><br>";




