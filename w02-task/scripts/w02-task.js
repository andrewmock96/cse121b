/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Andrew Mock"
let currentYear = "2024"
let profilePicture = "w02-task\images\profile.png"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name")
const foodElement = document.getElementById("food")
const yearElement = document.querySelector("#year")
const imageElement = document.getElementById("profilePicture")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture)
imageElement.setAttribute("alt", "Profile image of ${profilePicture}")

/* Step 5 - Array */






