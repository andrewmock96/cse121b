/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
}
let addNumber1 = Number(document.querySelector("#add1").value);
let addNumber2 = Number(document.querySelector("#add2").value);
document.querySelector("#sum").value = add(addNumber1, addNumber2);
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
function divide (dividend, divisor) {
    return dividend / divisor;
}
let divideNumber1 = Number(document.querySelector("#dividend").value);
let divideNumber2 = Number(document.querySelector("#divisor").value);
let quotient = divide(divideNumber1, divideNumber2);
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
