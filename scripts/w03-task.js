/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = sum;
}

// Add an event listener to the button with the id "addNumbers"
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function(subtract1, subtract2) {
    return subtract1 - subtract2;
};
document.querySelector("#subtractNumbers").addEventListener("click", function() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    let difference = subtract(subtract1, subtract2);
    document.querySelector("#difference").value = difference;
});
/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;
document.querySelector("#multiplyNumbers").addEventListener("click", () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    let product = multiply(multiplyNumber1, multiplyNumber2);
    document.querySelector("#product").value = product;
});
/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
    return dividend / divisor;
}
function divideNumbers() {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    let quotient = divide(divideNumber1, divideNumber2);
    document.querySelector("#quotient").value = quotient;
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

document.querySelector("#getTotal").addEventListener("click", () => {
    let subtotal = Number(document.querySelector("#subtotal").value);
    let applyDiscount = document.querySelector("#member").checked;
    let totalDue;
    if (applyDiscount) {
        totalDue = subtotal * 0.8;
    } else {
        totalDue = subtotal;
    }
    document.querySelector("#total").textContent = `Total Due: $${totalDue.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayElement = document.querySelector("#array");
let arrayString = numbersArray.join(",");
arrayElement.innerHTML = arrayString;

/* Output Odds Only Array */


let oddNumbersArray = numbersArray.filter(number => number % 2 == 0);
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */

let evenNumbersArray = numbersArray.filter(number => number % 2 == 0);
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */

let mulitplied = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").textContent = mulitplied;

/* Output Sum of Multiplied by 2 Array */

sumOfMultiplied = mulitplied.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;