/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Andrew Mock";
const currentYear = "2024";
const profilePicture = "images/profile.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favFoods = ["Pizza", "Chicken Alfredo", "Ice Cream", "Pie", "Pulled Pork", "Brisket"];

function formatArrayWithCommas(array) {
  return array.join(", ");
}

foodElement.innerHTML = formatArrayWithCommas(favFoods) + "<br>";
let newFavoriteFood = "Sushi";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += formatArrayWithCommas(favFoods) + "<br>";
favFoods.shift();
foodElement.innerHTML += formatArrayWithCommas(favFoods) + "<br>";
favFoods.pop();
foodElement.innerHTML += formatArrayWithCommas(favFoods) + "<br>";