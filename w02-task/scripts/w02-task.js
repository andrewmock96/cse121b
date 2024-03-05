/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Andrew Mock";
let currentYear = "2024";
const profilePicture = "images/profile.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.picture.getElementById("home");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${profilePicture}`);

/* Step 5 - Array */

favFoods = ["Pizza", "Chicken Alfredo", "Ice Cream", "Pie", "Pulled Pork", "Brisket"]
let newFavoriteFood = "Sushi";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += favFoods.join("<br>");
favFoods.shift();
foodElement.innerHTML += "<br>" + favFoods.join("<br>");
favFoods.pop();
foodElement.innerHTML += "<br>" + favFoods.join("<br>");





